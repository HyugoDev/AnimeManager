import styled from "styled-components";
import TextField from "../components/TextFild";
import { Formik, Form } from 'formik';

import { useNavigate } from "react-router-dom";

import axios from 'axios'

const Login = () => {
  const router = useNavigate();

  const postUser = async (values) => {
    const { data } = await axios.post('/api/user', values)
    console.log(data)
    router("/login")
  }



  return (
    <Container>
      <Containerimg>  
        <Img src="/loginRegistro.png" alt="logo" />
      </Containerimg>
      <Formik
        initialValues={{
          name: '',
          password: ''
        }}
        onSubmit={async (values, { setSubmitting }) => {
          const response = await postLogin(values);
          if (response.status === 200) {
            window.localStorage.setItem("TokenUser", JSON.stringify(response.data));
            router("/");
            
          }
          setSubmitting(false);
        }}


        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Se requiere un nombre de usuario';
          }
          if (!values.password) {
            errors.password = 'Se requiere contraseña';
          }
          return errors;
        }}
      >

        <DivForm >
          <h1>Login</h1>
                <TextField label="Usurario" name="name" type="text" placeholder="Name"  validate/>
                <TextField label="Contaseña" name="password" type="password" placeholder="Password"/>
                <button type="submit">Login</button>
        </DivForm>
      </Formik>
    </Container> 
  );
};

export default Login;


const DivForm = styled(Form)`
  position: absolute;
  top: 35%;
  left: 15%;
  
  width: 30rem;
  height: 20rem;
  transform: scale(1.4);
  
  /* border: 1px steelblue solid;
  border-radius: 5px; */

  text-align: center;

  h1 {
    text-align: center;
  }

  Form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

  }


  button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: steelblue;
    font-size: 1.2rem;
    cursor: pointer;
  }


`;






const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;


`;

const Containerimg = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
`;