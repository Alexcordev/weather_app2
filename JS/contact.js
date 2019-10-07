$('input').focus(function () {
    $(this).css('background', '#daffb3');
  });
$(document).ready(function () {
    
 
  $('input').blur(function () {
    $(this).css('background', '#ffffff');
  });
  $('textarea').focus(function () {
    $(this).css('background', '#daffb3');
  });

  $('textarea').blur(function () {
    $(this).css('background', '#ffffff');
  });

  // Lorsque l'évènement submit est déclenché une alerte qui contient les données de l'input nom est affichée 

  $('#form').submit(function (e) {
    e.preventDefault();
    var nom = $('input#nom').val();
    alert("J'ai bien reçu votre message " + nom + " Merci !");
  });

});