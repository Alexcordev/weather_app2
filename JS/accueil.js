'use strict'
$(document).ready(function(){
    
    $('.bxslider').bxSlider({
      auto: true,
      mode: 'fade',
      captions: true,
      slideWidth: 1200,
      pager: false
    });

   
  $('#logout').click(function(){
    localStorage.clear();
    window.location.href = "http://localhost/weather_app2/login.html";

});

//Déclaration des Globales 

//Sélectionner le id du p dans le fichier html
var p_users = document.querySelector('#userList');


/*Créer une fonction pour y intégrer les instructions à réaliser dans
chaque étape du traitement de la réponse de la requête get */


/*Ici on utilise une fonction callback pour convertir les données
reçues de l'url en format JSON */
reqUsers()
.then(data => data.json()) 
    .then(users => {
        usersList(users.data);

/*Ici on retourne la fonction getJanet() qui fetch l'apirest pour un utilisateur
seulement*/
        return getJanet();

    })
/* Ici on reçoit les données de la url et on les décodes en format JSON*/
    .then(data => data.json())


/* Ici on utilise la fonction showJanet(user) pour afficher les données
   de l'utilisateur*/    
       .then(user => {
           showJanet(user.data)
       });


// Fonction qui inclut l'instruction fetch qui fait un get request
       function getJanet() {
        return fetch('https://reqres.in/api/users/2');
    }

/*Fonction qui inclut les instructions pour afficher les données 
de l'utilisateur Janet dans la page html*/    

function showJanet(user) {
        var head = document.createElement('header');
        var title = document.createElement('h2');
        var email = document.createElement('h3');
        var imageBox = document.createElement('img');
        title.innerHTML = user.first_name + ' ' + user.last_name + '<br/>';
        title.style.color = '#ffffff';
        title.style.fontSize = '20px';
        title.style.textShadow = '1px 1px #000000';
        email.innerHTML = 'Courriel' + ':' + ' ' + user.email;
        email.style.color = '#ffffff';
        imageBox.src = user.avatar;
        imageBox.style.width = '100px';
        imageBox.style.height = '100px';
        imageBox.style.border = '2px solid #000000';
        imageBox.style.boxShadow = '1px 2px 3px black';
        head.innerHTML = '<h2>' + 'Développeur de la semaine' + '</h2>';
        head.style.background = 'black';
        head.style.color = 'red';
        head.style.padding = '10px';
        head.style.width = '50%';


                
    }



/*Créer une fonction pour y enmagasiner la promesse fetch et le url
à laquelle on fait la requête GET */

function reqUsers() {

    /*fetch reçoit un url dans lequel sont encryptées
les données en format JSON*/
    
    return fetch('https://reqres.in/api/users?page=2');
 }  
    
/*Créer la function usersList et y inclure les instructions pour
afficher les données 
*/

function usersList(usersList) {

/*Utiliser la méthode map(valeur, index) avec callback pour parcourir l'index du tableau    
et sélectionner les données à afficher par la suite
*/    

usersList.map((user, i) => {
        var date = document.createElement('h3');
        var title = document.createElement('h2');
        var email = document.createElement('h3');
        var ligne = document.createElement('hr');
        var imageBox = document.createElement('img');
        date.innerHTML = 'Membre depuis le' + ' ' + moment().date() + ' ' + moment().format('MMMM') + ' ' + moment().format('YYYY');
        date.style.color = '#808080';
        date.style.fontSize = '16px';
        
        title.innerHTML = user.first_name + ' ' + user.last_name + '<br/>';
        title.style.color = '#333333';
        title.style.fontSize = '30px';
        email.innerHTML = user.email;
        email.style.color = '#0066ff';
        email.style.fontSize = '20px';
        email.style.textShadow = '1px #000000';
        imageBox.src = user.avatar;
        imageBox.style.width = '100px';
        imageBox.style.height = '100px';
        imageBox.style.border = '2px solid #000000';
        imageBox.style.boxShadow = '1px 2px 3px #000000';
        imageBox.style.margin = 'auto auto 15px auto';
        ligne.style.width = '40%';
        ligne.style.border = '1px #ccc solid';
        ligne.style.margin = '15px auto 15px 0px';
        

//Afficher les données dans un titre h2 et est l'enfant du paragraphe 
        p_users.appendChild(title);
        p_users.appendChild(date);
        p_users.appendChild(imageBox);
        p_users.appendChild(email);
        p_users.appendChild(ligne);
        
        
        
    })


    
}
});

