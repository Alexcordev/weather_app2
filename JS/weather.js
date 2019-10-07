window.addEventListener('load', ()=> {
    var long;
    var lat;

    var showTitre = document.querySelector('#nomVille');
    var showTemp = document.querySelector('#temperature');
    var showDesc = document.querySelector('#description');
    var chancePluie = document.querySelector('#pluie');
    


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
          long = position.coords.longitude;
          lat = position.coords.latitude;
          const proxy = 'https://cors-anywhere.herokuapp.com/';
          const api = 'https://api.darksky.net/forecast/';
          const key = '15d02a7aeb0978cca357e4932f1d4d83';
          const lang = 'lang=fr';
          const units = 'units=si'
          const link = proxy + api + key +  '/' + lat + ',' + long + '?' +lang + '&' + units ;
                
          fetch (link)
          .then(response =>{
              return response.json();
          })
          .then(data => {
              console.log(data);
            var currently = data.currently.temperature;
            var resume = data.currently.summary;
            var icon = data.currently.icon;
            var titre = data.timezone;
            var pluie = data.currently.precipProbability;
            
            var temp = document.createElement('h1');

            temp.innerHTML = Math.round(currently) + ' °C';
            temp.style.float = 'right';
            temp.style.fontSize = '80px';
            temp.style.marginRight = '10px';
            temp.style.marginTop = '40px';

            var desc = document.createElement('h2');

            desc.innerHTML = resume;
            desc.style.float = 'left';
            desc.style.marginLeft = '20px';
            desc.style.color = '#ffffff';

            var titreville = document.createElement('h2');
            titreville.innerHTML = titre;
            titreville.style.color = '#ffffff';
            titreville.style.float = 'right';
            titreville.style.margin = '10px 20px 20px 20px';
            titreville.style.textShadow = '2px 2px 4px #00004d';

            var precip = document.createElement('h2');
            precip.innerHTML = 'Risques de précipitations : ' + pluie + ' %';
            precip.style.color = '#ffffff';
            precip.style.float = 'left';
            precip.style.fontSize = '35px';
            precip.style.marginLeft = '20px';
            precip.style.textShadow = '2px 2px 4px #00004d';

            showTitre.append(titreville);
            showTemp.appendChild(temp);
            showDesc.appendChild(desc);
            chancePluie.append(precip);

            setIcons(icon, document.querySelector('.icon'));
        }); 
        
          
        });

        
    }
    function setIcons(icon, iconID) {
        const skycons = new Skycons ({color: 'white'});
        const currentIcon =  icon.replace(/-/g, '_').toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }

});



  

