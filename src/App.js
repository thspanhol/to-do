import { addDoc, collection, deleteDoc, doc, onSnapshot, query, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase";


function App() {

  const [todos, setTodos] = useState("");
  const [quest, setQuest] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const fireCollection = `${user}-#-${password}`;
  const [login, setLogin] = useState(false);
  const [getDb, setGetDb] = useState(0);

  //Create
  const createTodo = async () => {
    if(quest === "") {
      alert('Primeiro escreva sua tarefa.')
      return
    }
    await addDoc(collection(db, fireCollection), {
      text: quest,
      completed: false,
    })
    setQuest('');
    setGetDb(getDb + 1)
  }
  //Read
  useEffect(() => {
    const q = query(collection(db, fireCollection));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = []
      querySnapshot.forEach((doc) => {
        todosArr.push({...doc.data(), id: doc.id})
      });
      console.log(todosArr);
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
      <div>
      <h1>Spanhol</h1>
      <input type="text" onChange={(e) => setQuest(e.target.value)} value={quest}/>
      <button onClick={() => createTodo()}>Enviar</button>
      {todos !== "" && todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h4 onClick={() => toggleComplete(todo)}>{todo.text}</h4>
            <input type="checkbox" checked={todo.completed}/>
            <button onClick={() => deleteTodo(todo.id)}>Excluir</button>
          </div>
        )
      })}
      <button onClick={
        () => console.log(fireCollection)
      }>Teste</button>
    </div>
    ) : (
      <div>
        <h1>Login</h1>
        <input type="text" onChange={(e) => setUser(e.target.value)} value={user}/>
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
        <button onClick={() => {
          if(password !== "" && password.length >= 4 && user !== "") {
            setLogin(true);
            setGetDb(getDb + 1)
          } else {
            alert("Você deve utilizar um nome de usuário e sua senha deve conter no mínimo 4 caracteres.")
          }
        }}>Entrar</button>
      </div>
    )
  );
}

export default App;
