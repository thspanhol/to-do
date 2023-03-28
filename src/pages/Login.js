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
            <label onClick={() => alert("Faça o login com um nome de usuário e uma senha de no mínimo 4 caracteres cada. Use esse mesmo usuário e senha nas próximas vezes para acessar sua lista novamente! 😄")}>Primeira vez aqui?</label>
        </div>
        <div className={classes.wrapper}>
		    <span data-text="Lista de"></span>
		    <span data-text="Tarefas"></span>
	      </div>
        <p>Minha</p>
      </div>
  );
}

export default Login;
