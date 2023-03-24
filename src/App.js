import { collection, doc, onSnapshot, query, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase";


function App() {

  const [todos, setTodos] = useState("");

  //Create
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


  return (
    <div>
      <h1>Spanhol</h1>
      <input type="text"/>
      <button>Enviar</button>
      {todos !== "" && todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h4 onClick={() => toggleComplete(todo)}>{todo.text}</h4>
            <input type="checkbox" checked={todo.completed}/>
          </div>
        )
      })}
    </div>
  );
}

export default App;
