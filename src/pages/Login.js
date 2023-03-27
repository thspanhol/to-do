import classes from "./Login.module.css"

function Login(props) {

    const {
        setUser,
        user,
        setPassword,
        password,
        validateLogin,
        handleKeyDownLogin
    } = props;

  return (
    <div className={classes.login}>
       <div>
         <img src="./task-char.png" alt="logo"/>
       </div>
        <div>
            <h1>Login</h1>
            <input placeholder="Usuário" type="text" onChange={(e) => setUser(e.target.value)} value={user} onKeyDown={handleKeyDownLogin}/>
            <input placeholder="Senha" type="password" onChange={(e) => setPassword(e.target.value)} value={password} onKeyDown={handleKeyDownLogin}/>
            <button onClick={() => validateLogin()}>Entrar</button>
        </div>
      </div>
  );
}

export default Login;
