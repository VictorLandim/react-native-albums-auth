import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, Button, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });

        console.log(`Email: ${email}, Password: ${password}`);

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch((a) => {
                console.log(a);
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch((err) => this.onLoginFail.bind(this)(err));
            });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    onLoginFail(err) {
        console.log(err);
        this.setState({
            error: err.message,
            loading: false
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder={'user@email.com'}
                        label={'Email'}
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder={'mypass'}
                        label={'Password'}
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        textAlign: 'center',
        color: 'red'
    }
};

export { LoginForm };
