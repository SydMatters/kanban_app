import React from 'react';

"use client";

import { useForm } from 'react-hook-form';

const Login = () => {

    const {register, handleSubmit} = useForm();

    return (
        <div>
            <h1>Login Page</h1>
        </div>
    );
};

export default Login;
