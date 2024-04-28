"use strict";


let coctelsData=[
    {
        id:"11007",
        name:"Margarita",
        drink:"www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
        img:"https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
    },

    {
        id:"11118",
        drink:"www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
        name:"blue Margarita",
        img:"https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
    },

    {
        id: "17216",
        drink: "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
        name: "Tommy's Margarita",
        
        img:"https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg",
    },

    {
        id:"16158",
        drink: "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
        name: "Whitecap Margarita",
        img:"https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg",
    },

    {
        id:"12322",
        drink: "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
        name:"strawberry Margarita",
        img:"https://www.thecocktaildb.com/images/media/drink/srpxxp1441209622.jpg",
    },

    {
        id: "178332",
        drink:"www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
        name:"Smashed Watermelon Margarita",
        img:"https://www.thecocktaildb.com/images/media/drink/tqyrpw1439905311.jpg",
    },
];
let favoriteCoctels=[]

//funciones

const renderOneCoctel=(eachcoctels) =>{ 
let html='';

const indexFav=favoriteCoctels.findIndex(
    (item)=>item.id===coctelsData.id
);

let classCss =indexFav=== -1 ? '' :'blue';

html = `<li class = "list js_list ${classCss}" id="${coctelsData.id}" >
<h4> ${eachcoctels.name}</h4>
<img src = ${eachcoctels.img}/>
<ul class="coctels"></ul>
</li>`;
/* for (const coctel of coctelsData) {
html += `<img class="coctel-img" style="background-img:#${eachcoctels.img}">`; */
/* }
html += `<img></li>`*/
return html;
};

const addFavorite=(ev) =>{
    //datos del coctel
    const liClickedId = ev.currentTarget.id;
  const clickedCoctelsData = coctelsData.find(
    (item) => item.id === liClickedId
  );
  //verificar si es fav
  const favoriteLiClickedIndex = favoriteCoctels.findIndex(
    (item) => item.id === liClickedId
  );
  if (favoriteLiClickedIndex === -1) {
    //añadir a fav si el coctel no esta
    favoriteCoctels.push(clickedCoctelsData);
  } else {
    //quitarlo de fav
    favoriteCoctels.splice(favoriteLiClickedIndex, 1);
  }
  console.log(favoriteCoctels);
  renderAllCoctels(coctelsData);
  localStorage.setItem("favoriteCoctels", JSON.stringify(favoriteCoctels));
};

const renderCoctelsCards=(eachcoctels)=>{
    let html='';
    html=`
    <li class="card js_list">
      <img  src = "${eachcoctels.img}"/>
      <h4> ${eachcoctels.name} </h4>
      <div class="coctels">`;

    for (const coctels of eachcoctels.coctels){
        html+=`<div class="listcoctel" style="background-image:#${eachcoctels.img}"></div>`;
    }
    html+=`</div>
    </li>`;

    return html;

};


// creamos una funcion que renderize todos los cocteles de 


const renderAllCoctels=(array)=>{
    ul.innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    ul.innerHTML += renderOneCoctel(array[i]);
  }
  console.log(array);
        const allcoctelsLi= document.querySelectorAll('.js_list');
  for (const li of allcoctelsLi) {
    li.addEventListener('click', addFavorite);
  }
};
//creamos las tarjetaS de los cocteles pintadolas en el html desde js
/* const renderCoctelsCards =(coctelsData)=>{
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
        container.appendChild(card);//es el padre de nuestra ul y li. */
     

    //llamamos a la funcion
    
    /* renderCoctelsCards(eachcoctels);
    console.log(eachcoctels); */
  

//hacemos peticion al servidor 
const getData = ()=>{    
fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then((response) => response.json())
    .then((dataApi)=> {
        coctelsData=dataApi.coctels;
        renderAllCoctels(coctelsData);
       
    });   
};
/* getDataApi(); */
//se ejecuta cuando el usuario escribe en el input


// funciones manejadoras de eventos input y boton search.
const handleInput = (ev) =>{
    const valueInput=input.value;
/*     const input=ev.target; */
    const listcoctel=input.value.toLowerCase();
    const filteredCoctels=coctelsData.filter((coctel)=> coctel.name.toLowerCase().includes(valueInput.toLowerCase())
);
       renderAllCoctels(filteredCoctels); 
       
};

    
     


const handleClick=(event)=>{
     event.preventDefault() 
     const inputElement=document.getElementById("input");
     const inputValue=inputElement.value.toLowerCase();
     const listcoctels=coctelsData.find((coctel)=> coctel.Name.toLowerCase())=== inputValue; 
     
     const filteredCoctels=coctelsData.filter((coctel)=> coctel.Name.toLowerCase().includes(inputValue.toLowerCase())
     )};

 /* window.location.href='https://www.thecocktaildb.com/'; */

//cuando carga la pagina

input.addEventListener('input', handleInput);

btn.addEventListener('click', handleClick);
