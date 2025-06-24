// import React from 'react';


// import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity  } from 'react-native';

// import Header from './src/components/Header';
// import Categorias from './src/components/Categorias';
// import PizzaCard from './src/components/PizzaCard';

// import peperoni from './src/assets/peperoni.png';
// import marguerita from './src/assets/marguerita.png';

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         <Header />
//         <Categorias />
//         <TouchableOpacity><PizzaCard nome="Pizza de Peperoni" preco="R$ 59,90" imagem={peperoni} destaque /></TouchableOpacity>
//         <TouchableOpacity><PizzaCard nome="Pizza de Marguerita" preco="R$ 55,90" imagem={marguerita} /></TouchableOpacity>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// // export default function App() {
// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <Text style={{ fontSize: 24, marginTop: 50 }}>Teste OK</Text>
// //     </SafeAreaView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //   },
// // });
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Home from './src/screens/Home';  // Caminho depende da sua estrutura de pastas
import marguerita from '../assets/marguerita.png'
import peperoni from '../assets/peperoni.png'
import pizzaGiga from '../assets/icons/pizzaGiga.png'
import pizzaBig from '../assets/icons/pizzaBig.png'
import bebidas from '../assets/icons/bebidas.png'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
