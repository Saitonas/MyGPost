import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonCustomComponent from './components/buttonCustom';
import InputTextCustomComponent from './components/inputTextCustom';

class NewPasswordInfoScreen extends React.Component {
  render() {
 
    return (
        <View style={styles.container}>
        <StatusBar style="auto"/>

        <View style={styles.box3}>
          <Text>Choisissez un mot de passe</Text>
        </View>
        <View style={styles.box2}>
          <InputTextCustomComponent titleInput="Mot de passe" secureText={true}></InputTextCustomComponent>
          <InputTextCustomComponent titleInput="Confirmer" secureText={true}></InputTextCustomComponent>
        </View>

        <View style={styles.box1}>
        <ButtonCustomComponent title = "Terminer"></ButtonCustomComponent>
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
export default NewPasswordInfoScreen;
// ...