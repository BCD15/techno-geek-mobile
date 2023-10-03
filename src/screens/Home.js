import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

import perfilIcon from "../../assets/perfilIcon.png";
import searchIcon from "../../assets/searchIcon.png";
import carrinhoIcon from "../../assets/carrinhoIcon.png";

import ItemCard from "./ItemCard";

import api from "../plugins/api";

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
    <View
      style={{
        flexDirection: "row-reverse",
        alignItems: "center",
        width: 140,
        margin: 4,
      }}
    >
      {isImageVisible && (
        <TouchableWithoutFeedback onPress={handleIconClick}>
          <Image source={searchIcon} style={styles.imageLupa} />
        </TouchableWithoutFeedback>
      )}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: 140,
          margin: 5,
        }}
      >
        {isInputVisible && (
          <View style={{ flexDirection: "row", flex: 1 }}>
            <TextInput
              onSubmitEditing={handleInputSubmit}
              placeholder="Pesquisar..."
              style={styles.input}
            />
          </View>
        )}
      </View>
    </View>
  );
}

export default function Home({ navigation }) {
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
    <LinearGradient
      colors={["#000000", "#342348"]}
      style={{
        flex: 1,
      }}
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.upheader}>
          <View style={styles.promo}>
            <Text style={styles.tpromo}>
              Frete grátis para compras acima de R$200,00
            </Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.header}>
            <Text style={styles.title}>TechnoGeek</Text>
            <InputWithIcon />
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Carrinho")}>
              <Image source={carrinhoIcon} style={styles.imageCarrinho}></Image>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("Login")}
            >
              <Image source={perfilIcon} style={styles.imageLogin}></Image>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.banner}>
            <Image
              source={{
                uri: "https://media.tenor.com/FQCtm9c6npoAAAAd/anime-live.gif",
              }}
              style={{
                width: 410,
                height: 150,
                borderColor: "#6304AE",
                borderWidth: 3,
              }}
            ></Image>
          </View>

          <Text style={styles.text}>Recomendados</Text>
          <View style={styles.main}>
            {itens.map((item) => (
              <ItemCard item={item} navigation={navigation} key={item.id} />
            ))}
          </View>

          <View style={styles.footer}>
            <Text style={{ color: "white", fontSize: 23, fontWeight: "bold" }}>
              Alguma dúvida?
            </Text>
            <Text style={{ color: "white" }}>Fale conosco.</Text>
            <TextInput
              type="text"
              name="name"
              placeholder="Name:"
              style={styles.forms}
            />
            <TextInput
              type="email"
              name="email"
              placeholder="Email:"
              style={styles.forms}
            />
            <TextInput
              type="text"
              name="comentarios"
              placeholder="Comentário:"
              style={styles.forms}
            />
            <TouchableOpacity style={styles.eform}>
              <Text>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 10,
  },

  content: {
    width: "90%",
    margin: 15,
  },

  botao: {
    backgroundColor: "#6304AE",
  },

  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },

  main: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    alignItems: "center",
    // justifyContent: "center",
    marginBottom: 20,
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
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    height: 25,
    width: "100%",
  },

  imageLogin: {
    width: 35,
    height: 35,
  },

  imageCarrinho: {
    width: 32,
    height: 32,
    marginRight: 7,
    marginLeft: 4,
  },

  text: {
    borderRadius: 10,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#FF5F0F",
    width: 200,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  imageLupa: {
    width: 25,
    height: 25,
  },

  title: {
    color: "#FF5F0F",
    fontWeight: "bold",
    fontSize: 20,
    width: "40%",
  },

  banner: {
    marginBottom: 10,
  },

  promo: {
    backgroundColor: "#ff5f0f",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 20,
    borderWidth: 2, 
    borderColor: "#ff5f0f",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  tpromo: {
    color: "white",
    fontWeight: "bold",
    fontSize: 10,
  },

  footer: {
    backgroundColor: "#ff5f0f",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    height: 300,
    width: 410,
  },

  forms: {
    borderColor: "white",
    borderWidth: 2,
    width: 300,
    height: 50,
    borderRadius: 15,
    padding: 2,
    color: "white",
    marginBottom: 5,
  },
  eform: {
    borderRadius: 10,
    fontWeight: "bold",
    color: "#FF5F0F",
    backgroundColor: "white",
    width: 80,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
