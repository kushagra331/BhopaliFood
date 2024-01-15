
const handleSubmit = (event) => {
    event.preventDefault();
}
const Login = () =>{
    return(
        <>
            <form className="logform" onSubmit={handleSubmit}>
                <h3>Login here</h3>
                <label>User Name</label>
                <input type="text" name="" id="" placeholder="Username" />
                <label>Password</label>
                <input type="password" name="" id="" placeholder="Password" />
                <button class="login loginpage">login</button>
            </form>
        </>
    ) 
        
}

export default Login;