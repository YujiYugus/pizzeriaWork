import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Header from './components/Header.tsx';
import Categorias from './components/Categorias.tsx';
import Footer from './components/Footer.tsx';
import PizzaCards from './components/PizzaCards.tsx';

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Header />
        <Categorias />
        <PizzaCards />
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 10,
  },
});
