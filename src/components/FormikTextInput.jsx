import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import Theme from '../theme'
import TextInput from './TextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
    errorText: {
        marginTop: 5,
    },
    input: {
        padding: 8,
        borderColor: theme.colors.textSecondary,
        borderWidth: 1,
        borderRadius: 3,
        marginBottom: 4
    }
});

const FormikTextInput = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);
    const showError = meta.touched && meta.error;

    return (
        <>
            <TextInput
                style={styles.input}
                onChangeText={value => helpers.setValue(value)}
                onBlur={() => helpers.setTouched(true)}
                value={field.value}
                error={showError}
                {...props}
            />
            {showError && <Text style={styles.errorText}>{meta.error}</Text>}
        </>
    );
};

export default FormikTextInput;