import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';

export default function Home ({navigation}) {
  return  (
    <ScrollView style={styles.scrollView}>
      <Card style={styles.card}>
        <Card.Content>
          <Button mode="contained" onPress={() => navigation.navigate('Item')}>
            Item 
          </Button>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Button mode="contained" onPress={() => navigation.navigate('Login')}>
            Login 
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 10
  },
  card: {
    width: '40%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});