import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Layout from '../core/Layout';
import axios from 'axios';
import {isAuth, authenticate} from './helpers'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Google from './Google'
import Facebook from './Facebook'


const Signup = ({history}) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        buttonText: 'Enviar'
    });

    const { name, email, password, buttonText } = values;

    const handleChange = name => event => {
        // console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value });
    };


    const informParent = response => {
       
        authenticate(response, () => {
            isAuth() && isAuth().role === 'admin' ? history.push('/admin/dashboard') : history.push('/user/dashboard')
          });
    }


    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Enviando' });
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/signup`,
            data: { name, email, password }
        })
            .then(response => {
                console.log('SIGNUP SUCCESS', response);
                setValues({ ...values, name: '', email: '', password: '', buttonText: 'Submitted' });
                toast.success(response.data.message);
            })
            .catch(error => {
                console.log('SIGNUP ERROR', error.response.data);
                setValues({ ...values, buttonText: 'Submit' });
                toast.error(error.response.data.error);
            });
    };

    const signupForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Nombre</label>
                <input onChange={handleChange('name')} value={name} type="text" className="form-control" />
            </div>

            <div className="form-group">
                <label className="text-muted">E-mail</label>
                <input onChange={handleChange('email')} value={email} type="email" className="form-control" />
            </div>

            <div className="form-group">
                <label className="text-muted">Contraseña</label>
                <input onChange={handleChange('password')} value={password} type="password" className="form-control" />
            </div>

            <div>
                <button className="btn btn-primary" onClick={clickSubmit}>
                    {buttonText}
                </button>
            </div>
        </form>
    );

    return (
        <Layout>
            <div className="col-md-6 offset-md-3">
                <ToastContainer />
                {isAuth() ? <Redirect to='/'/> : null}
                <h1 className="p-5 text-center">Registro</h1>
                <Google informParent={informParent}/>
                <Facebook informParent={informParent}/>
                {signupForm()}
                <hr/>
                <div>
                     <Link className='text-muted' to='/signin' >Ya tienes cuenta?</Link><br/>
                     <Link className='text-muted' to='/aviso-privacidad' >Al registrarte aceptas el aviso de PRIVACIDAD</Link>
                </div>
            </div>
        </Layout>
    );
};

export default Signup;
