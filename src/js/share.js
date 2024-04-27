'use.stric';
// array vacio ,q tendra q contener los objetos del listado de cocteles.

let coctelsData=[
    {
        id:"11007",
        Name:"Margarita",
        img:'https//www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
    },

    {
        id:"11118",
        Name:"11118",
        img:'https//www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg',
    },

    {
        id: "17216",
        Name: "Tommy's Margarita",
        img:'https//www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg',
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
// creamos una funcion que renderize un solo coctel

 /* const renderOnecoctels=(eachcoctels)=>{
    let li=document.createElement('li');
    li.innerHTML=`
    <h3>${eachcoctels.Name}</h3>
    <img src="${eachcoctels.img}" alt="${eachcoctels.Name}">
    `
    for(const eachcoctels of coctelsData){
       renderOnecoctels(eachcoctels);

    }
    ul.appendChild(li);
}; */
// pintamos tarjetas de los cocteles


// creamos una funcion que renderize todos los cocteles de nuestro array
const renderAllCoctels= (list)=>{
  const ul=document.getElementById('coctel-list');
  /* for(const eachcoctels of list) { */
   ul.innerHTML+='';
   list.forEach((eachcoctels) => {
   /*  ul.innerHTML +=  */
   ' <li>
       <h3> ${eachcoctels.Name}</h3>;
        <img src="${eachcoctels.img}" alt="${eachcoctels.Name}"/>
    </li>'};
    
   });
};
//hacemos peticion al servidor 
const getDataApi=()=>{    
fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then((response) => response.json())
    .then((data)=> {
        coctelsData = data;
        renderAllCoctels(coctelsData);
        
    });
     
};
getDataApi();
//se ejecuta cuando el usuario escribe en el input
/* let drikData=[]; */


const handleInput = (ev) =>{
    const input=ev.target;
    const valueInput=input.value;
    /* console.log(valueInput);
    console.log(coctelsData); */

    const filterCoctelsData=coctelsData
    .filter((eachcoctels)=>{const nameLower = eachcoctels.Name.toLocaleLowerCase();
     return nameLower=== valueInput || nameLower.includes(valueInput);
});
    renderAllCoctels(filterCoctelsData);
};


const handleClick=(event)=>{
    event.preventDefault()
    if(input.value.length>0){
        alert('Ingrese un valor valido');
    }
    else {
     getDataApi();      
}};
    
 /* window.location.href='https://www.thecocktaildb.com/'; */

//cuando carga la pagina

input.addEventListener('input', handleInput);

btn.addEventListener('click', handleClick);