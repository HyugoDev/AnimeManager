import styled from "styled-components";
import TextField from "../components/TextFild.jsx";
import { Formik, Form } from 'formik';

import { useNavigate } from "react-router-dom";

import imagen from "../assets/loginRegistro.png";

import axios from 'axios'



const Registro = () => {
  const router = useNavigate();

  
  const postUser = async (values) => {
    const { data } = await axios.post('/api/user', values)
    console.log(data)
    router("/login")
  }


  return (
    <Container src={imagen} >
      {/* <Containerimg>  
        <Img src={imagen} alt="logo" />
      </Containerimg> */}
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: ''
        }}
        onSubmit={values => {postUser(values)}}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Se requiere un nombre de usuario';
          }
          if (!values.email) {
            errors.email = 'Se requiere un email';
          } else if (

            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Correo no valido';
          }
          if (!values.password) {
            errors.password = 'Se requiere contraseña';
          }
          return errors;
        }}
      >

        <DivForm >
                <img src="/logo.webp" alt="logo" />
                <TextField label="Usurario" name="name" type="text" placeholder="Name"  validate/>
                <TextField label="Correo" name="email" type="email" placeholder="Email" />
                <TextField label="Contaseña" name="password" type="password" placeholder="Password"/>
                <button type="submit">Registratse</button>
          
        </DivForm>
      </Formik>
    </Container> 
  );
};

export default Registro;


const DivForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color:hsl(237, 100%, 4%, 0.5);
  border-radius: 10px;

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);



  width: 30rem;
  height: 25rem;



  /* width: 30rem;
  height: 20rem;
  transform: scale(1.4); */
  
  /* border: 1px steelblue solid;
  border-radius: 5px; */



  h2 {
    text-align: center;
    margin-bottom: 10px;
    position: relative;
    top: -10px;
  }

  img {
    position: relative;
    top: -10px;
    width: 120px;
    height: 120px;
    object-position: center;
    object-fit: cover;
  }


  button {
    margin-top: 15px;
    padding: 10px;
    border: none;
    border-radius: 5px;
  
    font-size: 1.2rem;
    cursor: pointer;

    position: relative;
    top: 10px;
  }


`;


const Container = styled.div`
  display: flex;
  background-image: ${props => `url(${props.src})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  width: 100%;
  height: 100vh;


  justify-content: center;
  align-items: center;
`;