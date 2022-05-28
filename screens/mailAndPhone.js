import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonCustomComponent from './components/buttonCustom';
import InputTextCustomComponent from './components/inputTextCustom';

class MailAndPhoneScreen extends React.Component {
  render() {
 
    return (
        <View style={styles.container}>
        <StatusBar style="auto"/>

        <View style={styles.box3}>
          <Text>Entrez votre adresse email et votre numéro de téléphone</Text>
        </View>
        <View style={styles.box2}>
          <InputTextCustomComponent titleInput="email"></InputTextCustomComponent>
          <InputTextCustomComponent titleInput="téléphone"></InputTextCustomComponent>
        </View>

        <View style={styles.box1}>
        <ButtonCustomComponent title = "Suivant" onPress={() => this.props.navigation.navigate('postAddress')}></ButtonCustomComponent>
        </View>
        </View>

    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: "#fff",
    },

    box3: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      //backgroundColor: "#333",
    },

    box2: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      //backgroundColor: "#5d5",
    },

    box1: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      //backgroundColor: "#1d5",
    },
  });
export default MailAndPhoneScreen;
// ...