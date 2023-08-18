import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, TextInput, StyleSheet, View, ScrollView, TouchableWithoutFeedback, Image, StatusBar } from 'react-native';
import { Button, Card } from 'react-native-paper';

import voltarIcon from "../../assets/voltarIcon.png";

export default function Cadastro ({ navigation }) {
  return (
    <LinearGradient
      colors={['#000000', '#342348']}
      style={{
        flex: 1,
      }}>
        <View style={styles.header}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
              <Image source={voltarIcon} style={styles.imageVoltar}></Image>
            </TouchableWithoutFeedback>
            <Text>
                Itens no Carrinho
            </Text>
        </View>
    
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    
    header: {
        backgroundColor: "#6304AE",
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        height: 80,
      },

    imageVoltar: {
        width: 42,
        height: 42,
    },
});