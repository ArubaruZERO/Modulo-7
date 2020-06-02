
// SECTION IBAN----------------------------------------------------------------

// =============================================================================
// CASO 1------ COMPROBAR IBAN-----------------------
// =============================================================================
const pattern = /([ES]{2}\d{2})(\d{4})(\d{4})(\d{2})(\d{10})/;
const values = ["ES6600190020961234567890"];


values.forEach(value =>{ 
    console.log("Regex matchs with" + value + "? ->", pattern.test(value));
});

// =============================================================================
// CASO 2------ COMPROBAR IBAN con espacios-----------------------
// =============================================================================

const pattern = /([ES]{2}\d{2})\s?(\d{4})\s?(\d{4})\s?(\d{2})\s?(\d{10})/;
const values = ["ES6600190020961234567890"];

values.forEach(value =>{ 
    console.log("Regex matchs with" + value + "? ->", pattern.test(value));
});


// =============================================================================
// CASO 3------ Extraer del IBAN pais y numero de control-----------------------
// =============================================================================

const pattern = /([ES]{2}\d{2})\s?(\d{4})\s?(\d{4})\s?(\d{2})\s?(\d{10})/;
const values = ["ES6600190020961234567890"];

values.forEach(value =>{ 
    console.log("Regex matchs with" + value + "? ->", pattern.exec(value));
});




// SECTION Matricula----------------------------------------------------------------

// =============================================================================
// CASO 1------ Validar matricula-----------------------
// =============================================================================

const pattern = /(\d{4})([\s\-\_\.])?([A-Z]{3})/;
const values = ["2021 GMD" , "2345-GMD" , "4532BDB" , "0320-AAA" ];

values.forEach(value =>{ 
    console.log("Regex matchs with" + value + "? ->", pattern.test(value));
});


// =============================================================================
// CASO 2------ Extraer parte numerica y las letras-----------------------
// =============================================================================

const pattern = /(\d{4})([\s\-\_\.])?([A-Z]{3})/;
const values = ["2021 GMD" , "2345-GMD" , "4532BDB" , "0320-AAA" ];

values.forEach(value =>{ 
    console.log("Regex matchs with" + value + "? ->", pattern.exec(value));
});




// SECTION --------OPCIONALES


// =============================================================================
// CASO 1------De una sola linea extraer el contenido de src----------------------
// =============================================================================

const pattern = /<img[^>]+src=[^>]*>/g
const values = ["<img src=https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png/>"]

values.forEach(value =>{ 
    console.log("Regex matchs with" + value + "? ->", pattern.exec(value));
});


// =============================================================================
// CASO 2------De un html extraer  src----------------------
// =============================================================================


const pattern = /<img[^>]+src=[^>]*>/gm
const html = `
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

const pattern =/^([512345]{2}[\d]{2})([\.\-\s])?(\d{4})([\.\-\s])?(\d{4})([\.\-\s])?(\d{4})/
const values= ["5299 6400 0000 0000", "5299-6400-0000-0000", "5299640000000000"]
values.forEach(value =>{ 
    console.log("Regex matchs with" + value + "? ->", pattern.test(value));
});


// =============================================================================
// CASO 2------------Vamos a extraer en 4 digitos
// =============================================================================



const pattern =/^([512345]{2}[\d]{2})([\.\-\s])?(\d{4})([\.\-\s])?(\d{4})([\.\-\s])?(\d{4})/
const values= ["5299 6400 0000 0000", "5299-6400-0000-0000", "5299640000000000"]
values.forEach(value =>{ 
    console.log("Regex matchs with" + value + "? ->", pattern.exec(value));
});
