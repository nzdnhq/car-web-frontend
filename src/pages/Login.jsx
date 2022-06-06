import '../public/css/login.css'
import Navbar from '../components/Navbar'
import LoginForm from '../components/LoginForm'
import FooterComponent from '../components/Footer'

function Login() {
  return (
    <>
      <div className="App bg-aliceblue h-100">
        <Navbar />
        <LoginForm />
      </div>
      <FooterComponent />
    </>
  )
}

export default Login
