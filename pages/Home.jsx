import React from 'react'
import { useNavigate} from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div><p>Bienvenido al inicio de lo que llamamos una larga relacion laboral</p>
    <button onClick={() => navigate('./Login')}> Entrar!</button>
    
    </div>
    
  )
}

export default Home