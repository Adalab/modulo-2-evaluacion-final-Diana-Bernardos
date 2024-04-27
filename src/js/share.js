"use strict";
// array vacio ,q tendra q contener los objetos del listado de cocteles.

const coctelsData=[
    {
        id:"11007",
        Name:"Margarita",
        drink:"www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
        img:"https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
    },

    {
        id:"11118",
        drink:"www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
        Name:"blue Margarita",
        img:"https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
    },

    {
        id: "17216",
        drink: "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
        Name: "Tommy's Margarita",
        
        img:"https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg",
    },

    {
        id:"16158",
        drink: "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
        Name: "Whitecap Margarita",
        img:"https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg",
    },

    {
        id:"12322",
        drink: "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
        Name:"strawberry Margarita",
        img:"https://www.thecocktaildb.com/images/media/drink/srpxxp1441209622.jpg",
    },

    {
        id: "178332",
        drink:"www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
        Name:"Smashed Watermelon Margarita",
        img:"https://www.thecocktaildb.com/images/media/drink/tqyrpw1439905311.jpg",
    },
];

// pintamos tarjetas de los cocteles


// creamos una funcion que renderize todos los cocteles de 


const renderAllCoctels=(listcoctel)=>{
    const ul=document.getElementById("listcoctel");
    ul.innerHTML='';
    listcoctel.forEach((eachcoctels) => {
        ul.innerHTML+=
        `<li class="list"> 
          <img  src = "${eachcoctels.img}"/>
          <h4> ${eachcoctels.Name} </h4>
        </li>`;
    })};
//creamos las tarjetaS de los cocteles pintadolas en el html desde js
const renderCoctelsCards =(coctelsData)=>{
    const container =document.getElementById("coctel-container");
    container.innerHTML='';
    coctelsData.forEach((coctel)=>{
        //creamos el elemento de la tarjeta
        const card=document.createElement('div');
        card.classList.add('card');
        //informacion de la bebida en la tarjeta
        card.innerHTML=`
        <h3>${coctel.Name}</h3>
        <img src="${coctel.img}"/>
        `;
        //agregamos la tarjeta a nuestra seccion del listado de cocteles.
        container.appendChild(card);//es el padre de nuestra ul y li.
    });
    //llamamos a la funcion
   
};
   renderCoctelsCards(coctelsData);

//hacemos peticion al servidor 
function getDataApi(){    
fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then((response) => response.json())
    .then((data)=> {
        /* renderAllCoctels(data.drinks); */
       
    });   
};
/* getDataApi(); */
//se ejecuta cuando el usuario escribe en el input


// funciones manejadoras de eventos input y boton search.
const handleInput = (ev) =>{
    const input=ev.target;
    const listcoctel=input.value.toLowerCase();
    /* console.log(valueInput);
    console.log(coctelsData); */
    
       if(input.value.length>0)
     listcoctel=coctelsData.find((eachcoctels)=>eachcoctels.Name===input.value);
        else if(input.value === coctelsData);
        return data
};

    const filteredCoctels=coctelsData.filter((coctel)=>{const nameLower = coctel.Name.toLowerCase();
     return nameLower=== valueInput || nameLower.includes(valueInput);
});
     renderCoctelsCards(filteredCoctels); 


const handleClick=(event)=>{
     event.preventDefault() 
     const input= input.value.toLowerCase();
     const listcoctels=coctelsData.find((coctel)=> coctel.Name.toLowerCase())=== inputValue;
     if (coctel){
        renderCoctelsCards([coctel]);
     }else{
        alert("No se ha encontrado el coctel")
}};
    getDataApi(); 
 /* window.location.href='https://www.thecocktaildb.com/'; */

//cuando carga la pagina

input.addEventListener('input', handleInput);

btn.addEventListener('click', handleClick);
