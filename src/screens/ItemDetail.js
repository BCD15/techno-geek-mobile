import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TouchableWithoutFeedback,
  Pressable,
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

        <ScrollView>

          <View style={styles.main}>
            <Image source={imageBlackEdition} style={styles.imageBlackEdition}></Image>
            <Text style={styles.titleMain}>
              Camiseta de one piece black edition
            </Text>
            <Text style={styles.textMain}>
              A camiseta One Piece Dupla Face é um produto original, licenciado e exclusivo Piticas. Estampa inspirada na personagem
              de mangá One Piece, as aventuras de as aventuras de Luffy e a sua tripulação, os Piratas do Chapéu de Palha, exploram a 
              Grand Line em busca do tesouro mais procurado do mundo. Na Piticas, prezamos por qualidade, diversidade e conforto. 
              A T-Shirt clássica, foi confeccionada em 100% algodão, conta com estilo autêntico, feita pelos nossos nerdsigners 
              para vestir seu lado fã! Vista com orgulho, vista seu lado fã.
            </Text>
          </View>

        </ScrollView>

          <View style={styles.footer}>
            <Text style={{ color: '#9F9F9F', fontSize: 13, }}>
              52 avaliações ⭐ ⭐ ⭐ ⭐ ⭐ 
            </Text>
            <Text style={styles.preco}>
              R$18,90
            </Text>
            <Pressable>
              <Text>
                oi
              </Text>
            </Pressable>
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
      maxHeight: '40%',
    },

    main: {
      height: '90%',
    },

    titleMain: {
      color: "#6304AE",
      fontWeight: 'bold',
      fontSize: 23,
      marginLeft: 7,
      marginRight: 7,
      marginTop: 7,
    },

    textMain: {
      color: "#9F9F9F",
      fontSize: 16,
      marginLeft: 7,
      marginRight: 7,
      marginTop: 4,
    },

    footer: {
      flexDirection: 'row',
      height: "10%",
      marginLeft: 15,
      marginRight: 15,
      marginTop: 10,
      justifyContent: 'space-between', 
    },

    preco: {
      fontWeight: 'bold',
    }
});