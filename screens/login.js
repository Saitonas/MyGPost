import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity} from 'react-native';
import ButtonCustomComponent from './components/buttonCustom';
import InputTextCustomComponent from './components/inputTextCustom';

class LoginScreen extends React.Component {
  render() {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
 
    return (
        <View style={styles.container}>
        <StatusBar style="auto"/>
        <View style={styles.box3}>
          <Image style={styles.image} source={require("../assets/Logo_couleur.png")} />
        </View>

        <View style={styles.box2}>
        <View style={styles.inputView}>
        <InputTextCustomComponent titleInput="Email."></InputTextCustomComponent>
        </View>
        <View style={styles.inputView}>
        <InputTextCustomComponent titleInput="Password." secureText={true}></InputTextCustomComponent>
        </View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('foundAccount')}>
            <Text style={styles.forgot_button}>mot de passe oublié?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.box1}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, marginLeft: 50, height: 1, backgroundColor: 'green'}} />
        <View>
          <Text style={{width: 50, textAlign: 'center'}}>ou</Text>
        </View>
        <View style={{flex: 1, marginRight: 50, height: 1, backgroundColor: 'green'}} />
        </View>
        <ButtonCustomComponent title='Créer un compte MyGPost'
            onPress={() => this.props.navigation.navigate('accountCreation')}>
            </ButtonCustomComponent>
        {/* <TouchableOpacity style={styles.creationBtn}>
            <Text style={styles.loginText}>Créer un compte MyGPost</Text>
        </TouchableOpacity> */}
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
   
    image: {
      //marginTop: "50%",
      width: 174,
      height: 59
    },
   
    inputView: {
      backgroundColor: "#D4EFDF",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
   
      alignItems: "center",
    },
   
    TextInput: {
      height: 50,
      padding: 10,
      marginLeft: 20,
    },
   
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
   
    loginBtn: {
      width: "70%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#72bb53",
    },

    creationBtn: {
      width: "70%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      backgroundColor: "#72bb53",
    },
  });
export default LoginScreen;
// ...