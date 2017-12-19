import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import { LoginForm } from './components/LoginForm';
import AlbumList from './components/AlbumList';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { loggedIn: null };
    }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAlzxC2nu9TbItYcnm6hipGfxJTLTkJPN4',
            authDomain: 'mobile-dev-88dbf.firebaseapp.com',
            databaseURL: 'https://mobile-dev-88dbf.firebaseio.com',
            projectId: 'mobile-dev-88dbf',
            storageBucket: 'mobile-dev-88dbf.appspot.com',
            messagingSenderId: '894066161365'
          });

          firebase.auth().onAuthStateChanged((user) => {
              if (user) {
                  this.setState({ loggedIn: true });
              } else {
                  this.setState({ loggedIn: false });
              }
          });
    }

    signOutUser() {
        firebase.auth().signOut();
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                        <View style={{flex: 1}}>
                            <AlbumList>
                                <Button
                                style={{marginTop: 10, marginBottom: 10}}
                                onPress={this.signOutUser.bind(this)}>
                                    Log out
                                </Button>
                            </AlbumList>
                        </View>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <CardSection>
                        <Spinner />
                    </CardSection>
                );
        }
    }

    render() {
        return (
            <View style={{flex : 1}}>
                <Header headerText={'Authentication'} />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
