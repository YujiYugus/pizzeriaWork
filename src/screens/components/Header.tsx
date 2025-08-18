import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import logo from '../../assets/logo.png';
import SearchBar from '../../hooks/useSearch';
import { loadTop } from '../../services/loadData';

class Top extends React.Component {
  state = {
    top: {
      title: '',
      find: '',
    },
    list: [],
  }
  updateTop() {
    const back = loadTop();
    this.setState({ top: back })
  }
  componentDidMount() {
    this.updateTop();
  }
  render() {
    return <View style={styles.header}>
      <View style={styles.topRow}>
        <Text style={styles.title}>{this.state.top.title}</Text>
        <Image
          source={logo}
          style={styles.profileImage}
        />
      </View>
      <SearchBar placeholder={this.state.top.find} />
    </View>
  }
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
    maxWidth: 120,
    flexWrap: "wrap",
  },
});

export default Top;