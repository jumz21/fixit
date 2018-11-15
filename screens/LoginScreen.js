import React from 'react';
import {
    View,
    StyleSheet} from 'react-native';
import Logo from '../logo/Logo';

export default class LoginScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Logo />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});