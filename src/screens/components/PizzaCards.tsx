import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import useCards from "../../hooks/useCards";
import PizzaCard from "./PizzaCard";

export default function PizzaCards() {
    const [title, list] = useCards();
    const [selecionado, setSelecionado] = useState<number | null>(null);

    const handlePress = (index: number) => {
        if (selecionado === index) {
            setSelecionado(null);
        } else {
            setSelecionado(index);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {list.map((item, index) =>
                    <PizzaCard
                        key={index}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        stars={item.stars}
                        destaque={selecionado === index}
                        onPress={() => handlePress(index)}
                    />
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 16,
        marginBottom: 10,
    },
    scrollContent: {
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: "center",
    },
});