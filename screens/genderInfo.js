import React, { useState }  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import ButtonCustomComponent from './components/buttonCustom';
import Checkbox from 'expo-checkbox';

class GenderInfoScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto"/>

        <View style={styles.box2}>
        <View style={styles.section}>
          <Text>homme</Text>
           <Checkbox
           style={styles.checkbox} value={false}
           ></Checkbox>
           </View>
           <View style={styles.section}>
          <Text>femme</Text>
           <Checkbox
           style={styles.checkbox} value={false}
           ></Checkbox>
           </View>
        {/*<View>
        </View>
        <View>
        <Text>femme</Text>
          <Checkbox
          //value={isSelected}
          //</View>onValueChange={setSelection}
          ></Checkbox>
        </View> */}
        </View>

        <View style={styles.box1}>
        <ButtonCustomComponent title = "Suivant" onPress={() => this.props.navigation.navigate('mailAndPhone')}></ButtonCustomComponent>
        </View>
        </View>

);
}
}

const styles = StyleSheet.create({
    section: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    checkbox: {
      margin: 8,
    },

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
export default GenderInfoScreen;
// ...