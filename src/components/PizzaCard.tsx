// import React from 'react';
// import { View, Text, Image, StyleSheet, ImageSourcePropType  } from 'react-native';

// interface PizzaCardProps {
//   nome: string;
//   preco: string;
//   imagem: any;
//   destaque?: boolean;
// }

// export default function PizzaCard({ nome, preco, imagem, destaque = false }: PizzaCardProps) {
//   return (
//     <View style={[styles.card, destaque && styles.destaque]}>
//       <Image source={imagem} style={styles.image} />
//       <Text style={styles.nome}>{nome}</Text>
//       <Text style={styles.estrelas}>★★★★★</Text>
//       <Text style={styles.preco}>{preco}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 20,
//     padding: 10,
//     alignItems: 'center',
//     width: 160,
//     marginHorizontal: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   destaque: {
//     backgroundColor: '#EF4C23',
//   },
//   image: { width: 100, height: 100, resizeMode: 'contain' },
//   nome: { color: '#000', fontWeight: 'bold', marginTop: 5 },
//   estrelas: { fontSize: 12 },
//   preco: { fontWeight: 'bold', fontSize: 16, marginTop: 5 },
// });
// import React from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';

// type Props = {
//   nome: string;
//   preco: string;
//   imagem: any;
//   destaque?: boolean;
// };

// export default function PizzaCard({ nome, preco, imagem, destaque }: Props) {
//   return (
//     <View style={[styles.card, destaque && styles.cardDestaque]}>
//       <Image source={imagem} style={styles.imagem} />
//       <Text style={styles.nome}>{nome}</Text>
//       <Text style={styles.estrelas}>☆☆☆☆☆</Text>
//       <Text style={styles.preco}>{preco}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     padding: 16,
//     marginHorizontal: 16,
//     marginBottom: 20,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   cardDestaque: {
//     backgroundColor: '#EF4C23',
//   },
//   imagem: {
//     width: 100,
//     height: 100,
//     resizeMode: 'contain',
//     marginBottom: 8,
//   },
//   nome: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   estrelas: {
//     fontSize: 14,
//     color: '#000',
//   },
//   preco: {
//     marginTop: 4,
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#000',
//   },
// });

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     padding: 16,
//     width: 160,
//     alignItems: 'center',
//     margin: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   cardDestaque: {
//     backgroundColor: '#EF4C23',
//   },
//   imagem: {
//     width: 100,
//     height: 100,
//     resizeMode: 'contain',
//     marginBottom: 8,
//   },
//   nome: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   estrelas: {
//     fontSize: 12,
//     color: '#000',
//   },
//   preco: {
//     marginTop: 4,
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#000',
//   },
// });

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import marguerita from '../assets/marguerita.png'
import peperoni from '../assets/peperoni.png'
import pizzaGiga from '../assets/icons/pizzaGiga.png'
import pizzaBig from '../assets/icons/pizzaBig.png'
import bebidas from '../assets/icons/bebidas.png'

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
