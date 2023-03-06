import { useForm } from "react-hook-form";
import '../CSS/adduser.css';
import Navbar from '../components/Navbar.jsx'
import { useNavigate} from "react-router-dom";



const AddUser = () => {

    const { register, formState: { errors }, watch, handleSubmit } = useForm({
        defaultValues: {
            nombre: '',
            direccion: ''
        }
    });
    const navigate = useNavigate();
    const onSubmit = (data) => {
        console.log(data);
    }
    

    const incluirTelefono = watch('incluirTelefono');

    return  <div><Navbar/></div>,<div className='adddiv'>
        
        <div className="container">
        <header>Registration</header>

        <form action="#">
            <div className="form first">
                <div className="details personal">
                    <span className="title">Informacion personales</span>

                    <div className="fields">
                        <div className="input-field">
                            <label>Nombre completo</label>
                            <input type="text" placeholder="Digite su nombre" required></input>
                        </div>

                        <div className="input-field">
                            <label>Edad</label>
                            <input type="text" placeholder="Digite su edad" required></input>
                        </div>

                        <div className="input-field">
                            <label>Email</label>
                            <input type="text" placeholder="Digite su Email" required></input>
                        </div>

                        <div className="input-field">
                            <label>Telefono</label>
                            <input type="number" placeholder="Digite su telefono" required></input>
                        </div>
                        <div className="input-field">
                            <label>Direccion</label>
                            <input type="text" placeholder="Digite su direccion" required></input>
                        </div>

                        <div className="input-field">
                            <label>Direccion</label>
                            <input type="text" placeholder="Digite su direccion" required></input>
                        </div>
                    </div>
                </div>

                <div className="details ID">
                    <span className="title">Informacion de identidad</span>

                    <div className="fields">
                        <div className="input-field">
                            <label>Cedula/Pasaporte</label>
                            <input type="text" placeholder="Digite su cedula o pasaporte" required></input>
                        </div>

                        <div className="input-field">
                            <label>Estado civil</label>
                            <select required>
                                <option disabled selected>Seleccionar estado civil</option>
                                <option>Casado/a</option>
                                <option>Divorciado/a</option>
                                <option>Union Libre</option>
                                <option>Soltero/a</option>
                                <option>Viudo/a</option>
                            </select>
                        </div>

                        <div className="input-field">
                            <label>Genero</label>
                            <select required>
                                <option disabled selected>Seleccionar Genero</option>
                                <option>Masculino</option>
                                <option>Femenino</option>
                                <option>Otro</option>
                            </select>
                        </div>
                        <div className="input-field">
                            <label>Fecha de vencimiento</label>
                            <input type="date" placeholder="Digite la fecha de vencimiento" required></input>
                        </div>

                        <div className="input-field">
                            <label>Fecha de Nacimiento</label>
                            <input type="date" placeholder="Seleccione su fecha de nacimiento" required></input>
                        </div>

                        <div className="input-field">
                            <label>No.Hijos/as</label>
                            <input type="text" placeholder="Digite numero de hijos/a" required></input>
                        </div>
                    </div>

                    <button className="nextBtn" onClick={()=> navigate('/user')}>
                        <span className="btnText">Guardar</span>
                        <i className="uil uil-navigator"></i>
                    </button>
                </div> 
            </div>

        </form>
    </div>
    </div>
  
}

export default AddUser;