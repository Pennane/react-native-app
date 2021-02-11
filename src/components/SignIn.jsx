import React from 'react';
import { View } from 'react-native'
import { Formik } from 'formik'
import SignInForm from './SignInForm'
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required('username is required'),
    password: yup
        .string()
        .required('Password is required'),
});

const initialValues = {
    username: '',
    password: '',
};

const SignIn = () => {
    const onSubmit = ({ username, password }) => {

        console.log(username, password)
    }
    return (
        <View>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit}></SignInForm>}
            </Formik>
        </View>
    )
};

export default SignIn;