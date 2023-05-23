function toggleDisplay(element) {
    var style = window.getComputedStyle(element);
    if (style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

var cardapioBtn = document.getElementById('cardapioBtn');
var navbar = document.querySelector('.navbar');

cardapioBtn.addEventListener('click', function() {
    toggleDisplay(navbar);
});

var clickPizzaBtn = document.getElementById('clickPizzaBtn');
var opctionFood = document.querySelector('.opctionFood');

clickPizzaBtn.addEventListener('click', function() {
    toggleDisplay(opctionFood);
});

var clickPastelBtn = document.getElementById('clickPastelBtn');
var opctionFood02 = document.querySelector('.opctionFood02');

clickPastelBtn.addEventListener('click', function() {
    toggleDisplay(opctionFood02);
});

var clickCoxinhaBtn = document.getElementById('clickCoxinhaBtn');
var opctionFood03 = document.querySelector('.opctionFood03');

clickCoxinhaBtn.addEventListener('click', function() {
    toggleDisplay(opctionFood03);
});

var clickEmpadaBtn = document.getElementById('clickEmpadaBtn');
var opctionFood04 = document.querySelector('.opctionFood04');

clickEmpadaBtn.addEventListener('click', function() {
    toggleDisplay(opctionFood04);
});



function fecharAnuncio() {
    var anuncio = document.getElementById("menu");
    anuncio.style.display = "none";
}
