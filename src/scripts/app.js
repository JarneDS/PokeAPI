"use strict";

window.onload = function () {
    fetch('https://web.mayfly.ovh/proxy/pokeapi.php?endpoint=pokemon/ditto').then(function (response) {
      return response.json();
    })
};