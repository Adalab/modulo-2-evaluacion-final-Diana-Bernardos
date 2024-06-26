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


const addFavorite=(ev) =>{
    //datos del coctel
    const liClickedId = ev.currentTarget.id;
   const clickedDrinksData = drinksData.find(item => item.strDrink === liClickedId);
   const favoriteClickedIndex = favoriteddrinks.findIndex(item => item.strDrink=== liClickedId);

  if(!clickedDrinksData)return;//si esta el coctel
  //verificar si es fav

  if (favoriteClickedIndex === -1) {
    //añadir a fav si el coctel no esta
    favoriteddrinks.push(clickedDrinksData);
  } else {
    //quitarlo de fav
    favoriteddrinks.splice(favoriteClickedIndex, 1);
  }
  renderAllDrinks(drinksData);
  localStorage.setItem("favoriteddrinks",JSON.stringify(favoriteddrinks));
  console.log("lista de fav",favoriteddrinks);
  addEventListeners();
};

// creamos una funcion que renderize todos los cocteles
function renderAllDrinks(array){
  const ul=document.querySelector('.js_list');
    ul.innerHTML= array.map(renderOneDrink).join('');
    addEventListeners();
    renderFavoriteDrinks();
  /* favoriteddrinks(); */
    addEventListeners();
};

function renderFavoriteDrinks(){
    const ul=document.getElementById("favoriteList");
    favoriteList.innerHTML=favoriteddrinks.map(drink =>`<li>${drink.strDrink}</li>`).join('');
    
};
function addEventListeners(){
    const allLi= document.querySelectorAll('.js_list');
    allLi.forEach(li=>li.addEventListener('click', addFavorite));
    const allImages=document.querySelectorAll('.js_img');
    allImages.forEach(img=>img.addEventListener('click', addFavorite));
    
} ;

const renderSearchedDrink =(drink)=>{
  if(!drink || !drink.strDrink)return '';

    return `<div class="searched-drink-card">
    <h3>${drink.strDrink}</h3>
    <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}"/>
    <p>${drink.strInstructions}</p>
    </div>`;
    
};

    
const handleInput = () =>{
   const inputValue=document.getElementById("inputDrink").value.toLowerCase()
  if(drinksData && drinksData.length>0){
    const filteredDrinks=drinksData.filter
      (drink=>drink.strDrink.toLowerCase().includes(inputValue));
  if(filteredDrinks.length >0){
      const searchResult=filteredDrinks[0];
      const searchCard=renderSearchedDrink(searchResult);
      document.getElementById("searchResultContainer").innerHTML=searchCard;
  }else{
      document.getElementById("searchResultContainer").innerHTML="<p> No hay resultados</p>";
       }
  } else {
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
     getDataApi();
  }};   


const handleClick=(event)=>{
  const liCLickedId = event.currentTarget.id;
  console.log(event.currentTarget.dataset.name);
  // buscar en el array por el id clicado
  const clickedDrink = drinksData.find((item) => item.strDrink === liCLickedId);
  if (clickedDrink){
  console.log(clickedDrink.strDrink);
 }};

const addClickListener=()=>{
  const allLi=document.querySelectorAll('li');
  allLi.forEach(li=>li.addEventListener('click', addFavorite));  
   
 }; 


 
//cuando carga la pagina
getDataApi();
init();

input.addEventListener('input', handleInput);
btn.addEventListener('click', handleClick);
