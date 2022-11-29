import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Logo from '../../assets/logo.png'
import { ArrowLeft } from 'react-bootstrap-icons';
import styles from './login.module.sass';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email invalido')
    .required('Email requerido'),
  password: Yup.string()
    .min(5, 'Contraseña minimo 5 caracteres')
    .max(20, 'Contraseña maximo 20 caracteres')
    .required('Contraseña requerida'),
})

const Login = () => {
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
        <p className={ styles.iniciarsesion }>Iniciar Sesión</p>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={ LoginSchema }
          onSubmit= { values => {
            console.log(values);
          }}>
          {({ errors }) => (
            <Form className={ styles.form }>
              <label className={ styles.label1 } htmlFor='email'>Email</label>
              <Field name='email' className={ styles.formfield1 } />
              { errors.email  ? ( <div className={ styles.formerrors }>{ errors.email }</div> ) : null }
        
              <label className={ styles.label2 } htmlFor='password'>Contraseña</label>
              <div className={ styles.containerpassword }>
                <Field name='password' className={ styles.formfield2 } />
              </div>
              { errors.password ? ( <div className={ styles.formerrors }>{ errors.password }</div> ) : null }

              <button className={ styles.button } type='submit'>Iniciar Cuenta</button>

              <Link className={styles.crearcuenta} to={'/signup'}>No tienes cuenta? Registrate</Link>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
