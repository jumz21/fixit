import {createStackNavigator} from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AppNav from '../navigation/AppNavigator';

export default createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen,
    Main: AppNav 
});