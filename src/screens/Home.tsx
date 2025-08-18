import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Header from './components/Header.tsx';
import Categorias from './components/Categorias.tsx';
import PizzaCard from './components/PizzaCard.tsx';
import Footer from './components/Footer.tsx';

export default function Home() {
  return (
    <View style={styles.container}>
      {/* Conteúdo que pode rolar */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Header />
        <Categorias />

        {/* Título Sabores Favoritos */}
        <Text style={styles.titulo}>SABORES FAVORITOS</Text>
        <View style={styles.cardContainer}>
          <PizzaCard
            nome="Pizza de Peperoni"
            preco="R$ 59,90"
            imagem={require('../assets/produtores/peperoni.png')}
            destaque
          />
          <PizzaCard
            nome="Pizza de Marguerita"
            preco="R$ 55,90"
            imagem={require('../assets/produtores/marguerita.png')}
          />
        </View>
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
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 16,
    marginTop: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
});
