"use.strict";


let drinksData=[ ];
let favoriteddrinks=[]

//funciones

const renderOneDrink=(drink) =>{ 
    const isFAvorite=favoriteddrinks.some(item=>item.name === drink.strDrink);
    const classCss= isFAvorite ? 'blue' : '';
    return `<li class = "list js_list ${classCss}" id="${drink.strDrink}" >
<h4> ${drink.strDrink}</h4>
<img src = "${drink.strDrinkThumb}" alt="${drink.strDrink}"/>
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
  const clickedDrink = drinksData.find(
    (item) => item.strDrink === liClickedId);

  if(!clickedDrink)return;//si esta el coctel
  //verificar si es fav
  const favoriteIndex = favoriteddrinks.findIndex(
    (item) => item.strDrink=== liClickedId
  );
  if (favoriteIndex === -1) {
    //añadir a fav si el coctel no esta
    favoriteddrinks.push(clickedDrink);
  } else {
    //quitarlo de fav
    favoriteddrinks.splice(favoriteIndex, 1);
  }
  
/*   renderAlldrinks(drinksData);
  localStorage.setItem("favoritedrinks", JSON.stringify(favoritedrinks)); */
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
/*   */
function renderAllDrinks(array){
  const ul=document.querySelector('.js_list');
    ul.innerHTML= array.map(renderOneDrink).join('');
};
function addEventListeners(){
    const allLi= document.querySelectorAll('.js_list');
    allLi.forEach(li=>li.addEventListener('click', addFavorite));
/* for(const eachdrinks of drinksData){
    const ul= document.createElement('li');
    li.setAttribute('p',eachdrinks.name);
    li.dataset.name=eachdrinks.name;
    ul.appendChild(li);
    const img= document.createElement('img');
    img.src=eachdrinks.img;
    img.setAttribute('alt',eachdrinks.desc);
    li.appendChild(img);
    /* allLi.forEach(li=>li.addEventListener('click', addFavorite)); */
    /* const p= document.createElement('p');
    p.textContent=eachdrinks.desc;
    li.appendChild(p); */
} ;


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

/* getDataApi();  */
//se ejecuta cuando el usuario escribe en el input


// funciones manejadoras de eventos input y boton search.
const handleInput = () =>{
/* onst inputValue=ev.currentTarget.value.toLowerCase(); */
const inputValue=document.getElementById("inputDrink").value.toLowerCase()
  
    /* const inputValue=document.getElementById("inputDrink").value.toLowerCase(); */
  /*   console.log(inputValue);  */
    if(drinksData && drinksData.length >0){
    const filteredDrinks=drinksData.filter
       (drink=>drink.strDrink.toLowerCase().includes(inputValue));
        renderAllDrinks(filteredDrinks); 
    }else{
    console.log("no hay datos");

}
};

const getDataApi = ()=>{    
fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then((response) => response.json())
    .then((dataApi)=> {
        console.log("datos de api",dataApi);
        drinksData=dataApi.drinks || [];
        renderAllDrinks(drinksData);
        console.log("cocteles obtenidos", drinksData);
 } )
 .catch(error =>{
  console.error("error", error);
 })
        
    };
    
   

      const init=()=>{
        const drinksFavLocal =localStorage.getItem('favoriteddrinks');
        if(drinksFavLocal !==null) {
            favoriteddrinks=JSON.parse(drinksFavLocal);
            renderAllDrinks(drinksData);
        }else {
            getDataApi();
        }};

            
            
       


 const handleClick=(event)=>{

  const liCLickedId = event.currentTarget.id;
  console.log(event.currentTarget.dataset.name);
  // buscar en el array por el id clicado
  const clickedDrink = drinksData.find((item) => item.strDrink === liCLickedId);
  console.log(clickedDrink.strDrink);
     /*event.preventDefault();*/
    /*  handleInput(); */
     
  /*    const inputValue=document.getElementById("coctel").value.toLowerCase(); */
     /* const listdrinks=drinksData.find((drinks)=> drinks.idname. *toLowerCase())=== inputValue;  */
     
  /*    const filtereddrinks=drinksData.filter(drinks=> drinks.name.toLowerCase().includes(inputValue));
     renderAlldrinks(filtereddrinks);*/
    };
       const addClickListener=()=>{
        const allLi=document.querySelectorAll('li');
        allLi.forEach(li=>li.addEventListener('click', addFavorite));
        
    }; 



//cuando carga la pagina
getDataApi();
init();

addEventListeners();

input.addEventListener('input', handleInput);
btn.addEventListener('click', handleClick);
