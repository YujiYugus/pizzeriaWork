import pep from '../assets/produtores/peperoni.png';
import mag from '../assets/produtores/marguerita.png';
import che from '../assets/produtores/cheese.png';

const randomResult = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const sabores = {
    title: "SABORES FAVORITOS",
    list: [
        {
            name: "Pizza de Pepperoni",
            image: pep,
            stars: randomResult(3, 5),
            price: "R$ 59,90",
        },
        {
            name: "Pizza de Marguerita",
            image: mag,
            stars: randomResult(3, 5),
            price: "R$ 55,90",
        },
        {
            name: "Pizza de Queijo",
            image: che,
            stars: randomResult(3, 5),
            price: "R$ 49,90",
        },
    ]
}

export default sabores;