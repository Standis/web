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

function nav_switch_main() {
  var game, aktuality;
  game = '<div w3-include-html="http://standik.cz/game.html"></div>';
  aktuality = '<div w3-include-html="http://standik.cz/aktuality/aktuality.html"></div>';
  document.getElementById("mp_body").innerHTML = aktuality + game;
  alert = aktuality + game;
};

function nav_switch_game() {
  document.getElementById("mp_body").innerHTML = game;
};
