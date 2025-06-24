import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import cesta from '../assets/icons/cesta.png'
import home from '../assets/icons/home.png'
import contato from '../assets/icons/contato.png'

type footerProps = {
  destaque?: boolean;
};

export default function Footer({ destaque = false }: footerProps) { // ajustar a questao do false e do true aqui do destaque. se for verdadeiro quer dizer que o campo esta selecionado e deveria ficar vermelho patra melhor entendimento
  const textoCor = destaque ? '#fff' : '#000';

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item}>
        <View style={[styles.card, destaque && styles.cardDestaque]}>
          <Image source={cesta} style={styles.icon} />
          <Text style={styles.nome}>Carrinho</Text>
        </View>

      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <View style={[styles.card, destaque && styles.cardDestaque]}>
          <Image source={home} style={styles.icon} />
          <Text style={styles.nome}>Início</Text>
        </View>

      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <View style={[styles.card, destaque && styles.cardDestaque]}>
          <Image source={contato} style={styles.icon} />
          <Text style={styles.nome}>Contato</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#eee',
    paddingVertical: 10,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,

  },
  item: {
    alignItems: 'center'
  },
  card: {
    backgroundColor: '#eee',
    borderRadius: 160,
    padding: 16,
    width: 95,
    height: 95,
    alignItems: 'center',
    margin: 1,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardDestaque: {
    backgroundColor: '#E80230',
  },
  imagem: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    width: 32,
    height: 32,
    marginBottom: 4,
  }
});
