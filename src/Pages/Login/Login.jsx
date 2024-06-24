import './Login.css'
import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import FacebookIcon from '@mui/icons-material/Facebook';
import  Alert  from '@mui/material/Alert';
import LoginUser from '../../Service/LoginUser';
import useField from '../../Hooks/useFiedl';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const [errorLoged, setErrorLoged] = React.useState(false);
  const password = useField({ type: "password" });
  const email = useField({ type: "email" });
  const navigate =  useNavigate();
  
  const handlerLogin = async () => {
    try {

      const credencials = {
        password: password.value,
        email: email.value
      }

      const userData = await LoginUser(credencials);

      if (userData) { 
        setErrorLoged(false);
        localStorage.setItem('token', userData.data.token);
        // localStorage.setItem('userId', userData.user._id);
         navigate('/home');

      } else {
        setErrorLoged(true);
      }

  
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className='container-form'>
      <img src="https://i.imgur.com/FoAHiGL.png" alt="" className='img-form' />
      <form className='login-form'

        onSubmit={(event) => {
          event.preventDefault();
          handlerLogin()
        }}
      >
        <Stack spacing={2}>
          <span className='title-form'>Login Home</span>


          <FormControl>
            <FormLabel >Email</FormLabel>
            <Input
              required
              onBlur={email.onblur}
              onChange={email.onblur} />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type='password'
              required
              onBlur={password.onblur}
              onChange={password.onblur} />
          </FormControl>
          <Button sx={{width: "250px"}} type="submit">Iniciar Sesión</Button>
          <span className='fb'><FacebookIcon /> Iniciar sesión con Facebook</span>
          <span className='aditional'>¿Olvidaste tu contraseña?</span>
        </Stack>
        {errorLoged && <Alert sx={{
          border: "none",
          color: "red",
          textAlign: "center",
          marginLeft: "20px",
          width: "100%"
        }} variant="outlined" severity="error" > Credenciales incorrectas. </Alert>}
      </form>

    </div>
  );
}
