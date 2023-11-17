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
          <Text style={styles.textMain}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book.
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
      marginLeft: 7,
      marginRight: 7,
      marginTop: 7,
    },

    textMain: {
      color: "#9F9F9F",
      fontSize: 15,
      marginLeft: 7,
      marginRight: 7,
      marginTop: 4,
    }
});