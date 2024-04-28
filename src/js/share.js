"use strict";


let drinksData=[ ];
let favoriteddrinks=[]

//funciones

const renderOnedrinks=(eachdrinks) =>{ 
    const isFAvorite=favoritedrinks.some(item=>item.Drink === eachdrinks.name);
    const classCss= isFAvorite ? 'blue' : '';
    return `<li class = "list js_list ${classCss}" id="${eachdrinks.Drink}" >
<h4> ${eachdrinks.name}</h4>
<img src = ${eachdrinks.img}/>
</li>`;
};


/* let html='';

const indexFav=favoriteCoctels.findIndex(
    (item)=>item.id===coctelsData.id
);

let classCss =indexFav=== -1 ? '' :'blue'; */

 /* <ul class="coctels"></ul>
</li>`; 
/* for (const coctel of coctelsData) {
html += `<img class="coctel-img" style="background-img:#${eachcoctels.img}">`; */
/* }
html += `<img></li>`*/


const addFavorite=(ev) =>{
    //datos del coctel
    const liClickedId = ev.currentTarget.id;
  const clickeddrinksData = drinksData.find(
    (item) => item.name === liClickedId
  );
  if(!clickeddrinksData)return;//si esta el coctel
  //verificar si es fav
  const favoriteIndex = favoritedrinks.findIndex(
    (item) => item.name=== liClickedId
  );
  if (favoriteIndex === -1) {
    //añadir a fav si el coctel no esta
    favoritedrinks.push(clickeddrinksData);
  } else {
    //quitarlo de fav
    favoritedrinks.splice(favoriteIndex, 1);
  }
  console.log(favoritedrinks);
  renderAlldrinks(drinksData);
  localStorage.setItem("favoritedrinks", JSON.stringify(favoritedrinks));
};

/* const renderCoctelsCards=(eachcoctels)=>{
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

}; */


// creamos una funcion que renderize todos los cocteles de 
/*  const ul=document.querySelector('.js_list'); */
function renderAlldrinks(){
    /* ul.innerHTML= array.map(renderOnedrinks).join('');
    const alldrinksLi= document.querySelectorAll('.js_img'); */
for(const eachdrinks of drinksData){
    const li= document.createElement('li');
    li.setAttribute('p',eachdrinks.name);
    li.dataset.name=eachdrinks.name;
    ul.appendChild(li);
    const img= document.createElement('img');
    img.src=eachdrinks.img;
    img.setAttribute('alt',eachdrinks.desc);
    li.appendChild(img);
    /* allLi.forEach(li=>li.addEventListener('click', addFavorite)); */
    const p= document.createElement('p');
    p.textContent=eachdrinks.desc;
    li.appendChild(p);
}

};

    /* ul.innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    ul.innerHTML += renderOneCoctel(array[i]);
  }
  console.log(array);
        const allcoctelsLi= document.querySelectorAll('.js_list');
  for (const li of allcoctelsLi) {
    li.addEventListener('click', addFavorite);
  } */
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
        console.log("datos de api",dataApi);
        drinksData=dataApi.drinks;
        console.log("cocteles obtenidos", drinksData);
        renderAlldrinks(drinksData);
       
    });   
   
        
};
/* getDataApi(); */
//se ejecuta cuando el usuario escribe en el input


// funciones manejadoras de eventos input y boton search.
const handleInput = (ev) =>{
/*      const input=ev.target;  */
     
    const inputValue=document.getElementById.name.inputValue.toLowerCase();
    console.log(inputValue); 
    /* const listdrinks=input.value.toLowerCase(); */
    const filtereddrinks=drinksData.filter
       ((drink)=>drinksData.name.toLowerCase().includes(inputValue));
           renderAlldrinks(filtereddrinks); 
    };

      const init=()=>{
        const drinksFavLocal =localStorage.getItem('favoriteddrinks');
        if(drinksFavLocal !==null) {
            drinksData=JSON.parse(drinksFavLocal);
            renderAlldrinks(drinksData);
        }else {
            getData();
        }};

            
            
       


 const handleClick=(event)=>{

    const liCLicked = event.currentTarget.id;
  console.log(event.currentTarget.dataset.name);
  // buscar en el array por el id clicado
  const finddrinks = drinksData.find((item) => item.name === liCLicked);
  console.log(eachdrinks.desc);
     /*event.preventDefault();*/
    /*  handleInput(); */
     
  /*    const inputValue=document.getElementById("coctel").value.toLowerCase(); */
     /* const listdrinks=drinksData.find((drinks)=> drinks.idname. *toLowerCase())=== inputValue;  */
     
  /*    const filtereddrinks=drinksData.filter(drinks=> drinks.name.toLowerCase().includes(inputValue));
     renderAlldrinks(filtereddrinks);*/
    };
    const listener=()=>{
        const allLi=document.querySelectorAll('li');
        for(const li of eachdrinks){
            li.addEventListener('click', handleClick);
        }
        listener();
    };



//cuando carga la pagina

init();
input.addEventListener('input', handleInput);
btn.addEventListener('click', handleClick);
//obtener datos al cargar la pagina
renderAlldrinks();
getData();