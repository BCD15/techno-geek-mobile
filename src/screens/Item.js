import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";


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
      <TouchableOpacity style={styles.botao}>
        <Text style={{ color: "#FF5F0F", fontWeight: "bold" }}>Comprar</Text>
      </TouchableOpacity>
    </View>
);
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    width: 180,
    height: 300,
    margin: 10,
    borderRadius:10,
  },
  imagem: {
    resizeMode: "stretch",
    width: 180,
    height: 200,
    borderRadius:10,
  },
});