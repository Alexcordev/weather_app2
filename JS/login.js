$(document).ready(function () {
    $('a').mouseenter(function () { 
        $('#back').css('color', '#ffe066');
        
    });
    $('a').mouseleave(function () { 
     $('#back').css('color', '#ffffff');
    });
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
    showPrenom.style.color = '#333333';
    showPrenom.style.height = '20px';

    nom_session.append(showPrenom);

    setInterval(function(){
        var horloge = moment().format('h:mm:ss');
        clock.innerHTML = horloge;
         clock.style.fontSize = '40px';
         clock.style.color = '#333333';
          
    },1000);
    
    var display_clock = document.querySelector('#heures');
    var clock = document.createElement('h2');
    
    display_clock.append(clock);

    var posts = [
     {   titre: 'La météo se déchaine',
         date: 'Publié le' + ' ' + moment().date() + ' ' + moment().format('MMMM') + ' ' + moment().format('YYYY'), 
         contenu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras semper auctor neque vitae tempus quam pellentesque. Vestibulum sed arcu non odio euismod lacinia.'

    },
    {   titre: 'Vague de chaleur aux États-Unis',
    date: 'Publié le' + ' ' + moment().date() + ' ' + moment().format('MMMM') + ' ' + moment().format('YYYY'),
    contenu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras semper auctor neque vitae tempus quam pellentesque. Vestibulum sed arcu non odio euismod lacinia.'

    },
    {   titre: 'Tempête tropicale au sud des Caraïbes',
    date: 'Publié le' + ' ' + moment().date() + ' ' + moment().format('MMMM') + ' ' + moment().format('YYYY'),
    contenu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras semper auctor neque vitae tempus quam pellentesque. Vestibulum sed arcu non odio euismod lacinia.'

    },

    {   titre: 'Changements climatiques',
    date: 'Publié le' + ' ' + moment().date() + ' ' + moment().format('MMMM') + ' ' + moment().format('YYYY'),
    contenu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras semper auctor neque vitae tempus quam pellentesque. Vestibulum sed arcu non odio euismod lacinia.'

    },

    ];

    posts.forEach((item, index) => {
        var post = `
            <article class="post">
            <h2 style="text-shadow: 1px 1px 2px #000000;color:#ffffff; font-size: 30px; font-weight: bold">${item.titre}</h2>
            <span style="text-shadow: 1px 1px 2px #000000;font-size: 20px; color: #ffd11a; font-weight: bold;" class="date">${item.date}</span>
            <p style="color: #333333">
                ${item.contenu}
            </p>
            <a style="color: #ffffff; background-color: #0066ff; padding: 10px; border: 2px #ffffff solid" href="#" class="button-more">Détails</a>
            </article>
        `;
        $('#posts').append(post);
    });

          
    $('#logout').click(function(){
        localStorage.clear();
        window.location.href = "http://localhost/weather_app2/login.html";
    });
   
   
}
