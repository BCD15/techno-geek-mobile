import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import voltarIcon from "../../assets/voltarIcon2.png";
import imageBlackEdition from "../../assets/imageBlackEdition.png";

export default function ItemDetail ({ navigation }) {

  return (
    <View style={{backgroundColor:"#fff", height: '100%',}}>
        <View style={styles.header}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
              <Image source={voltarIcon} style={styles.imageVoltar}></Image>
            </TouchableWithoutFeedback>
            <Text style={styles.titleHeader}>Camiseta de one piece black edition</Text>
        </View>
        <ScrollView style={styles.main}>
          <Image source={imageBlackEdition} style={styles.imageBlackEdition}></Image>
          <Text style={styles.titleMain}>
            Camiseta de one piece black edition
          </Text>
          <Text style={{ color: "#9F9F9F", fontSize: 14 }}>
            Limpeza comum: a remoção de pó, resíduos de substâncias orgânicas e
            inorgânicas e a organização do local, fazem parte da limpeza comum.
            Geralmente, as tarefas incluem limpezas básicas ou de manutenção,
            com foco naquilo que é visto rapidamente. Mesmo assim, os
            procedimentos envolvem a remoção seca ou molhada da...
            <Text style={{ color: "#3B8AEB", fontSize: 14 }}>Ver Mais ▼</Text>
          </Text>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    
    header: {
      backgroundColor: "#6304AE",
      flexDirection: "row",
      alignItems: "center",
      padding: 20,
      height: "10%",
    },

    imageVoltar: {
      width: 33,
      height: 33,
    },

    titleHeader: {
      color: "#FFFFFF",
      fontWeight: '500',
      fontSize: 22,
      marginLeft: 15,
      maxWidth: '100%',
    },

    imageBlackEdition: {
      width: '100%',
      maxHeight: '35%',
    },

    main: {
      height: '90%',
    },

    titleMain: {
      color: "#6304AE",
      fontWeight: 'bold',
      fontSize: 22,
      margin: 7,
    },
});