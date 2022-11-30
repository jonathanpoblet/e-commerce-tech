import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Logo from '../../assets/logo.png'
import { ArrowLeft, Eye } from 'react-bootstrap-icons';
import styles from './signup.module.sass';

const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, 'Nombre de usuario minimo 5 caracteres')
    .max(20, 'Nombre de usuario maximo 20 caracteres')
    .required('Nombre de usuario requerida'),
  email: Yup.string()
    .email('Email invalido')
    .required('Email requerido'),
  password: Yup.string()
    .min(5, 'Contraseña minimo 5 caracteres')
    .max(20, 'Contraseña maximo 20 caracteres')
    .required('Contraseña requerida'),
  passwordconfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirmación requerida')
})

const SignUp = () => {
  
  const [verContraseña, setVerContraseña] = useState(false)

  function verContraseñaFunction() {
    if(verContraseña){
      setVerContraseña(false);
    } else {
      setVerContraseña (true);
    }
  }

  return (
    <div className={ styles.container }>
    <Link to={'/'}>
      <ArrowLeft className={ styles.backhome } />
    </Link>
      <div className={ styles.containertitle }>
        <img src={Logo} />
        <p className={ styles.title1 }>N</p>
        <p className={ styles.title2 }>VIDIA</p>
      </div>
      <div className={ styles.containerform }>
        <p className={ styles.iniciarsesion }>Registro</p>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={ SignUpSchema }
          onSubmit= { values => {
            console.log(values);
          }}>
          {({ errors }) => (
            <Form className={ styles.form }>
              <label className={ styles.label1 } htmlFor='username'>Nombre de Usuario</label>
              <Field name='username' className={ styles.formfield1 } />
              { errors.username  ? ( <div className={ styles.formerrors }>{ errors.username }</div> ) : null }

              <label className={ styles.label2 } htmlFor='email'>Email</label>
              <Field name='email' className={ styles.formfield1 } />
              { errors.email  ? ( <div className={ styles.formerrors }>{ errors.email }</div> ) : null }
        
              <label className={ styles.label2 } htmlFor='password'>Contraseña</label>
              <div className={ styles.containerpassword }>
                <Field type={verContraseña? 'text' : 'password'} name='password' className={ styles.formfield2 } />
                <Eye onClick={() => verContraseñaFunction()} className={ styles.eye }/>
              </div>
              { errors.password ? ( <div className={ styles.formerrors }>{ errors.password }</div> ) : null }

              <label className={ styles.label2 } htmlFor='passwordconfirmation'>Confirmar Contraseña</label>
              <div className={ styles.containerpassword }>
                <Field type={verContraseña? 'text' : 'password'} name='passwordconfirmation' className={ styles.formfield2 } />
                <Eye onClick={() => verContraseñaFunction()} className={ styles.eye }/>
              </div>
              { errors.passwordconfirmation ? ( <div className={ styles.formerrors }>{ errors.passwordconfirmation }</div> ) : null }

              <button className={ styles.button } type='submit'>Crear Cuenta</button>

              <Link className={styles.crearcuenta} to={'/login'}>Tienes cuenta? Iniciar Sesión</Link>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default SignUp;
