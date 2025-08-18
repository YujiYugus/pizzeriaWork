import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import lupa from '../../assets/icons/lupa.png'

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.topRow}>
        <TouchableOpacity>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.profileImage}
        />
      </View>

      <Text style={styles.title}>FAÇA SEU{'\n'}PEDIDOS</Text>

      <View style={styles.searchContainer}>
        <Image source={lupa} style={styles.lupa} />
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
  lupa: {
    width: 20,
    height: 20,
  }
});
