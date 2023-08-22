import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import addIcon from "../../assets/addIcon.png";

const addToCart = () => {
  alert(
    "Item adicionado ao carrinho",
  )
}

export default function Item (props) {
  return (
    <View style={styles.card}>
      <TouchableOpacity>
        <Image style={styles.imagem} source={{ uri: props.item.imgitem }} />
      </TouchableOpacity>
      <TouchableOpacity>
        < Text style={{color: "black", margin: 2, fontWeight: "bold" }}>{props.item.titulo}</Text>
      </TouchableOpacity>
      <Text style={{color: "grey", margin: 2,}}>{props.item.preco}</Text>
      <View style={{flexDirection: "row",}}>
      <TouchableOpacity style={styles.botao}>
        <Text style={{ color: "#FF5F0F", fontWeight: "bold" }}>Comprar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={addToCart}>
        <Image style={styles.imageCart} source={addIcon} />
      </TouchableOpacity>
      </View>
    </View>
);
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    width: "44%",
    height: 300,
    margin: 10,
    borderRadius:10,
  },

  imagem: {
    resizeMode: "stretch",
    width: "100%",
    height: 200,
    borderRadius:10,
  },

  imageCart: {
    width: 20,
    height: 20,
    marginLeft: 78,
  },
});