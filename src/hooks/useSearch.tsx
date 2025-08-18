import React from "react";
import { View, TextInput, Image, StyleSheet, TextInputProps } from 'react-native';
import lupa from '../assets/icons/lupa.png'
import { loadTop } from "../services/loadData";

interface SearchBarProps extends Partial<TextInputProps> {
    placeholder?: string;
}

export default function SearchBar({ placeholder, style, ...rest }: SearchBarProps) {
    const p = placeholder ?? loadTop().find;

    return (
        <View style={[styles.searchContainer, style]}>
            <Image source={lupa} style={styles.lupa} />
            <TextInput
                placeholder={p}
                placeholderTextColor="#666"
                style={styles.searchInput}
                {...rest}
            />
        </View>
    );
}

const styles = StyleSheet.create({
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