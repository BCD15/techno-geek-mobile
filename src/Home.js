import React, { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Text, ScrollView, TextInput, Image, TouchableWithoutFeedback, } from "react-native";

import Icon from '../assets/perfilIcon.png';
import searchIcon from '../assets/searchIcon.png';

import Item from "./Item";

function InputWithIcon() {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(true);

  function handleIconClick() {
    setIsInputVisible(true);
    setIsImageVisible(false);
  }

  function handleInputSubmit() {
    setIsInputVisible(false);
    setIsImageVisible(true);
  }

  return (
    <View style={{ flexDirection: 'row-reverse', alignItems: 'center', width: 140, margin: 4, }}>
        {isImageVisible && (
          <TouchableWithoutFeedback onPress={handleIconClick}>
            <Image source={searchIcon} style={styles.lupa} />
          </TouchableWithoutFeedback>
        )}
      <View style={{ flexDirection: 'row', alignItems: 'center', width: 140, margin: 5, }}>
        {isInputVisible && (
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <TextInput onSubmitEditing={handleInputSubmit} placeholder="Pesquisar..." style={styles.input} />
          </View>
        )}
      </View>
    </View>
  );
}

export default function Home ({navigation}) {
  const [itens, setItens] = React.useState([
    {
      id: 1,
      imgitem:
        "https://tfcprw.vtexassets.com/arquivos/ids/157344-1200-auto?v=637976645140470000&width=1200&height=auto&aspect=true",
      titulo: "CAMISETA PLUS SIZE DUPLA FACE ONE PIECE LOGOS",
      preco: "R$89,90",
    },
    {
      id: 2,
      imgitem:
        "https://tfcprw.vtexassets.com/arquivos/ids/157344-1200-auto?v=637976645140470000&width=1200&height=auto&aspect=true",
      titulo: "CAMISETA PLUS SIZE DUPLA FACE ONE PIECE LOGOS",
      preco: "R$89,90",
    },
    {
      id: 3,
      imgitem:
        "https://tfcprw.vtexassets.com/arquivos/ids/157344-1200-auto?v=637976645140470000&width=1200&height=auto&aspect=true",
      titulo: "CAMISETA PLUS SIZE DUPLA FACE ONE PIECE LOGOS",
      preco: "R$89,90",
    },
    {
      id: 4,
      imgitem:
        "https://tfcprw.vtexassets.com/arquivos/ids/157344-1200-auto?v=637976645140470000&width=1200&height=auto&aspect=true",
      titulo: "CAMISETA PLUS SIZE DUPLA FACE ONE PIECE LOGOS",
      preco: "R$89,90",
    },
  ]);

  return  (
    <LinearGradient
      colors={['#000000', '#342348']}
      style={{
        flex: 1,
      }}>
      <ScrollView style={styles.scrollView}>
        <View style={{ flex: 1, }}>
          <View style={styles.header}>
            <Text style={styles.title}>TechnoGeek</Text>
            <InputWithIcon />
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
              <Image source={Icon} style={styles.imageLogin}></Image>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>Mais vendidos da semana</Text>
          <View style={styles.main}>
            {itens.map((itens) => (
             <Item item={itens} 
             key={itens.id} />
            ))}
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 10
  },
 
  card: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'transparent',
  },

  content: {
    width: '90%',
    margin: 15,
  },

  botao: {
    backgroundColor: '#6304AE',
  },
 
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,   
  },

  main: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    alignItems: "center",
    justifyContent:"center",
  },

  header: {
    backgroundColor: "#6304AE",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    height: 80,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    height: 25,
    width: '100%',
  },

  imageLogin: {
    width: 35,
    height: 35,
  },

  text: {
    borderRadius: 10, 
    fontWeight: 'bold', 
    color: 'white', 
    backgroundColor: '#FF5F0F', 
    width: '50%', 
    height: '3%', 
    alignItems: 'center', 
    justifyContent: 'center', 
    textAlign: 'center',
  },

  lupa: {
    width: 25,
    height: 25,
  },

  title: { 
    color: "#FF5F0F", 
    fontWeight: "bold", 
    fontSize: 20, 
    width: '40%',
  },

});