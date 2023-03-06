import React,{useState} from 'react'
import { useNavigate} from "react-router-dom";
import '../CSS/login.css'
 

const Login = () => {
    const navigate = useNavigate();
    const [inputText, setInputText] = useState({
        username:'',
        password: ''

   })
   const [errors, setError] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      if(inputText.username.length ===0 || inputText.password.length ===0)
      setError(true);
      
      
      };
      function handleChange(event){
        setInputText({...inputText, [event.target.name]: event.target.value})
       };
  return (
    <div className='Login'>
    <div className="form-login"  onSubmit={handleSubmit}>
        <div className="title">Bienvenido</div>
        <div className="subtitle">Log in!</div>
        <div className='input-container ic1'>
          <input onChange={handleChange} value={inputText.username} id="username" className='input' name="username" type="email" placeholder=" " />
         
          <div className="cut"></div>
          <label htmlFor="email" className="placeholder">Email</label>
        </div>
        <div className="input-container ic2">
          <input onChange={handleChange} value={inputText.password} id='password' className='input' name="password" type="password" placeholder=" " />
          {errors.password && <p style={{color: 'red', fontSize: '13px'}}>{errors.password}</p>}
          <div className="cut"></div>
          <label htmlFor="password" className="placeholder">password</label>
        </div>
        
        <button onClick={()=> navigate('/dashboard')} type="text" className="submit-login">Iniciar</button>
        <button className='My-But' onClick={() => navigate('../register')}>No tienes una cuenta? Registrate aqui!</button>
    
      </div>
      </div>
  )
}

export default Login