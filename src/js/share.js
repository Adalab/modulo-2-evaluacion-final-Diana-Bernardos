'use.strict';
// array vacio ,q tendra q contener los objetos del listado de cocteles.

const coctelsData=[
    {
        id:"11007",
        Name:"Margarita",
        img:https:'//www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
    },

    {
        id:"11118",
        Name:"11118",
        img:https:'//www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg',
    },

    {
        id: "17216",
        Name: "Tommy's Margarita",
        img:https:'//www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg',
    },

    {
        id:"16158",
        Name: "Whitecap Margarita",
        img:'https://www.thecocktaildb.com/images/media/drink/srpxxp1441209622.jpg',
    },

    {
        id:"12322",
        Name: "Strawberry Margarita",
        img:'https://www.thecocktaildb.com/images/media/drink/tqyrpw1439905311.jpg',
    },

    {
        id: "178332",
        Name:"Smashed Watermelon Margarita",
        img:'https://www.thecocktaildb.com/images/media/drink/dztcv51598717861.jpg',
    },
];


fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then((response) => response.json())
    .then((dataApi )=> {}
     
);

const handleInput = (ev) =>{
    const valueInput=input.value;
    console.log(valueInput);
};

input.addEventListener('input', handleInput);
