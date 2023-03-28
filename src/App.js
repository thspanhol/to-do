import { addDoc, collection, deleteDoc, doc, onSnapshot, query, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import Login from "./pages/Login";
import "./App.module.css"
import List from "./pages/List";


function App() {

  const [todos, setTodos] = useState("");
  const [quest, setQuest] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const fireCollection = `${user.toLocaleLowerCase()}-#-${password}`;
  const [login, setLogin] = useState(false);
  const [getDb, setGetDb] = useState(0);
  const [indexTodo, setIndexTodo] = useState(0);

  //Login Functions
  const validateLogin = () => {
    if(password !== "" && password.length >= 4 && user !== "") {
        setLogin(true);
        setGetDb(getDb + 1)
    } else {
        alert("Você deve utilizar um nome de usuário e sua senha deve conter no mínimo 4 caracteres.")
    }
    };

    const handleKeyDownLogin = (e) => {
      if(e.key === "Enter") {
          validateLogin();
      }
   };

  //List Functions 
  //Create
  const createTodo = async () => {
    if(quest === "") {
      alert('Primeiro escreva sua tarefa.')
      return
    }
    await addDoc(collection(db, fireCollection), {
      text: quest[0].toLocaleUpperCase() + quest.substring(1),
      completed: false,
      index: indexTodo + 1,
    })
    setQuest('');
    setGetDb(getDb + 1)
  };

  const handleKeyDownList = (e) => {
    if(e.key === "Enter") {
        createTodo();
    }
 };
  //Read
  useEffect(() => {
    const q = query(collection(db, fireCollection));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = []
      querySnapshot.forEach((doc) => {
        todosArr.push({...doc.data(), id: doc.id})
      });
      setIndexTodo(todosArr.length);
      setTodos(todosArr);
    })
    return () => unsubscribe;
  }, [getDb])
  //Update
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, fireCollection, todo.id), {
      completed: !todo.completed
    });
  };
  //Delete
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, fireCollection, id))
  };


  return (
    login ? (
      <List
      setQuest={setQuest}
      quest={quest}
      todos={todos}
      toggleComplete={toggleComplete}
      deleteTodo={deleteTodo}
      createTodo={createTodo}
      handleKeyDownList={handleKeyDownList} />
    ) : (
      <Login
      setUser={setUser}
      user={user}
      setPassword={setPassword}
      password={password}
      validateLogin={validateLogin}
      handleKeyDownLogin={handleKeyDownLogin} />
    )
  );
}

export default App;
