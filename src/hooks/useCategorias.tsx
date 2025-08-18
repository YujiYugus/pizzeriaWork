import { useState, useEffect } from "react";
import { loadCategorias } from "../services/loadData";;

export type CategoriaItem = {
    cat: string;
    image: any;
};

export default function useCategorias(): [string, CategoriaItem[]] {
    const [title, setTitle] = useState("");
    const [list, setList] = useState<CategoriaItem[] > ([]);

    useEffect(() => {
        const result = loadCategorias();
        setTitle(result.title);
        setList(result.list);
    }, []);

    return [title, list];
}