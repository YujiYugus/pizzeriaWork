// // import React from 'react';
// // import { View, ScrollView, Text, StyleSheet } from 'react-native';
// // import Header from '../components/Header.tsx';
// // import Categorias from '../components/Categorias.tsx';
// // import PizzaCard from '../components/PizzaCard.tsx'

// // export default function Home() {
// //   return (
// //     <ScrollView style={styles.container}>
// //       <Header />
// //       <Text style={styles.title}>FAVORITOS</Text>
// //       <Categorias />
// //       <Text style={styles.title}>SABORES FAVORITOS</Text>
// //       <View style={styles.cardContainer}>
// //         <PizzaCard
// //           nome="Pizza de Peperoni"
// //           preco="R$ 59,90"
// //           imagem={require('../assets/produtores/pepperoni.png')}
// //           destaque
// //         />
// //         <PizzaCard
// //           nome="Pizza de Marguerita"
// //           preco="R$ 55,90"
// //           imagem={require('../assets/produtores/marguerita.png')}
// //         />
// //       </View>
// //     </ScrollView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: '#fff' },
// //   title: { fontSize: 22, fontWeight: 'bold', marginLeft: 16, marginTop: 20 },
// //   cardContainer: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 },
// // });
// import React from 'react';
// import { ScrollView, View, Text, StyleSheet } from 'react-native';
// import Header from '../components/Header'
// import Categorias from '../components/Categorias';
// import PizzaCard from '../components/PizzaCard';

// export default function Home() {
//   return (
//     <ScrollView style={styles.container}>
//       <Header />

//       {/* Título Favoritos */}
//       <Text style={styles.titulo}>FAVORITOS</Text>
//       <Categorias />

//       {/* Título Sabores Favoritos */}
//       <Text style={styles.titulo}>SABORES FAVORITOS</Text>
//       <View style={styles.cardContainer}>
//         <PizzaCard
//           nome="Pizza de Peperoni"
//           preco="R$ 59,90"
//           imagem={require('../assets/produtores/pepperoni.png')}
//           destaque
//         />
//         <PizzaCard
//           nome="Pizza de Marguerita"
//           preco="R$ 55,90"
//           imagem={require('../assets/produtores/marguerita.png')}
//         />
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff' },
//   titulo: { fontSize: 22, fontWeight: 'bold', marginLeft: 16, marginTop: 20 },
//   cardContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },
// });


// <Footer />

import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Categorias from '../components/Categorias.tsx';
import PizzaCard from '../components/PizzaCard.tsx';
import Footer from '../components/Footer.tsx';
import marguerita from '../assets/marguerita.png'
import peperoni from '../assets/peperoni.png'
import pizzaGiga from '../assets/icons/pizzaGiga.png'
import pizzaBig from '../assets/icons/pizzaBig.png'
import bebidas from '../assets/icons/bebidas.png'

export default function Home() {
  return (
    <View style={styles.container}>
      {/* Conteúdo que pode rolar */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Header />

        {/* Título Favoritos */}
        <Text style={styles.titulo}>FAVORITOS</Text>
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
    paddingBottom: 60, // Espaço para o Footer não cobrir o conteúdo
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
