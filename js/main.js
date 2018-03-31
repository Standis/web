
var game, aktuality, akordy;
game = '<div w3-include-html="http://standik.cz/game.html"></div>';
aktuality = '<div w3-include-html="http://standik.cz/aktuality/aktuality.html"></div>';
akordy = '<div w3-include-html="http://standik.cz/akordy/akordy.html"></div>';

/*Include html script*/
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};
/*Zmena obsahu na hlavni stranku*/
function nav_switch_main() {
  document.getElementById("mp_body").innerHTML = aktuality + game + akordy;
  includeHTML();
};

/*Zmena obsahu na stranku aktualit*/
function nav_switch_aktuality() {
  document.getElementById("mp_body").innerHTML = aktuality;
  includeHTML();
};

/*Zmena obsahu na herni stranku*/
function nav_switch_game() {
  document.getElementById("mp_body").innerHTML = game;
  includeHTML();
};

/*Zmena obsahu na akordy stranku*/
function nav_switch_akordy() {
  document.getElementById("mp_body").innerHTML = akordy;
  includeHTML();
};

/*Zmena selected*/

$(document).ready(function () {
  $('button').on('click', function(){
    alert('test');
    $('button.nav_selected').removeClass('nav_selected');
    $(this).addClass('nav_selected')
  });
});

