import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/login';
import AccountCreationScreen from './screens/accountCreation';
import NameInfoScreen from './screens/nameInfo';
import DateBirthScreen from './screens/birthDate';
import GenderInfoScreen from './screens/genderInfo';
import MailAndPhoneScreen from './screens/mailAndPhone';
import PostAddressScreen from './screens/postAddress';
import PasswordInfoScreen from './screens/passwordInfo';
import GlobalConditionScreen from './screens/globalCondition';
import FoundAccountScreen from './screens/foundAccount';
import ConfirmedAccountScreen from './screens/confirmedAccount';
import NewPasswordInfoScreen from './screens/newPasswordInfo';

const Stack = createNativeStackNavigator();

class App extends React.Component {
  render() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="accountCreation" component={AccountCreationScreen} options={{title: "Créer un compte"}}/>
        <Stack.Screen name="nameInfo" component={NameInfoScreen} options={{title: "Nom"}}/>
        <Stack.Screen name="birthDate" component={DateBirthScreen} options={{title: "Date de naissance"}}/>
        <Stack.Screen name="genderInfo" component={GenderInfoScreen} options={{title: "Genre"}}/>
        <Stack.Screen name="mailAndPhone" component={MailAndPhoneScreen} options={{title: "Adresse email et votre téléphone"}}/>
        <Stack.Screen name="postAddress" component={PostAddressScreen} options={{title: "Adresse postale"}}/>
        <Stack.Screen name="passwordInfo" component={PasswordInfoScreen} options={{title: "Mot de passe"}}/>
        <Stack.Screen name="globalCondition" component={GlobalConditionScreen} options={{title: "Conditions générales et confidentialité"}}/>
        <Stack.Screen name="foundAccount" component={FoundAccountScreen} options={{title: "Retrouvez votre compte"}}/>
        <Stack.Screen name="confirmedAccount" component={ConfirmedAccountScreen} options={{title: "Confirmez votre compte"}}/>
        <Stack.Screen name="newPasswordInfo" component={NewPasswordInfoScreen} options={{title: "Nouveau mot de passe"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
}

export default App;
