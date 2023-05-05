import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";


export default function Item (props) {
  return (
    <View style={styles.card}>
      <Image style={styles.imagem} source={{ uri: props.item.imgitem }} />
      <Text style={{color: "black", margin: 2, fontWeight: "bold" }}>{props.item.titulo}</Text>
      <Text style={{color: "grey", margin: 2, fontWeight: "semiBold"}}>{props.item.preco}</Text>
      <TouchableOpacity style={styles.botao}>
        <Text style={{ color: "#FF5F0F", fontWeight: "bold" }}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    width: 200,
    height: 350,
    margin: 15,
  },
  imagem: {
    resizeMode: "stretch",
    width: "100%",
    height: 260,
  },
});




