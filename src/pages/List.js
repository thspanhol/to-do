import classes from "./List.module.css";

function List(props) {
  const {
    setQuest,
    quest,
    todos,
    toggleComplete,
    deleteTodo,
    createTodo,
    handleKeyDownList,
  } = props;

  const orderTodos = todos.sort((a, b) => {
    if (a.index < b.index) {
      return -1;
    } else {
      return true;
    }
  });

  return (
    <div className={classes.list}>
      <input
        type="text"
        placeholder="Nova Tarefa"
        maxLength={40}
        onChange={(e) => setQuest(e.target.value)}
        value={quest}
        onKeyDown={handleKeyDownList}
      />
      <button onClick={() => createTodo()}>Adicionar</button>
      <div className={classes.file}>
        <h2>Minhas Tarefas</h2>
        {todos !== "" &&
          orderTodos.map((todo) => {
            return (
              <label key={todo.id}>
                <div>
                  <input type="checkbox" checked={todo.completed} />
                  <i onClick={() => toggleComplete(todo)}></i>
                  <span onClick={() => toggleComplete(todo)}>{todo.text}</span>
                </div>
                <img
                  src="./lixo.png"
                  alt="Excluir"
                  onClick={() => deleteTodo(todo.id)}
                />
              </label>
            );
          })}
      </div>
    </div>
  );
}

export default List;
