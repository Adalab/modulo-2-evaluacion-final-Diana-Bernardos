const u=document.querySelector(".js_input"),m=document.querySelector(".js_btn_search");document.querySelector(".js_list");document.querySelector(".js_img");document.getElementById(".btnb");document.querySelector(".js_btn-reset");let s=[],i=[];const k=e=>`<li class = "list js_list ${i.some(r=>r.name===e.strDrink)?"blue":""}" id="${e.strDrink}" >
<h4> ${e.strDrink}</h4>
<img src = "${e.strDrinkThumb}" alt="${e.strDrink}"/>
</li>`,l=e=>{const n=e.currentTarget.id,t=s.find(o=>o.strDrink===n),r=i.findIndex(o=>o.strDrink===n);t&&(r===-1?i.push(t):i.splice(r,1),a(s),localStorage.setItem("favoriteddrinks",JSON.stringify(i)),console.log("lista de fav",i),c())};function a(e){const n=document.querySelector(".js_list");n.innerHTML=e.map(k).join(""),c(),h(),c()}function h(){document.getElementById("favoriteList"),favoriteList.innerHTML=i.map(e=>`<li>${e.strDrink}</li>`).join("")}function c(){document.querySelectorAll(".js_list").forEach(t=>t.addEventListener("click",l)),document.querySelectorAll(".js_img").forEach(t=>t.addEventListener("click",l))}const g=e=>!e||!e.strDrink?"":`<div class="searched-drink-card">
    <h3>${e.strDrink}</h3>
    <img src="${e.strDrinkThumb}" alt="${e.strDrink}"/>
    <p>${e.strInstructions}</p>
    </div>`,f=()=>{const e=document.getElementById("inputDrink").value.toLowerCase();if(s&&s.length>0){const n=s.filter(t=>t.strDrink.toLowerCase().includes(e));if(n.length>0){const t=n[0],r=g(t);document.getElementById("searchResultContainer").innerHTML=r}else document.getElementById("searchResultContainer").innerHTML="<p> No hay resultados</p>"}else console.log("no hay datos")},d=()=>{fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita").then(e=>e.json()).then(e=>{console.log("datos de api",e),s=e.drinks||[],a(s),console.log("cocteles obtenidos",s)}).catch(e=>{console.error("error",e)})},D=()=>{const e=localStorage.getItem("favoriteddrinks");e!==null&&(i=JSON.parse(e),d())},p=e=>{const n=e.currentTarget.id;console.log(e.currentTarget.dataset.name);const t=s.find(r=>r.strDrink===n);t&&console.log(t.strDrink)};d();D();u.addEventListener("input",f);m.addEventListener("click",p);
//# sourceMappingURL=main.js.map
