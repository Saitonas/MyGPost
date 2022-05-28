import React from "react";
import {StyleSheet, TextInput, View} from "react-native"

export default function InputTextCustomComponent({titleInput, secureText}) {

    return (
        <View style={stylesInputText.inputView}>
            <TextInput
            style={stylesInputText.TextInput}
            placeholder={titleInput}
            placeholderTextColor="#003f5c"
            secureTextEntry={secureText}
            />
        </View>
    );
}
const stylesInputText = StyleSheet.create({
    TextInput: {
        height: 50,
        padding: 10,
        marginLeft: 20,
      },
   
      inputView: {
        backgroundColor: "#D4EFDF",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
});