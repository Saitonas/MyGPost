import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonCustomComponent from './components/buttonCustom';
import InputTextCustomComponent from './components/inputTextCustom';

class PostAddressScreen extends React.Component {
  render() {
 
    return (
        <View style={styles.container}>
        <StatusBar style="auto"/>

        <View style={styles.box3}>
          <Text>Entrez votre adresse postale</Text>
        </View>
        <View style={styles.box2}>
          <InputTextCustomComponent titleInput="Code Postal"></InputTextCustomComponent>
          <InputTextCustomComponent titleInput="Ville"></InputTextCustomComponent>
          <InputTextCustomComponent titleInput="Voie"></InputTextCustomComponent>
          <InputTextCustomComponent titleInput="Numéro"></InputTextCustomComponent>
          <InputTextCustomComponent titleInput="Complément"></InputTextCustomComponent>
        </View>

        <View style={styles.box1}>
        <ButtonCustomComponent title = "Suivant" onPress={() => this.props.navigation.navigate('passwordInfo')}></ButtonCustomComponent>
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
export default PostAddressScreen;
// ...