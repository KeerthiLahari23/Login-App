// Write your code here
import './index.css'
const Login = props => {
  const {login} = props
  return (
    <button type="button" onClick={login} className={login}>
      Login
    </button>
  )
}
export default Login
