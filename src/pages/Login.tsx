import React from 'react';
import {ErrorMessage, Formik, Form, Field} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import {history} from '../services/history';
import './Login.css';

const Login = () => {
    const handleSubmit = values => {
        axios.post('http://localhost:3333/v1/api/auth', values)
            .then(resp => {
                const {data} = resp;
                if(data){
                    localStorage.setItem('app-token', data);
                    history.push('/');
                }
            })
    };

    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required()
    });

    return(
        <>
            <h1>Login</h1>
            <Formik 
                initialValues={{}} 
                onSubmit={handleSubmit}
                validationSchema={validations}>
                <Form className='form'>
                    <div className='form-group'>
                        <Field 
                            className='login-field'
                            name='email'                            />
                        <ErrorMessage 
                            component="span" 
                            name='email'
                            className='login-error'
                        />
                    </div>
                    <div className='form-group'>
                        <Field 
                            className='login-field'
                            name='password'                            />
                        <ErrorMessage 
                            component="span" 
                            name='password'
                            className='login-error'
                        />
                    </div>
                    <button
                        className='login-btn' 
                        type='submit'>
                        Login
                    </button>
                </Form>
            </Formik>
            
        </>
    )
}

export default Login;