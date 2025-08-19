import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import useCategorias from '../../hooks/useCategorias';
import Categoria from '../../components/Categoria';

interface CategoriaProps {
  top?: React.ComponentType;
}



const TopOfList = ({ Top, title }: { Top?: React.ComponentType; title: string }) => (
  <View>
    {Top && <Top />}
    <Text style={styles.titulo}>{title}</Text>
  </View>
);

export default function Categorias({ top: Top }: CategoriaProps) {
  const [title, list] = useCategorias();
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>("");

  const handlePress = (catName: string) => {
    setCategoriaSelecionada(prev => prev === catName ? "" : catName)
  };

  const topOfList = useMemo(() => <TopOfList Top={Top} title={title} />, [Top, title]);

  return (
    <View style={styles.container}>
      {topOfList}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {list.map((cat) => (
          <Categoria
            key={cat.cat}
            {...cat}
            selecionada={cat.cat === categoriaSelecionada}
            aoPressionar={() => handlePress(cat.cat)}
          />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});