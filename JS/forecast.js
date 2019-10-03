'use strict'

//Fetch API - Format XML et JSON - Youtube référence

//https://www.youtube.com/watch?v=Fkw_OlcLcwE

//Sélectionner les éléments du document DOM par ID
var info = document.querySelector('#weather1');
var info1 = document.querySelector('#weather2');
var info2 = document.querySelector('#weather3');
var info3 = document.querySelector('#weather4');
var info4 = document.querySelector('#weather5');
var displayDate = document.querySelector('#date');
var displayTemp = document.querySelector('#temp1');
var displayTemp1 = document.querySelector('#temp2');
var displayTemp2 = document.querySelector('#temp3');
var displayTemp3 = document.querySelector('#temp4');
var displayTemp4 = document.querySelector('#temp5');
var ville = document.querySelector('#ville');
var show_message = document.querySelector('#voir1');
var show_image = document.querySelector('#display_image');


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
    
             
          

    function timeConverter(UNIX_timestamp){
      var a = new Date(UNIX_timestamp * 1000);
      var mois = ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'];
      var mois = mois[a.getMonth()];
      var date = a.getDate();
      var time = date + ' ' + mois;
      return time;
    }
                                    
               
      forecast.push(timeConverter(data.list[i].dt), description, image, min, max, humide);
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

     for (var i=0; i<forecast.length; i++)
            
     {
     today1.innerHTML = forecast[0].substr(0, 10);
     today1.style.color = '#ffffff';
     today1.style.fontSize = '2rem';
     today1.style.textShadow = '2px 1px #333'
     picture1.src='images/' + forecast[2] + '.png';
     picture1.style.width = '90px';
     picture1.style.height = '90px';
     temper1.innerHTML= Math.round(forecast[3]) + ' °C ' ;
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

     info.append(picture1);
     info.append(today1);
     info.append(conditions1);
     displayTemp.append(temper1);
     
     today.innerHTML = forecast[6].substr(0, 10);
     today.style.color = '#ffffff';
     today.style.fontSize = '2rem';
     today.style.textShadow = '2px 1px #333'
     picture.src='images/' + forecast[8] + '.png';
     picture.style.width = '90px';
     picture.style.height = '90px';
     temper.innerHTML= Math.round(forecast[10]) + ' °C ' ;
     temper.style.color = '#ffffff';
     temper.style.fontSize = '2.5rem';
     temper.style.fontWeight = 'bold';
     temper.style.textShadow = '2px 1px #333'
     conditions.innerHTML = forecast[7];
     conditions.style.fontSize = '1.5rem';
     conditions.style.color = '#ffffff';
     conditions.style.textShadow = '2px 1px #333'
     image3.src='images/chandail' + '.png'; 
     image3.style.width = '100px';
     image3.style.height = '100px';
     image3.style.margin = '20px 40px 20px 40px';
     message3.innerHTML = 'APPORTEZ-VOUS UN CHANDAIL';
     message3.style.fontSize = '22px';
     message3.style.color = '#ffffff';
     message3.style.textAlign = 'center';

      
     
     
     info1.append(picture);
     info1.append(today);
     info1.append(conditions);
     displayTemp1.append(temper);
     
     today2.innerHTML = forecast[12].substr(0, 10);
     today2.style.color = '#ffffff';
     today2.style.fontSize = '2rem';
     today2.style.textShadow = '2px 1px #333'
     picture2.src='images/' + forecast[14] + '.png';
     picture2.style.width = '90px';
     picture2.style.height = '90px';
     temper2.innerHTML= Math.round(forecast[16]) + ' °C ' ;
     temper2.style.color = '#ffffff';
     temper2.style.fontSize = '2.5rem';
     temper2.style.fontWeight = 'bold';
     temper2.style.textShadow = '2px 1px #333'
     conditions2.innerHTML = forecast[13];
     conditions2.style.fontSize = '1.5rem';
     conditions2.style.color = '#ffffff';
     conditions2.style.textShadow = '2px 1px #333'

     info2.append(picture2);
     info2.append(today2);
     info2.append(conditions2);
     displayTemp2.append(temper2);
     
     today3.innerHTML = forecast[18].substr(0, 10);
     today3.style.color = '#ffffff';
     today3.style.fontSize = '2rem';
     today3.style.textShadow = '2px 1px #333'
     picture3.src='images/' + forecast[20] + '.png';
     picture3.style.width = '90px';
     picture3.style.height = '90px';
     temper3.innerHTML= Math.round(forecast[22]) + ' °C ' ;
     temper3.style.color = '#ffffff';
     temper3.style.fontSize = '2.5rem';
     temper3.style.fontWeight = 'bold';
     temper3.style.textShadow = '2px 1px #333'
     conditions3.innerHTML = forecast[19];
     conditions3.style.fontSize = '1.5rem';
     conditions3.style.color = '#ffffff';
     conditions3.style.textShadow = '2px 1px #333'

     info3.append(picture3);
     info3.append(today3);
     info3.append(conditions3);
     displayTemp3.append(temper3);


     today4.innerHTML = forecast[24].substr(0, 10);
     today4.style.color = '#ffffff';
     today4.style.fontSize = '2rem';
     today4.style.textShadow = '2px 1px #333'
     picture4.src='images/' + forecast[26] + '.png';
     picture4.style.width = '90px';
     picture4.style.height = '90px';
     temper4.innerHTML= Math.round(forecast[28]) + ' °C ' ;
     temper4.style.color = '#ffffff';
     temper4.style.fontSize = '2.5rem';
     temper4.style.fontWeight = 'bold';
     temper4.style.textShadow = '2px 1px #333'
     conditions4.innerHTML = forecast[25];
     conditions4.style.fontSize = '1.5rem';
     conditions4.style.color = '#ffffff';
     conditions4.style.textShadow = '2px 1px #333'

     info4.append(picture4);
     info4.append(today4);
     info4.append(conditions4);
     displayTemp4.append(temper4);
     
     }

   });
           
    
} 


