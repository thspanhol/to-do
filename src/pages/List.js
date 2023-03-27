import classes from "./List.module.css"

function List(props) {

    const {
        setQuest,
        quest,
        todos,
        toggleComplete,
        deleteTodo,
        fireCollection,
        createTodo,
        handleKeyDownList
    } = props;

    const orderTodos = todos.sort((a, b) => {
        if(a.index < b.index) {
            return -1;
        } else {
            return true;
        }
    });

  return (
    <div>
      <input type="text" onChange={(e) => setQuest(e.target.value)} value={quest} onKeyDown={handleKeyDownList}/>
      <button onClick={() => createTodo()}>Enviar</button>
      {todos !== "" && orderTodos.map((todo) => {
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
  );
}

export default List;