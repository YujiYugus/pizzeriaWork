// import React from 'react';
// import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

// export default function Header() {
//   return (
//     <LinearGradient colors={['#EF4C23', '#D61C4E']} style={styles.header}>
//       <View style={styles.headerContent}>
//         <Text style={styles.title}>FAÇA SEU PEDIDO</Text>
//         <TextInput style={styles.input} placeholder="Pesquise por um sabor" placeholderTextColor="#fff" />
//       </View>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   header: { borderBottomLeftRadius: 50, borderBottomRightRadius: 50, padding: 20 },
//   headerContent: { marginTop: 30 },
//   title: { color: 'white', fontSize: 24, fontWeight: 'bold' },
//   input: { backgroundColor: '#FCD8A6', borderRadius: 20, marginTop: 10, padding: 10, color: '#fff' },
// });
// import React from 'react';
// import { View, Text, StyleSheet, TextInput, Image } from 'react-native';

// export default function Header() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.gradient}>
//         <Text style={styles.titulo}>FAÇA SEU{"\n"}PEDIDO</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Pesquise por um sabor"
//           placeholderTextColor="#fff"
//         />
//         <Image
//           source={{ uri: 'https://i.pravatar.cc/100' }}
//           style={styles.avatar}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#EF4C23',
//     borderBottomLeftRadius: 100,
//     paddingBottom: 20,
//   },
//   gradient: {
//     padding: 20,
//   },
//   titulo: {
//     color: '#fff',
//     fontSize: 26,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     backgroundColor: '#FDCB6E',
//     borderRadius: 20,
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     fontSize: 16,
//     color: '#fff',
//   },
//   avatar: {
//     position: 'absolute',
//     top: 20,
//     right: 20,
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//   },
// });
import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import marguerita from '../assets/marguerita.png'
import peperoni from '../assets/peperoni.png'
import pizzaGiga from '../assets/icons/pizzaGiga.png'
import pizzaBig from '../assets/icons/pizzaBig.png'
import bebidas from '../assets/icons/bebidas.png'
import lupa from '../assets/icons/lupa.png'

export default function Header() {
  return (
    <View style={styles.header}>
      {/* Ícone de menu e perfil */}
      <View style={styles.topRow}>
        <TouchableOpacity>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Image
          source={require('../assets/logo.png')} // Substituir pela imagem correta da logo do restaurante
          style={styles.profileImage}
        />
      </View>

      {/* Texto principal */}
      <Text style={styles.title}>FAÇA SEU{'\n'}PEDIDO</Text>

      {/* Campo de busca */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" />  {/* substituir esse icone pela imagem da lupa*/}
        {/* <Image source={lupa} style={lupa} /> */}
        <TextInput
          placeholder="Pesquise por um sabor"
          placeholderTextColor="#666"
          style={styles.searchInput}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#E80230',
    paddingTop: 50,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 80,
    overflow: 'hidden',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#fff',
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FCD9A3',
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 40,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: '#000',
  },
  // lupa: {
  //   width: 2,
  //   height: 2,
  // }
});
