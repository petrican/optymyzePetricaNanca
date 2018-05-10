// This info could be from an XHR but for this is only for demo purposes
var carData =
[
 {
    "name": "-- Select a brand --",
    "img": ""
 },
 {
    "name": "Alfa Romeo",
    "img": "alfa.png"
 },
 {
    "name": "Audi",
    "img": "audi.png"
 },
 {
    "name": "Bmw",
    "img": "bmw.png"
 },
 {
    "name": "Fiat",
    "img": "fiat.png"
 },
 {
    "name": "Toyota",
    "img": "toyota.png"
 },
 {
    "name": "Volkswagen",
    "img": "vw.png"
}];


var dataHolder = {};

var resetData = function() {
    dataHolder = {
        title: null,
        brand: null,
        year: null,
        mileage: null,
        fuel: null,
        color: null,
        damaged: null,
        damage_details: null,
        price: null,
        currency: null,
        description: null
    };
}

// Populate year
var yearSelect = document.getElementById('year');
var yearNow = parseInt((new Date()).getFullYear());
for (var i=yearNow; i>= 1900; i--) {
    yearSelect.options[yearSelect.options.length] = new Option(i, i);
}


// Populate dropdown with data
var markBrand = document.getElementById('mark-brand');
carData.forEach( function (item) {
    markBrand.options[markBrand.options.length] = new Option(item.name, item.name);
});


// Update the image on change
var updateImage = function(autoItem) {
    var placeholderToUpdate = document.getElementById('brand-image');
    if (autoItem.value == '-- Select a brand --') {
        placeholderToUpdate.innerHTML = '';
        return;
    }
    carData.forEach( function (item) {
      if( autoItem.value === item.name) {
          placeholderToUpdate.innerHTML = '<img src="images/' + item.img + '">';
      }
    });
};

// Update the color
var updateColor = function(colorField) {
    var selectedColor = document.getElementById('selected-color');
    selectedColor.style.backgroundColor = colorField.value;
    console.log(colorField.value);
};

var renderSecondForm = function() {
    console.log('Here');
    var firstForm  = document.getElementById('modal-form-section-one');
    var secondForm = document.getElementById('modal-form-section-two');
    firstForm.classList.add('hidden');
    secondForm.classList.remove('hidden');
};


var initialSetup = function() {
    resetData();
    var titleField = document.getElementById('modal-form-section-one');
}


// get overlay
var overlay = document.getElementById('overlay');

var openModal = function () {
	overlay.classList.remove("is-hidden");
}

var closeModal = function () {
	overlay.classList.add("is-hidden");
}



