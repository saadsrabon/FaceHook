

const LoginForm = () => {
  return (
    <form className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]">
    {/* <!-- email --> */}
    
    {/* <!-- password --> */}
    <div className="form-control">
        <label className="auth-label" htmlFor="email">Password</label>
        <input
            className="auth-input"
            name="password"
            type="password"
            id="password"
        />
    </div>
    {/* <!-- Submit --> */}
    <button
        className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
        type="submit"
    >
        Login
    </button>
</form>
  )
}

export default LoginForm