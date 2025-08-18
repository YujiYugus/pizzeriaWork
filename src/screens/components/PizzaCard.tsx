import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
type Props = {
  nome: string;
  preco: string;
  imagem: any;
  destaque?: boolean;
};

export default function PizzaCard({ nome, preco, imagem, destaque = false }: Props) {
  const textoCor = destaque ? '#fff' : '#000';

  return (
    <View style={[styles.card, destaque && styles.cardDestaque]}>
      <Image source={imagem} style={styles.imagem} />
      <Text style={[styles.nome, { color: textoCor }]}>{nome}</Text>
      <Text style={[styles.estrelas, { color: textoCor }]}>☆☆☆☆☆</Text>
      <Text style={[styles.preco, { color: textoCor }]}>{preco}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    width: 160,
    alignItems: 'center',
    margin: 8,
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
  estrelas: {
    fontSize: 12,
  },
  preco: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
