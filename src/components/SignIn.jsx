import React from 'react';
import { View } from 'react-native'
import { Formik } from 'formik'
import SignInForm from './SignInForm'

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
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit}></SignInForm>}
            </Formik>
        </View>
    )
};

export default SignIn;