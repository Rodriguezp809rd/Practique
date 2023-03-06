import React,{useEffect,useState} from 'react'
import { useLocation} from 'react-router-dom'


function MaybeShowNavbar({children}) {
    const location = useLocation();
    const [showNavbar, setShowNavbar] = useState(false);
    useEffect(() =>{
        if (location.pathname ==='/Login'){
            setShowNavbar(false);
        }else if (location.pathname ==='/'){
            setShowNavbar(false);
        }else{
            setShowNavbar(true);
        }
    },[location]);
     
  return (
    <div>{showNavbar && children}</div>
  )
}

export default MaybeShowNavbar