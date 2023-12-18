//header qui apparait au scroll
//récup de la nav par l'id
const navbar = document.getElementById('navbar');
//evenement au scroll >100px et action de la navbar
window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        navbar.style.display = 'block'; 
        navbar.style.position = 'fixed'; 
        navbar.style.top = '0'; 
    } else {
        navbar.style.display = 'none'; 
    }
});

//filtrage boissons
// récup des btn qui ont la class "energisante" et "désaltérante"
let energizFilter = document.querySelector('.energisantes');
let coolFilter = document.querySelector('.desalterantes');

//récup des divs ayant la class cooling ou energizing
let recettesEnergizing = document.querySelectorAll('.recetteContenu.energizing');
let recettesCooling = document.querySelectorAll('.recetteContenu.cooling');

energizFilter.addEventListener('click', ()=>{
    //les div ayant la class cooling deviennent grisées et leur contenu <p> change en "non disponible, veuillez modifier votre séléction pour choisir cette recette"
    recettesCooling.forEach((recette) => {
        recette.style.opacity = '0.5';
        recette.style.pointerEvents = 'none'; 

        let description = recette.querySelector('p');
        if (description) {
            description.textContent = "Non disponible, veuillez modifier votre sélection pour choisir cette recette";
        }
    });

});

coolFilter.addEventListener('click', ()=>{
    //les div ayant la class energizing deviennent grisées et leur contenu <p> change en "non disponible, veuillez modifier votre séléction pour choisir cette recette"
    recettesEnergizing.forEach((recette) => {
        recette.style.opacity = '0.5';
        recette.style.pointerEvents = 'none'; 

        let description = recette.querySelector('p');
        if (description) {
            description.textContent = "Non disponible, veuillez modifier votre sélection pour choisir cette recette";
        }
    });
});


//selection boissons
//récup de tous les boutons ".selectionner"
let selectBtn = document.querySelectorAll('.selectionner');

//récup de l'id de la div dont le contenu changera pour afficher le nom de la boisson selectionnée
let selectedDrink = document.querySelector('#selectedDrink');

//selectBtn = [] tableau de tous les boutons ayant la class ".selectionner"
//écouteur sur chaque btn
selectBtn.forEach(bouton => {
    bouton.addEventListener('click', function() {
        let nomBoisson = this.parentElement.parentElement.querySelector('h3').innerText;
        //ici ca récup notre h3 de la carte boisson 'original', 'mojito', 'tropical'...pour le mettre dans la div affichage
        selectedDrink.innerText = `Boisson sélectionnée : ${nomBoisson}`;
    });
});




