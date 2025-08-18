import React from "react";
import { CategoriaItem } from "../hooks/useCategorias";
import { TouchableOpacity, Image, Text, StyleSheet } from "react-native";
interface CategoriaProps extends CategoriaItem {
    selecionada: boolean;
    aoPressionar: () => void;
}

export default function Categoria({ cat, image, selecionada, aoPressionar }: CategoriaProps) {
    return (
        <TouchableOpacity
            style={[styles.card, selecionada && styles.cardSelecionado]}
            onPress={aoPressionar}
        >
            <Image source={image} style={styles.icone}/>
            <Text style={[styles.texto, selecionada && styles.textoSelecionado]}>
                {cat}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#eee',
    borderRadius: 12,
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  cardSelecionado: {
    borderWidth: 2,
    borderColor: '#E80230',
    backgroundColor: '#fff',
  },
  texto: {
    marginTop: 6,
    color: '#666',
    fontWeight: '600',
  },
  textoSelecionado: {
    color: '#E80230',
    fontWeight: 'bold',
  },
  icone: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});