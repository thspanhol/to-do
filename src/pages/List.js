/* import classes from "./List.module.css"

function List(props) {

    const {
        setQuest,
        quest,
        todos,
        toggleComplete,
        deleteTodo,
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
    <div className={classes.list}>
      <input type="text" placeholder="Nova Tarefa" onChange={(e) => setQuest(e.target.value)} value={quest} onKeyDown={handleKeyDownList}/>
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
    </div>
  );
}

export default List; */
import classes from "./List.module.css"

function List(props) {

    const {
        setQuest,
        quest,
        todos,
        toggleComplete,
        deleteTodo,
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
    <div className={classes.list}>
      <input type="text" placeholder="Nova Tarefa" onChange={(e) => setQuest(e.target.value)} value={quest} onKeyDown={handleKeyDownList}/>
      <button onClick={() => createTodo()}>Enviar</button>
      <div className={classes.file}>
        <h2>Minhas Tarefas</h2>
        {todos !== "" && orderTodos.map((todo) => {
        return (
          <label key={todo.id}>
            <div>
              <input type="checkbox" checked={todo.completed}/>
              <i onClick={() => toggleComplete(todo)}></i>
              <span onClick={() => toggleComplete(todo)}>{todo.text}</span>
            </div>
            <img src="./lixo.png" alt="Excluir" onClick={() => deleteTodo(todo.id)}/>
          </label>
        )
      })}
      </div>
      
    </div>
  );
}

export default List;