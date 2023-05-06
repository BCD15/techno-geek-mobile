import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Text, ScrollView, TextInput, Image, } from "react-native";
import { Button, Card } from 'react-native-paper';

import Icon from '../assets/perfilIcon.png';

import Item from "./Item";

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
        <View style={styles.header}>
        <Text style={{ color: "#FF5F0F", fontWeight: "bold", fontSize: 20, }}>TechnoGeek</Text>
        <TextInput style={styles.input} />
        </View>
        <Button mode="contained" onPress={() => navigation.navigate('Login')} style={styles.botao}>
            <Image source={Icon} style={styles.imageLogin}></Image>
          </Button>
        <View style={styles.container}>
        <Text style={{borderRadius:10, fontWeight: "bold", color: "white", backgroundColor: "#FF5F0F", width: "40%", height: "3%", alignItems: "center", justifyContent: "center", textAlign:"center",}}>Mais vendidos da semana</Text>
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
    height:150,
  },

  input: {
    borderRadius: 10,
    margin: 10,
    width: 200,
    height: 25,
  },

  imageLogin:{
    height: 40,
    width: 40,
  },
});