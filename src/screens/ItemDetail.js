import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
  Checkbox,
} from 'react-native';

import voltarIcon from '../../assets/voltarIcon2.png';
import imageBlackEdition from '../../assets/imageBlackEdition.png';

const handleAlert = () => {
  Alert.alert("Compra realizada" , "Obrigado pela preferência");
};

export default function ItemDetail ({ navigation }) {

  return (
    <View style={{backgroundColor:'#fff',}}>
        <View style={styles.header}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
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
              A camiseta One Piece Dupla Face é um produto original, licenciado e exclusivo Piticas.
              Estampa inspirada na personagem de mangá One Piece, as aventuras de as aventuras de 
              Luffy e a sua tripulação, os Piratas do Chapéu de Palha, exploram a Grand Line em 
              busca do tesouro mais procurado do mundo. Na Piticas, prezamos por qualidade, 
              diversidade e conforto. A T-Shirt clássica, foi confeccionada em 100% algodão, 
              conta com estilo autêntico, feita pelos nossos nerdsigners para vestir seu lado fã! 
              Vista com orgulho, vista seu lado fã.
            </Text>

          </View>
          <View style={styles.footer}>
            <Text style={{ color: '#817C7C', fontSize: 13, fontWeight: '500', maxWidth: '25%', textAlign: 'center',}}>
            ⭐ ⭐ ⭐ ⭐ ⭐ 53 avaliações 
            </Text>
            <Text style={{ color: '#FF5F0F', fontSize: 20, fontWeight: '500',}}>
              R$89,90
            </Text>
            <TouchableOpacity onPress={handleAlert} style={styles.btnComprar}>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18,}}>Comprar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    
    header: {
      backgroundColor: '#6304AE',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
      minHeight: '10%',
    },

    imageVoltar: {
      width: 33,
      height: 33,
    },

    titleHeader: {
      color: '#FFFFFF',
      fontWeight: '500',
      fontSize: 22,
      marginLeft: 15,
      width: '90%',
    },

    imageBlackEdition: {
      width: '100%',
      maxHeight: '40%',
    },

    main: {
      minHeight: '93%',
    },

    titleMain: {
      color: '#6304AE',
      fontWeight: 'bold',
      fontSize: 23,
      marginLeft: 7,
      marginRight: 7,
      marginTop: 7,
      width: '90%',
    },

    textMain: {
      color: '#9F9F9F',
      fontSize: 15,
      marginLeft: 7,
      marginRight: 7,
      marginTop: 4,
    },

    footer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
      height: '7%',
    },

    btnComprar: {
      backgroundColor: '#FF5F0F',
      width: '25%',
      height: '45%',
      borderRadius: 15, 
      alignItems: 'center',
      justifyContent: 'center',
    },
});