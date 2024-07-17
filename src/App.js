
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Counter from './components/Counter';
import Home from './components/Home'
import Example from './components/Hooks'
import SignUp from './components/SignUp';
import Login from './components/Login';




function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <div className='App'>
      <SignUp />
       <Login />
      <Example/>
      <Home/>
      

      
            
     </div>
    </>
  )
}

export default App

