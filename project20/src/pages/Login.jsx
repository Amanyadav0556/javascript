function Login() {
  return (
    <section>
      <h2>Login</h2>
      <form className="form" onSubmit={(event) => event.preventDefault()}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
      </form>
    </section>
  )
}

export default Login
