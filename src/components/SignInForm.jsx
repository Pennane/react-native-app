import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native'
import FormikTextInput from './FormikTextInput'
import Text from './Text';
import Theme from '../theme'
import theme from '../theme';

const styles = {
    container: {
        padding: 3
    },
    submitButtom: {
        padding: 10,
        backgroundColor: Theme.colors.primary,
        color: theme.colors.textInverted,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    }
}

const SignIn = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <Text>Username</Text>
            <FormikTextInput name="username" placeholder="username" />
            <Text>Password</Text>
            <FormikTextInput name="password" placeholder="password" secureTextEntry />
            <TouchableWithoutFeedback onPress={onSubmit} >
                <Text style={styles.submitButtom}>Sign in</Text>
            </TouchableWithoutFeedback>
        </View>
    )
};

export default SignIn;