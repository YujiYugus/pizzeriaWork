// // // import React from 'react';
// // // import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// // // export default function Categorias() {
// // //   const categorias = ['Gigante', 'Grande', 'Bebidas'];

// // //   return (
// // //     <View style={styles.container}>
// // //       {categorias.map((item, index) => (
// // //         <TouchableOpacity key={index} style={[styles.button, item === 'Gigante' && styles.active]}>
// // //           <Text style={[styles.label, item === 'Gigante' && styles.activeLabel]}>{item}</Text>
// // //         </TouchableOpacity>
// // //       ))}
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 },
// // //   button: {
// // //     backgroundColor: '#eee',
// // //     padding: 10,
// // //     borderRadius: 10,
// // //     marginHorizontal: 5,
// // //   },
// // //   active: {
// // //     borderWidth: 2,
// // //     borderColor: 'red',
// // //   },
// // //   label: {
// // //     fontSize: 14,
// // //     color: '#333',
// // //   },
// // //   activeLabel: {
// // //     color: 'red',
// // //     fontWeight: 'bold',
// // //   },
// // // });
// // import React from 'react';
// // import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

// // const categorias = [
// //   { nome: 'Gigante', icon: require('../assets/icons/pizza1.png'), selecionada: true },
// //   { nome: 'Grande', icon: require('../assets/icons/pizza2.png'), selecionada: false },
// //   { nome: 'Bebidas', icon: require('../assets/icons/drink.png'), selecionada: false },
// // ];

// // export default function Categorias() {
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.titulo}>FAVORITOS</Text>
// //       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
// //         {categorias.map((cat, index) => (
// //           <TouchableOpacity
// //             key={index}
// //             style={[
// //               styles.card,
// //               cat.selecionada && styles.cardSelecionado
// //             ]}
// //           >
// //             <Image source={cat.icon} style={styles.icone} />
// //             <Text style={[styles.texto, cat.selecionada && styles.textoSelecionado]}>
// //               {cat.nome}
// //             </Text>
// //           </TouchableOpacity>
// //         ))}
// //       </ScrollView>

// //       <Text style={styles.subtitulo}>SABORES FAVORITOS</Text>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     paddingHorizontal: 16,
// //     marginTop: 16,
// //   },
// //   titulo: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     marginBottom: 12,
// //   },
// //   subtitulo: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     marginVertical: 16,
// //   },
// //   card: {
// //     backgroundColor: '#eee',
// //     borderRadius: 12,
// //     padding: 10,
// //     marginRight: 10,
// //     alignItems: 'center',
// //     shadowColor: '#000',
// //     shadowOpacity: 0.1,
// //     shadowRadius: 3,
// //   },
// //   cardSelecionado: {
// //     borderWidth: 2,
// //     borderColor: '#EF4C23',
// //     backgroundColor: '#fff',
// //   },
// //   texto: {
// //     marginTop: 6,
// //     color: '#666',
// //     fontWeight: '600',
// //   },
// //   textoSelecionado: {
// //     color: '#EF4C23',
// //   },
// //   icone: {
// //     width: 40,
// //     height: 40,
// //     resizeMode: 'contain',
// //   },
// // });

// export default function Categorias() {
//   return (
//     <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
//       {categorias.map((cat, index) => (
//         <TouchableOpacity
//           key={index}
//           style={[styles.card, cat.selecionada && styles.cardSelecionado]}
//         >
//           <Image source={cat.icon} style={styles.icone} />
//           <Text style={[styles.texto, cat.selecionada && styles.textoSelecionado]}>
//             {cat.nome}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingLeft: 16,
//     paddingVertical: 10,
//   },
//   card: {
//     backgroundColor: '#eee',
//     borderRadius: 12,
//     padding: 10,
//     marginRight: 10,
//     alignItems: 'center',
//   },
//   cardSelecionado: {
//     borderColor: '#EF4C23',
//     borderWidth: 2,
//   },
//   texto: { marginTop: 6, color: '#666', fontWeight: '600' },
//   textoSelecionado: { color: '#EF4C23', fontWeight: 'bold' },
//   icone: { width: 40, height: 40, resizeMode: 'contain' },
// });

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import marguerita from '../assets/marguerita.png'
import peperoni from '../assets/peperoni.png'
import pizzaGiga from '../assets/icons/pizzaGiga.png'
import pizzaBig from '../assets/icons/pizzaBig.png'
import bebidas from '../assets/icons/bebidas.png'

const categorias = [
  { nome: 'Gigante', icon: require('../assets/icons/pizzaGiga.png'), selecionada: true },
  { nome: 'Grande', icon: require('../assets/icons/pizzaBig.png'), selecionada: false },
  { nome: 'Bebidas', icon: require('../assets/icons/bebidas.png'), selecionada: false },
];

export default function Categorias() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Categorias</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categorias.map((cat, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.card, cat.selecionada && styles.cardSelecionado]}
          >
            <Image source={cat.icon} style={styles.icone} />
            <Text style={[styles.texto, cat.selecionada && styles.textoSelecionado]}>
              {cat.nome}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
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
  card: {
    backgroundColor: '#eee',
    borderRadius: 12,
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
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
