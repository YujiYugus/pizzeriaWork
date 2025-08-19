import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Star from './Star';

type StarsProps = {
    quantity: number;
}

export default function Stars ({
    quantity: oldQuantity,
}: StarsProps) {
    const [quantity, setQuantity] = useState(oldQuantity);
    const StarsRender = () => {
        const starsList = [];
        for (let i = 0; i < 5; i++) {
            starsList.push(
                <Star
                    key={i}
                    onPress={() => setQuantity(i + 1)}
                    filled={i < quantity}
                />
            );
        }
        return starsList
    };
    return <View style={styles.stars}>
        <StarsRender />
    </View>
}

const styles = StyleSheet.create({
    stars: {
        flexDirection: 'row'
    },
});
