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
      height: 350,
      backgroundColor: 'red',
    },

    main: {
    },

    titleMain: {
      color: "#6304AE",
      fontWeight: 'bold',
      fontSize: 20,
      margin: 7,
    },
});