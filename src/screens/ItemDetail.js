import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import api from "../plugins/api";

import voltarIcon from "../../assets/voltarIcon.png";

export default function Cadastro ({ navigation }) {

  const [itens, setItens] = React.useState([]);

  async function getCamisetas() {
    const {data} = await api.get('/camisetas/')
    setItens((original) => [...original, ...data])
  }

  async function getMoletons() {
    const {data} = await api.get('/moletons/')
    setItens((original) => [...original, ...data])
  }

  async function fetchData() {
    await getCamisetas()
    await getMoletons()
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <View style={{backgroundColor:"#E3E3E3",}}>
        <View style={styles.header}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
              <Image source={voltarIcon} style={styles.imageVoltar}></Image>
            </TouchableWithoutFeedback>
            < Text style={styles.title}>{item.titulo}</Text>
        </View>
    </View>
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
      width: 40,
      height: 40,
    },

    title: {
      color: "#FF5F0F",
      fontWeight: "bold",
      fontSize: 20,
      marginLeft: 60,
    },
});