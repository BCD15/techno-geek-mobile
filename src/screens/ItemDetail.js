import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Button,
} from 'react-native';

import voltarIcon from '../../assets/voltarIcon2.png';
import imageBlackEdition from '../../assets/imageBlackEdition.png';

export default function ItemDetail ({ navigation }) {

  return (
    <View style={{backgroundColor:'#fff', height: '100%',}}>
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
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type 
              specimen book.
            </Text>
          </View>
          <View style={styles.footer}>
            <Text style={{ color: '#817C7C', fontSize: 13, fontWeight: '500',}}>
              53 avaliações ⭐ ⭐ ⭐ ⭐ ⭐
            </Text>
            <Text style={{ color: '#FF5F0F', fontSize: 18, fontWeight: '500',}}>
              R$89,90
            </Text>
            <TouchableOpacity style={styles.btnComprar}>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 17,}}>Comprar</Text>
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
      height: '10%',
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
      maxWidth: '100%',
    },

    imageBlackEdition: {
      width: '100%',
      maxHeight: '55%',
    },

    main: {
      height: '93%',
    },

    titleMain: {
      color: '#6304AE',
      fontWeight: 'bold',
      fontSize: 23,
      marginLeft: 7,
      marginRight: 7,
      marginTop: 7,
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