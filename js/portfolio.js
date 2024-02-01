// var showAll = document.getElementById("Show All");
// var frontEnd = document.getElementById("FRONT-END");
// var backEnd = document.getElementById("BACK-END");
// var html5 = document.getElementById("HTML5");
// var css = document.getElementById("CSS");
// var javascript = document.getElementById("JAVASCRIPT");
// var php = document.getElementById("PHP");
// var mysql = document.getElementById("MYSQL");

/// Obtén todos los elementos de la lista y las tarjetas
var filterItems = document.querySelectorAll('.filters-list li');
var cardItems = document.querySelectorAll('.card');

// Añade un evento de click a cada elemento de la lista
filterItems.forEach(function(item) {
  item.addEventListener('click', function() {
    // Obtén el valor del id del elemento de la lista clickeado
    var filterValue = this.id.toUpperCase();

    // Itera sobre cada tarjeta
    cardItems.forEach(function(card) {
      // Oculta todas las tarjetas por defecto
      card.style.display = 'none';

      // Usa un switch para manejar los diferentes casos de filtrado
      switch(filterValue) {
        case 'SHOW ALL':
          // Muestra todas las tarjetas
          card.style.display = 'block';
          break;
        case 'FRONT-END':
        case 'BACK-END':
        case 'HTML5':
        case 'CSS':
        case 'JAVASCRIPT':
        case 'PHP':
        case 'MYSQL':
          // Si la tarjeta tiene el atributo de datos correspondiente al valor del filtro
          if (card.dataset.category.toUpperCase().includes(filterValue)) {
            // Muestra la tarjeta
            card.style.display = 'block';
          }
          break;
      }
    });
  });
});

// Obtén todos los elementos <a> en el header
var navItems = document.querySelectorAll('header a');

// Añade un evento de click a cada elemento <a>
navItems.forEach(function(item) {
  item.addEventListener('click', function(event) {
    // Previene el comportamiento por defecto del click en un enlace
    event.preventDefault();

    // Usa un switch para manejar los diferentes casos de enfoque
    switch(this.id) {
      case 'sobre-mi':
        document.getElementById('acerca-de-mi').scrollIntoView();
        break;
      case 'habilidades':
        document.getElementById('SKILLS').scrollIntoView();
        break;
      case 'proyectos':
        document.getElementById('aplications').scrollIntoView();
        break;
    }
  });
});
