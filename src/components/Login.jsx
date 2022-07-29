import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import swAlert from 'sweetalert2';

function Login() {

  const uNavigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    console.log(regexEmail.test(email));

    if (email === '' || password === '') {
      swAlert.fire({
        title: 'Error!',
        text: 'Debes rellenar los campos de login',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      return;
    }
    if (email !== '' && !regexEmail.test(email)) {
      swAlert.fire({
        title: 'Error!',
        text: 'Debes escribir una direccion de correo electronico valida',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      return;
    }
    if (email !== 'challenge@alkemy.org' || password !== 'react') {
      swAlert.fire({
        title: 'Error!',
        text: 'Los datos ingresados son erroneos',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      return;
    }

    axios
      .post('http://challenge-react.alkemy.org', { email, password }) // Los dos parametros que recibe axio son, la url que tiene el endpoint, y los datos que se enviaran.
      .then(res => {
        swAlert.fire({
          title: 'Bienvenido',
          text: 'Has ingresado de manera correcta',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        const tokenRecibido = res.data.token;
        localStorage.setItem('token', tokenRecibido); // Localstorage recibe 2 argumentos, el nombre bajo el cual se guarda, y los datos que se recibe
        uNavigate('/listado')
      })
    }
    
    return (
      <>
      <h2>Formulario de login</h2>
      <form onSubmit={submitHandler}>
        <label>
          <span>Correo electronico</span>
          <br />
          <input type="text" name="email" />
          <br />
          <br />
        </label>
        <label>
          <span>Contraseña</span>
          <br />
          <input type="password" name="password" />
          <br />
          <br />
        </label>
        <button type="submit">Ingresar</button>
      </form>
    </>
  );
}

export default Login;