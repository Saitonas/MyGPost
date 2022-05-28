
import React from "react";
import {StyleSheet, TouchableOpacity, Text } from "react-native"

export default function ButtonCustomComponent({title, onPress}) {

    return (
    <TouchableOpacity onPress={onPress} style={stylesButton.creationBtn}>
      <Text style={stylesButton.appButtonText}>{title}</Text>
    </TouchableOpacity>
    );
}

    const stylesButton = StyleSheet.create({
        creationBtn: {
            width: "70%",
            borderRadius: 25,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
            backgroundColor: "#72bb53",
        }
    });