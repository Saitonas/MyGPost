import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonCustomComponent from './components/buttonCustom';
import InputTextCustomComponent from './components/inputTextCustom';

class NameInfoScreen extends React.Component {
  render() {
 
    return (
        <View style={styles.container}>
        <StatusBar style="auto"/>

        <View style={styles.box3}>
          <Text>Comment vous appelez-vous?</Text>
        </View>
        <View style={styles.box2}>
          <InputTextCustomComponent titleInput="Nom."></InputTextCustomComponent>
          <InputTextCustomComponent titleInput="Prénom."></InputTextCustomComponent>
        </View>

        <View style={styles.box1}>
        <ButtonCustomComponent title = "Suivant" onPress={() => this.props.navigation.navigate('birthDate')}></ButtonCustomComponent>
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
export default NameInfoScreen;
// ...