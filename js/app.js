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

var firstForm     = document.getElementById('modal-form-section-one');
var secondForm    = document.getElementById('modal-form-section-two');
var showSubmitted = document.getElementById('show-submitted-data');

/**
 * Fields
 */
var titleField   = document.getElementById('title-anouncement');
var brandField   = document.getElementById('mark-brand');
var yearField    = document.getElementById('year');
var mileageField = document.getElementById('mileage');
var fuelField    = document.getElementById('fuel');
var colorField   = document.getElementById('color');

// Populate year
var yearNow = parseInt((new Date()).getFullYear());
for (var i=yearNow; i>= 1900; i--) {
    yearField.options[yearField.options.length] = new Option(i, i);
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


/**
 *  Validate first form
 */


/**
 * Validate second form
 */





var renderSecondForm = function() {
    //validate first form
    firstForm.classList.add('hidden');
    secondForm.classList.remove('hidden');
};


var initialSetup = function() {
    resetData();
    var titleField = document.getElementById('modal-form-section-one');
}

/**
 * Complete submission
 */
var completeSubmission = function() {
   // validate second form
   var collectedData = JSON.stringify(dataHolder);
   showSubmitted.innerHTML = '<br /> Collected Data => <br />' + collectedData;
   firstForm.classList.add('hidden');
   secondForm.classList.add('hidden');
   showSubmitted.classList.remove('hidden');
}



/**
 * Basic Modal actions
 */
var overlay = document.getElementById('overlay');

var openModal = function () {
	overlay.classList.remove("is-hidden");
}

var closeModal = function () {
	overlay.classList.add("is-hidden");
}



