import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class Logo extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../assets/images/Logo.png')} 
                    style={styles.logo}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
        width: 40,
        height: 70
    }
});