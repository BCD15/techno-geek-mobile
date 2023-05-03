import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-paper';

export default function Home ({navigation}) {
  return  (
    <LinearGradient
    colors={['#000000', '#342348']}
    style={{
      flex: 1,
    }}>
    <ScrollView style={styles.scrollView}>
      <Card style={styles.card}>
        <Card.Content style={styles.content}>
          <Button mode="contained" onPress={() => navigation.navigate('Item')} style={styles.botao}>
            Item 
          </Button>
        </Card.Content>
        <Card.Content style={styles.content}>
          <Button mode="contained" onPress={() => navigation.navigate('Cadastro')} style={styles.botao}>
            Cadastro 
          </Button>
        </Card.Content>
        <Card.Content style={styles.content}>
          <Button mode="contained" onPress={() => navigation.navigate('Login')} style={styles.botao}>
            Login 
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
    </LinearGradient>
  )
}

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

});