import classes from "./Login.module.css"

function Login(props) {

    const {
        setUser,
        user,
        setPassword,
        password,
        setLogin,
        setGetDb,
        getDb,
    } = props;

  return (
    <div className={classes.login}>
       <div>
         <img src="./task-char.png" alt="logo"/>
       </div>
        <div>
            <h1>Login</h1>
            <input placeholder="Usuário" type="text" onChange={(e) => setUser(e.target.value)} value={user}/>
            <input placeholder="Senha" type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            <button onClick={() => {
            if(password !== "" && password.length >= 4 && user !== "") {
                setLogin(true);
                setGetDb(getDb + 1)
            } else {
                alert("Você deve utilizar um nome de usuário e sua senha deve conter no mínimo 4 caracteres.")
            }
            }}>Entrar</button>
        </div>
      </div>
  );
}

export default Login;
