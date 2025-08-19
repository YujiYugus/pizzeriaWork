import { useState, useEffect } from "react";
import { loadCard } from "../services/loadData";

export type CardItem = {
    name: string;
    image: any;
    stars: number;
    price: string;
};

export default function useCards(): [string, CardItem[]] {
    const [title, setTitle] = useState("");
    const [list, setList] = useState<CardItem[]>([]);


    useEffect(() => {
        const result = loadCard();
        setTitle(result.title);
        setList(result.list);
    }, []);

    return [title, list];
}