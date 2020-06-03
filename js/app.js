
// SECTION IBAN----------------------------------------------------------------

// =============================================================================
// CASO 1------ COMPROBAR IBAN-----------------------
// =============================================================================
var pattern = /([ES]{2}\d{2})(\d{4})(\d{4})(\d{2})(\d{10})/;
var values = ["ES6600190020961234567890"];


values.forEach(value =>{ 
    console.log("Regex matchs with" + value + "? ->", pattern.test(value));
});

// =============================================================================
// CASO 2------ COMPROBAR IBAN con espacios-----------------------
// =============================================================================

var pattern = /([ES]{2}\d{2})\s?(\d{4})\s?(\d{4})\s?(\d{2})\s?(\d{10})/;
var values = ["ES6600190020961234567890"];

values.forEach(value =>{ 
    console.log("Regex matchs with" + value + "? ->", pattern.test(value));
});


// =============================================================================
// CASO 3------ Extraer del IBAN pais y numero de control-----------------------
// =============================================================================

var pattern = /([ES]{2}\d{2})\s?(\d{4})\s?(\d{4})\s?(\d{2})\s?(\d{10})/;
var values = ["ES6600190020961234567890"];

values.forEach(value =>{ 
    console.log("Regex matchs with" + value + "? ->", pattern.exec(value));
});




// SECTION Matricula----------------------------------------------------------------

// =============================================================================
// CASO 1------ Validar matricula-----------------------
// =============================================================================

var pattern = /(\d{4})([\s\-\_\.])?([A-Z]{3})/;
var values = ["2021 GMD" , "2345-GMD" , "4532BDB" , "0320-AAA" ];

values.forEach(value =>{ 
    console.log("Regex matchs with" + value + "? ->", pattern.test(value));
});


// =============================================================================
// CASO 2------ Extraer parte numerica y las letras-----------------------
// =============================================================================

var pattern = /(\d{4})([\s\-\_\.])?([A-Z]{3})/;
var values = ["2021 GMD" , "2345-GMD" , "4532BDB" , "0320-AAA" ];

values.forEach(value =>{ 
    console.log("Regex matchs with" + value + "? ->", pattern.exec(value));
});




// SECTION --------OPCIONALES


// =============================================================================
// CASO 1------De una sola linea extraer el contenido de src----------------------
// =============================================================================
var pattern = /<img[^>]+src=[^>]*>/g
var values = ["<img src=https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png/>"]

values.forEach(value =>{ 
    console.log("Regex matchs with" + value + "? ->", pattern.exec(value));
});


// =============================================================================
// CASO 2------De un html extraer  src----------------------
// =============================================================================


var pattern = /<img[^>]+src=[^>]*>/gm
var html = `
html>
 <body>
 <img
 src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"
 />
 <h1>ejemplo</h1>
 <img
 src="https://github.githubassets.com/images/modules/logos_page/GitHubMark.png"
 />
 </body>
</html>
`


console.log( html.match(pattern))




// SECTION -------- Validar sintaxis tarjeta de crédito

// =============================================================================
// CASO 1------------Vamos a validar los siguiente formatos (todos válidos)
// =============================================================================

var pattern =/^([51|52|53|54|55]{2}[\d]{2})([\.\-\s])?(\d{4})([\.\-\s])?(\d{4})([\.\-\s])?(\d{4})/
var values= ["5299 6400 0000 0000", "5299-6400-0000-0000", "5299640000000000"]
values.forEach(value =>{ 
    console.log("Regex matchs with" + value + "? ->", pattern.test(value));
});


// =============================================================================
// CASO 2------------Vamos a extraer en 4 digitos
// =============================================================================



var pattern =/^([51|52|53|54|55]{2}[\d]{2})([\.\-\s])?(\d{4})([\.\-\s])?(\d{4})([\.\-\s])?(\d{4})/
var values= ["5299 6400 0000 0000", "5299-6400-0000-0000", "5299640000000000"]
values.forEach(value =>{ 
    console.log("Regex matchs with" + value + "? ->", pattern.exec(value));
});
