import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import voltarIcon from "../../assets/voltarIcon2.png";
import imageBlackEdition from "../../assets/imageBlackEdition.png";

export default function ItemDetail ({ navigation }) {

  return (
    <View style={{backgroundColor:"#E3E3E3",}}>
        <View style={styles.header}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
              <Image source={voltarIcon} style={styles.imageVoltar}></Image>
            </TouchableWithoutFeedback>
            <Text style={styles.titleHeader}>Camiseta de one piece black edition</Text>
        </View>
        <View style={styles.imageMain}>
          <Image source={imageBlackEdition} style={styles.imageBlackEdition}></Image>
        </View>
        <View style={styles.main}>
          <Text style={styles.titleMain}>
            Camiseta de one piece black edition
          </Text>
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
      height: "14%",
    },

    imageVoltar: {
      width: 36,
      height: 36,
    },

    titleHeader: {
      color: "#FFFFFF",
      fontWeight: '500',
      fontSize: 20,
      marginLeft: 30,
      maxWidth: '100%',
    },

    // imageMain: {

    // },

    imageBlackEdition: {
      width: '100%',
      height: 350,
    },
});