import React from 'react';
import { View, Text, Image, StyleSheet, GestureResponderEvent, TouchableOpacity } from 'react-native';
import Stars from '../../components/Stars';

type Props = {
  name: string;
  price: string;
  image: any;
  stars: number;
  destaque?: boolean;
  onPress?: (e: GestureResponderEvent) => void;
};

export default function PizzaCard({ name, price, image, stars, destaque = false, onPress }: Props) {
  const textoCor = destaque ? '#fff' : '#000';

  return (
    <TouchableOpacity
      style={[styles.card, destaque && styles.cardDestaque]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={[styles.card, destaque && styles.cardDestaque]}>
        <Image source={image} style={styles.imagem} />
        <Text style={[styles.nome, { color: textoCor }]}>{name}</Text>
        <Stars quantity={stars} /> 
        <Text style={[styles.preco, { color: textoCor }]}>{price}</Text>
      </View>
    </TouchableOpacity>
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
