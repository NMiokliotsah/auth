import React from 'react';
import LoginForm from './LoginForm';
import { api } from '../../api/api';
import history from '../../history/history';

const Login = () => {
    const onSubmit = (formData, actions) => {
        const { email, password } = formData;
        api.login(email, password)
            .then(res => {
                if (res.status === 200) {
                    history.push('/');
                } else {
                    actions.setFieldError("serverError", "This user does not exist");
                }
            });
    }
    const initialValues = {
        email: '',
        password: ''
    }
    return <LoginForm
        onSubmit={onSubmit}
        initialValues={initialValues} />
}

export default Login;