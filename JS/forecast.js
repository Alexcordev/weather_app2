'use strict'

//Fetch API - Format XML et JSON - Youtube référence

//https://www.youtube.com/watch?v=Fkw_OlcLcwE

$(document).ready(function () {
  $(function() {
    $('#main').css('display', 'none');
    $('#alert').css('display', 'none');
    $('#today_card').css('display', 'none');
  });

  $('#search').click(function(){
    
      var nom = $('#ville').val();

      if (!$.trim(nom)){
        $('#alert').show();
        $('#main').css('display', 'none');
}else{
  
     $('#main').slideDown('slow');
     $('#today_card').fadeIn('slow');
    
}
  });

  $('#form-login').submit(function(){
    var prenom = $('#prenom').val();

    localStorage.setItem('prenom', prenom);

});

var prenom =  localStorage.getItem('prenom');
var showPrenom = document.createElement('h6');

if(prenom != null && prenom != 'undefined'){
    var nom_session = $('#nom_session');

    showPrenom.innerHTML = '<strong>Bienvenue, '+ prenom +'</strong>';
    showPrenom.style.fontSize = '20px';
    showPrenom.style.color = '#ffffff';
    showPrenom.style.height = '20px';

    nom_session.append(showPrenom);
}
});

//Sélectionner les éléments du document DOM par ID
var info = document.querySelector('#main-forecast');
var info1 = document.querySelector('#main-forecast1');
var info2 = document.querySelector('#main-forecast2');
var info3 = document.querySelector('#main-forecast3');
var info4 = document.querySelector('#main-forecast4');
var displayDate = document.querySelector('#date');
var displayTemp = document.querySelector('#temp1');
var displayTemp1 = document.querySelector('#temp2');
var displayTemp2 = document.querySelector('#temp3');
var displayTemp3 = document.querySelector('#temp4');
var displayTemp4 = document.querySelector('#temp5');
var ville = document.querySelector('#ville');
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> dd3fc430f0dc48b5936b590d2c5eabf5904b2c23
var show_message1 = document.querySelector('#voir1');
var show_image1 = document.querySelector('#display_image1');
var show_message2 = document.querySelector('#voir2');
var show_image2 = document.querySelector('#display_image2');
var show_message3 = document.querySelector('#voir3');
var show_image3 = document.querySelector('#display_image3');
var show_message4 = document.querySelector('#voir4');
var show_image4 = document.querySelector('#display_image4');
var show_message5 = document.querySelector('#voir5');
var show_image5 = document.querySelector('#display_image5');
var show_message6 = document.querySelector('#voir6');
var show_image6 = document.querySelector('#display_image6');
var show_temp_min = document.querySelector('#temp_min');
var show_temp_max = document.querySelector('#temp_max');
var show_humidity = document.querySelector('#humidity');
var show_pression = document.querySelector('#pression');
    
        
<<<<<<< HEAD
=======
=======
var show_message = document.querySelector('#voir1');
var show_image = document.querySelector('#display_image');


>>>>>>> bde2c04968b05e7d1e0009ce968d4ac2850225bb
>>>>>>> dd3fc430f0dc48b5936b590d2c5eabf5904b2c23
var forecast = [];

//// Fetcher une api qui envoie une réponse en format JSON
function getForecast() {


function getRequest() {
   const api = '&appid=88d66df667fd895062fb4a30475feac4';
   var q = ville.value;
   const units = 'units=metric';
   const lang = 'lang=fr';
   const link = 'https://api.openweathermap.org/data/2.5/forecast?q='
   const url = link + q + api + '&' + units + '&' + lang;
   
   
   return fetch(url); 
}  


getRequest()
.then(response => response.json())
.then(data => {
   
   console.log(data);
 

 //Afficher les données sur la page  
    
     
   for(let i = 0; i < data.list.length; i+=8){
        
             var date = data.list[i].dt_txt;
             var description = data.list[i].weather[0].description;
             var image = data.list[i].weather[0].icon;
             var min = data.list[i].main.temp_min;
             var max = Math.round(data.list[i].main.temp_max);
             var humide = data.list[i].main.humidity;
             var pression = data.list[i].main.pression;

    
    function timeConverter(UNIX_timestamp){
      var a = new Date(UNIX_timestamp * 1000);
      var mois = ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'];
      var jour = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
      var mois = mois[a.getMonth()];
      var date = a.getDate();
      var jour = jour[a.getDay()];
      var time = jour + ' '  + date + ' ' +  mois;
      return time;
    }
                                    
               
      forecast.push(timeConverter(data.list[i].dt), description, image, min, max, humide, pression);
   }
    
   console.log(forecast);


   var today = document.createElement('h2');
   var today1 = document.createElement('h2');
   var today2 = document.createElement('h2');
   var today3 = document.createElement('h2');
   var today4 = document.createElement('h2');
   var conditions = document.createElement('h2');
   var conditions1 = document.createElement('h2');
   var conditions2 = document.createElement('h2');
   var conditions3 = document.createElement('h2');
   var conditions4 = document.createElement('h2');
   var picture = document.createElement('img');
   var picture1 = document.createElement('img');
   var picture2 = document.createElement('img');
   var picture3 = document.createElement('img');
   var picture4 = document.createElement('img');
   var temper = document.createElement('h1');
   var temper1 = document.createElement('h1');
   var temper2 = document.createElement('h1');
   var temper3 = document.createElement('h1');
   var temper4 = document.createElement('h1');
   var message1 = document.createElement('h6');
   var image1 = document.createElement('img');
   var message2 = document.createElement('h6');
   var image2 = document.createElement('img');
   var message3 = document.createElement('h6');
   var image3 = document.createElement('img');
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> dd3fc430f0dc48b5936b590d2c5eabf5904b2c23
   var image4 = document.createElement('img');
   var message4 = document.createElement('h6');
   var image5 = document.createElement('img');
   var message5 = document.createElement('h6');
   var temp_min = document.createElement('h6');
   var temp_max = document.createElement('h6');
   var temp_humidity = document.createElement('h6');
   var temp_pression = document.createElement('h6');
<<<<<<< HEAD
=======
=======

>>>>>>> bde2c04968b05e7d1e0009ce968d4ac2850225bb
>>>>>>> dd3fc430f0dc48b5936b590d2c5eabf5904b2c23
     for (var i=0; i<forecast.length; i++)
            
     {
     today1.innerHTML = forecast[0].substr(0, 10);
     today1.style.color = '#ffffff';
     today1.style.fontSize = '2rem';
     today1.style.textShadow = '2px 1px #333'
     picture1.src='images/' + forecast[2] + '.png';
     picture1.style.width = '90px';
     picture1.style.height = '90px';
     temper1.innerHTML= Math.round(forecast[4]) + ' °C ' ;
     temper1.style.color = '#ffffff';
     temper1.style.fontSize = '2.5rem';
     temper1.style.fontWeight = 'bold';
     temper1.style.textShadow = '2px 1px #333'
     conditions1.innerHTML = forecast[1];
     conditions1.style.fontSize = '1.5rem';
     conditions1.style.color = '#ffffff';
     conditions1.style.textShadow = '2px 1px #333';
     image1.src='images/umbrella' + '.png'; 
     image1.style.width = '100px';
     image1.style.height = '100px';
     image1.style.margin = '20px 40px 20px 40px';
     image2.src='images/Sunglasses-icon' + '.png'; 
     image2.style.width = '100px';
     image2.style.height = '100px';
     image2.style.margin = '20px 40px 20px 40px';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> dd3fc430f0dc48b5936b590d2c5eabf5904b2c23
     image3.src='images/chandail' + '.png'; 
     image3.style.width = '100px';
     image3.style.height = '100px';
     image3.style.margin = '20px 40px 20px 40px';
     image4.src ='images/coat' + '.png';
     image4.style.width = '100px';
     image4.style.height = '100px';
     image4.style.margin = '20px 40px 20px 40px';
     message1.innerHTML = 'APPORTEZ VOTRE PARAPLUIE !!';
     message1.style.fontSize = '22px';
     message1.style.color = '#000000';
     message1.style.textAlign = 'center';
     message2.innerHTML = 'APPORTEZ VOS LUNETTES SOLAIRES !!';
     message2.style.fontSize = '22px';
     message2.style.color = '#000000';
     message2.style.textAlign = 'center';
     message3.innerHTML = 'APPORTEZ-VOUS UN CHANDAIL';
     message3.style.fontSize = '22px';
     message3.style.color = '#000000';
     message3.style.textAlign = 'center';
     message4.innerHTML = 'METTEZ UN MANTEAU CHAUD !!';
     message4.style.fontSize = '22px';
     message4.style.color = '#000000';
     message4.style.textAlign = 'center';
     message5.innerHTML = 'UNE BELLE NUIT ÉTOILÉE !!';
     message5.style.fontSize = '22px';
     message5.style.color = '#000000';
     message5.style.textAlign = 'center';
     image5.src='images/night' + '.png'; 
     image5.style.width = '100px';
     image5.style.height = '100px';
     image5.style.margin = '20px 40px 20px 40px';
<<<<<<< HEAD
     
     
     
=======
     
     
     
>>>>>>> dd3fc430f0dc48b5936b590d2c5eabf5904b2c23

      console.log(forecast[2]);
      console.log(image1);
     
<<<<<<< HEAD
=======
=======
     message1.innerHTML = 'APPORTEZ VOTRE PARAPLUIE !!';
     message1.style.fontSize = '22px';
     message1.style.color = '#ffffff';
     message1.style.textAlign = 'center';
     message2.innerHTML = 'APPORTEZ VOS LUNETTES SOLAIRES !!'
     message2.style.fontSize = '22px';
     message2.style.color = '#ffffff';
     message2.style.textAlign = 'center';
     
      
     if (Date == forecast[0] && forecast[2] == '04d') {
        show_message.append(message1);
        show_image.append(image1);
        
      }
      
      console.log(forecast[2]);
      console.log(image1);

>>>>>>> bde2c04968b05e7d1e0009ce968d4ac2850225bb
>>>>>>> dd3fc430f0dc48b5936b590d2c5eabf5904b2c23
     info.append(picture1);
     info.append(today1);
     info.append(conditions1);
     displayTemp.append(temper1);
     
     
     
     today.innerHTML = forecast[7].substr(0, 10);
     today.style.color = '#ffffff';
     today.style.fontSize = '2rem';
     today.style.textShadow = '2px 1px #333'
     picture.src='images/' + forecast[9] + '.png';
     picture.style.width = '90px';
     picture.style.height = '90px';
     temper.innerHTML= Math.round(forecast[11]) + ' °C ' ;
     temper.style.color = '#ffffff';
     temper.style.fontSize = '2.5rem';
     temper.style.fontWeight = 'bold';
     temper.style.textShadow = '2px 1px #333'
     conditions.innerHTML = forecast[8];
     conditions.style.fontSize = '1.5rem';
     conditions.style.color = '#ffffff';
     conditions.style.textShadow = '2px 1px #333'
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> dd3fc430f0dc48b5936b590d2c5eabf5904b2c23
     image1.src='images/umbrella' + '.png'; 
     image1.style.width = '100px';
     image1.style.height = '100px';
     image1.style.margin = '20px 40px 20px 40px';
     image2.src='images/Sunglasses-icon' + '.png'; 
     image2.style.width = '100px';
     image2.style.height = '100px';
     image2.style.margin = '20px 40px 20px 40px';
<<<<<<< HEAD
=======
=======
>>>>>>> bde2c04968b05e7d1e0009ce968d4ac2850225bb
>>>>>>> dd3fc430f0dc48b5936b590d2c5eabf5904b2c23
     image3.src='images/chandail' + '.png'; 
     image3.style.width = '100px';
     image3.style.height = '100px';
     image3.style.margin = '20px 40px 20px 40px';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> dd3fc430f0dc48b5936b590d2c5eabf5904b2c23
     image4.src ='images/coat' + '.png';
     image4.style.width = '100px';
     image4.style.height = '100px';
     image4.style.margin = '20px 40px 20px 40px';
     message1.innerHTML = 'APPORTEZ VOTRE PARAPLUIE !!';
     message1.style.fontSize = '22px';
     message1.style.color = '#000000';
     message1.style.textAlign = 'center';
     message2.innerHTML = 'APPORTEZ VOS LUNETTES SOLAIRES !!';
     message2.style.fontSize = '22px';
     message2.style.color = '#000000';
     message2.style.textAlign = 'center';
     message3.innerHTML = 'APPORTEZ-VOUS UN CHANDAIL';
     message3.style.fontSize = '22px';
     message3.style.color = '#000000';
     message3.style.textAlign = 'center';
     message4.innerHTML = 'METTEZ UN MANTEAU CHAUD !!';
     message4.style.fontSize = '22px';
     message4.style.color = '#000000';
     message4.style.textAlign = 'center';
     message5.innerHTML = 'UNE BELLE NUIT ÉTOILÉE !!';
     message5.style.fontSize = '22px';
     message5.style.color = '#000000';
     message5.style.textAlign = 'center';
     image5.src='images/night' + '.png'; 
     image5.style.width = '100px';
     image5.style.height = '100px';
     image5.style.margin = '20px 40px 20px 40px';
    
<<<<<<< HEAD
=======
=======
     message3.innerHTML = 'APPORTEZ-VOUS UN CHANDAIL';
     message3.style.fontSize = '22px';
     message3.style.color = '#ffffff';
     message3.style.textAlign = 'center';

      
>>>>>>> bde2c04968b05e7d1e0009ce968d4ac2850225bb
>>>>>>> dd3fc430f0dc48b5936b590d2c5eabf5904b2c23
     
     
     info1.append(picture);
     info1.append(today);
     info1.append(conditions);
     displayTemp1.append(temper);
     
     today2.innerHTML = forecast[14].substr(0, 10);
     today2.style.color = '#ffffff';
     today2.style.fontSize = '2rem';
     today2.style.textShadow = '2px 1px #333'
     picture2.src='images/' + forecast[16] + '.png';
     picture2.style.width = '90px';
     picture2.style.height = '90px';
     temper2.innerHTML= Math.round(forecast[18]) + ' °C ' ;
     temper2.style.color = '#ffffff';
     temper2.style.fontSize = '2.5rem';
     temper2.style.fontWeight = 'bold';
     temper2.style.textShadow = '2px 1px #333'
     conditions2.innerHTML = forecast[15];
     conditions2.style.fontSize = '1.5rem';
     conditions2.style.color = '#ffffff';
     conditions2.style.textShadow = '2px 1px #333'
     image1.src='images/umbrella' + '.png'; 
     image1.style.width = '100px';
     image1.style.height = '100px';
     image1.style.margin = '20px 40px 20px 40px';
     image2.src='images/Sunglasses-icon' + '.png'; 
     image2.style.width = '100px';
     image2.style.height = '100px';
     image2.style.margin = '20px 40px 20px 40px';
     image3.src='images/chandail' + '.png'; 
     image3.style.width = '100px';
     image3.style.height = '100px';
     image3.style.margin = '20px 40px 20px 40px';
     image4.src ='images/coat' + '.png';
     image4.style.width = '100px';
     image4.style.height = '100px';
     image4.style.margin = '20px 40px 20px 40px';
     message1.innerHTML = 'APPORTEZ VOTRE PARAPLUIE !!';
     message1.style.fontSize = '22px';
     message1.style.color = '#000000';
     message1.style.textAlign = 'center';
     message2.innerHTML = 'APPORTEZ VOS LUNETTES SOLAIRES !!';
     message2.style.fontSize = '22px';
     message2.style.color = '#000000';
     message2.style.textAlign = 'center';
     message3.innerHTML = 'APPORTEZ-VOUS UN CHANDAIL';
     message3.style.fontSize = '22px';
     message3.style.color = '#000000';
     message3.style.textAlign = 'center';
     message4.innerHTML = 'METTEZ UN MANTEAU CHAUD !!';
     message4.style.fontSize = '22px';
     message4.style.color = '#000000';
     message4.style.textAlign = 'center';
     message5.innerHTML = 'UNE BELLE NUIT ÉTOILÉE !!';
     message5.style.fontSize = '22px';
     message5.style.color = '#000000';
     message5.style.textAlign = 'center';
     image5.src='images/night' + '.png'; 
     image5.style.width = '100px';
     image5.style.height = '100px';
     image5.style.margin = '20px 40px 20px 40px';

     

     info2.append(picture2);
     info2.append(today2);
     info2.append(conditions2);
     displayTemp2.append(temper2);
     
     today3.innerHTML = forecast[21].substr(0, 10);
     today3.style.color = '#ffffff';
     today3.style.fontSize = '2rem';
     today3.style.textShadow = '2px 1px #333'
     picture3.src='images/' + forecast[23] + '.png';
     picture3.style.width = '90px';
     picture3.style.height = '90px';
     temper3.innerHTML= Math.round(forecast[24]) + ' °C ' ;
     temper3.style.color = '#ffffff';
     temper3.style.fontSize = '2.5rem';
     temper3.style.fontWeight = 'bold';
     temper3.style.textShadow = '2px 1px #333'
     conditions3.innerHTML = forecast[22];
     conditions3.style.fontSize = '1.5rem';
     conditions3.style.color = '#ffffff';
     conditions3.style.textShadow = '2px 1px #333';
     image1.src='images/umbrella' + '.png'; 
     image1.style.width = '100px';
     image1.style.height = '100px';
     image1.style.margin = '20px 40px 20px 40px';
     image2.src='images/Sunglasses-icon' + '.png'; 
     image2.style.width = '100px';
     image2.style.height = '100px';
     image2.style.margin = '20px 40px 20px 40px';
     image3.src='images/chandail' + '.png'; 
     image3.style.width = '100px';
     image3.style.height = '100px';
     image3.style.margin = '20px 40px 20px 40px';
     image4.src ='images/coat' + '.png';
     image4.style.width = '100px';
     image4.style.height = '100px';
     image4.style.margin = '20px 40px 20px 40px';
     message1.innerHTML = 'APPORTEZ VOTRE PARAPLUIE !!';
     message1.style.fontSize = '22px';
     message1.style.color = '#000000';
     message1.style.textAlign = 'center';
     message2.innerHTML = 'APPORTEZ VOS LUNETTES SOLAIRES !!';
     message2.style.fontSize = '22px';
     message2.style.color = '#000000';
     message2.style.textAlign = 'center';
     message3.innerHTML = 'APPORTEZ-VOUS UN CHANDAIL';
     message3.style.fontSize = '22px';
     message3.style.color = '#000000';
     message3.style.textAlign = 'center';
     message4.innerHTML = 'METTEZ UN MANTEAU CHAUD !!';
     message4.style.fontSize = '22px';
     message4.style.color = '#000000';
     message4.style.textAlign = 'center';
     message5.innerHTML = 'UNE BELLE NUIT ÉTOILÉE !!';
     message5.style.fontSize = '22px';
     message5.style.color = '#000000';
     message5.style.textAlign = 'center';
     image5.src='images/night' + '.png'; 
     image5.style.width = '100px';
     image5.style.height = '100px';
     image5.style.margin = '20px 40px 20px 40px';

     info3.append(picture3);
     info3.append(today3);
     info3.append(conditions3);
     displayTemp3.append(temper3);


     today4.innerHTML = forecast[28].substr(0, 10);
     today4.style.color = '#ffffff';
     today4.style.fontSize = '2rem';
     today4.style.textShadow = '2px 1px #333'
     picture4.src='images/' + forecast[30] + '.png';
     picture4.style.width = '90px';
     picture4.style.height = '90px';
     temper4.innerHTML= Math.round(forecast[32]) + ' °C ' ;
     temper4.style.color = '#ffffff';
     temper4.style.fontSize = '2.5rem';
     temper4.style.fontWeight = 'bold';
     temper4.style.textShadow = '2px 1px #333'
     conditions4.innerHTML = forecast[29];
     conditions4.style.fontSize = '1.5rem';
     conditions4.style.color = '#ffffff';
     conditions4.style.textShadow = '2px 1px #333';
     image1.src='images/umbrella' + '.png'; 
     image1.style.width = '100px';
     image1.style.height = '100px';
     image1.style.margin = '20px 40px 20px 40px';
     image2.src='images/Sunglasses-icon' + '.png'; 
     image2.style.width = '100px';
     image2.style.height = '100px';
     image2.style.margin = '20px 40px 20px 40px';
     image3.src='images/chandail' + '.png'; 
     image3.style.width = '100px';
     image3.style.height = '100px';
     image3.style.margin = '20px 40px 20px 40px';
     image4.src ='images/coat' + '.png';
     image4.style.width = '100px';
     image4.style.height = '100px';
     image4.style.margin = '20px 40px 20px 40px';
     message1.innerHTML = 'APPORTEZ VOTRE PARAPLUIE !!';
     message1.style.fontSize = '22px';
     message1.style.color = '#000000';
     message1.style.textAlign = 'center';
     message2.innerHTML = 'APPORTEZ VOS LUNETTES SOLAIRES !!';
     message2.style.fontSize = '22px';
     message2.style.color = '#000000';
     message2.style.textAlign = 'center';
     message3.innerHTML = 'APPORTEZ-VOUS UN CHANDAIL';
     message3.style.fontSize = '22px';
     message3.style.color = '#000000';
     message3.style.textAlign = 'center';
     message4.innerHTML = 'METTEZ UN MANTEAU CHAUD !!';
     message4.style.fontSize = '22px';
     message4.style.color = '#000000';
     message4.style.textAlign = 'center';
     message5.innerHTML = 'UNE BELLE NUIT ÉTOILÉE !!';
     message5.style.fontSize = '22px';
     message5.style.color = '#000000';
     message5.style.textAlign = 'center';
     image5.src='images/night' + '.png'; 
     image5.style.width = '100px';
     image5.style.height = '100px';
     image5.style.margin = '20px 40px 20px 40px';
     

     info4.append(picture4);
     info4.append(today4);
     info4.append(conditions4);
     displayTemp4.append(temper4);
     
     

     
     }
     temp_min.innerHTML= 'Température Minimum : ' + Math.round(forecast[3]) + ' °C';
     temp_min.style.color = '#ffffff';
     temp_min.style.fontSize = '22px';
     temp_min.style.margin = 'auto';
     temp_min.style.textShadow = '1px 2px #333333';
     temp_max.innerHTML= 'Température Maximum : ' + Math.round(forecast[4]) + ' °C';
     temp_max.style.color = '#ffffff';
     temp_max.style.fontSize = '22px';
     temp_max.style.margin = 'auto';
     temp_max.style.textShadow = '1px 2px #333333';
     temp_humidity.innerHTML= 'Humidité : ' + Math.round(forecast[5]) + ' %';
     temp_humidity.style.color = '#ffffff';
     temp_humidity.style.fontSize = '22px';
     temp_humidity.style.margin = 'auto';
     temp_humidity.style.textShadow = '1px 2px #333333';
     temp_pression.innerHTML = 'Pression Atmosphérique : ' + Math.round(data.list[0].main.pressure) + ' kP';
     temp_pression.style.color = '#ffffff';
     temp_pression.style.fontSize = '22px';
     temp_pression.style.margin = 'auto';
     temp_pression.style.textShadow = '1px 2px #333333';

     show_temp_min.append(temp_min);
     show_temp_max.append(temp_max);
     show_humidity.append(temp_humidity);
     show_pression.append(temp_pression);
   });
           
    
} 


