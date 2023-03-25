import { addDoc, collection, deleteDoc, doc, onSnapshot, query, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase";


function App() {

  const [todos, setTodos] = useState("");
  const [quest, setQuest] = useState("");

  //Create
  const createTodo = async () => {
    if(quest === "") {
      alert('Primeiro escreva sua tarefa.')
      return
    }
    await addDoc(collection(db, 'todos'), {
      text: quest,
      completed: false,
      id: "teste1"
    })
    setQuest('');
  }
  //Read
  useEffect(() => {
    const q = query(collection(db, 'todos'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = []
      querySnapshot.forEach((doc) => {
        todosArr.push({...doc.data(), id: doc.id})
      });
      console.log(todosArr);
      setTodos(todosArr);
    })
    return () => unsubscribe;
  }, [])
  //Update
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed
    });
  };
  //Delete
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
  };


  return (
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
    </div>
  );
}

export default App;
