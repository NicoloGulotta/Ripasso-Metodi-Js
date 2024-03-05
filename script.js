const apiUrl = "https://jsonplaceholder.typicode.com/photos";
const container = document.getElementById("box");
let params = new URL(document.location).searchParams;
let name = params.get("");

async function ApriUrl() {
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    data.forEach((element) => {
      createPost(element);
    });
  } catch (error) {
    console.log(error);
  }
}

function createPost(data) {
  const image = document.createElement("img");
  image.src = data.thumbnailUrl;
  container.appendChild(image);
}
ApriUrl();

//ripasso serach params
// Creare un oggetto URL con una query string
var url = new URL("https://www.example.com/page?param1=value1&param2=value2");
//creo logetto URLsearchPrams
var searchParams = url.searchParams;
//.get chiedo uno specifico parametro
var param1Value = searchParams.get("param1");
console.log(param1Value);
// Aggiungo un o più parametri
searchParams.append("param3", "value3");
// Ottengo la nuova query string
var newQueryString = url.searchParams.toString();
console.log(newQueryString);



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//dichiaro il nuovo arrey fitrato e definisco le condizioni di filtraggio
let numPari = numbers.filter(function (numbers) {
  return numbers % 2 === 0;
});
console.log(numPari);




// moltiplicare ogni numrero x2(map)
let numx2 = numbers.map(function (numbers) {
  return numbers * 2;
});
console.log(numx2);



// somma di tutti i numeri arrey (reduce)
let sumNum = numbers.reduce(function (somma,numbers) {
  return somma + numbers
},0);
console.log(sumNum);

//arrey utenti
const utenti = [
  {
    id: 1,
    nome: 'Nicolò',
    cognome: 'Gulotta',
    eta: 25,
    citta: 'Agrigento'
  },
  {
    id: 2,
    nome: 'Maria',
    cognome: 'Rossi',
    eta: 14,
    citta: 'Roma'
  },
  {
    id: 3,
    nome: 'Luca',
    cognome: 'Bianchi',
    eta: 22,
    citta: 'Milano'
  }
];
console.log(utenti);

// filtrare solo utenti maggiorenni (filter)
let maggiorenni = utenti.filter(function (utenti) {
  return utenti.eta > 18
})
console.log(maggiorenni);


// mappare l'array creando una nuova proprietà dell'oggetto che è la concatenazione del nome + cognome
// (es. nomeCompleto: 'Nicolò Gulotta')
let newArrey = utenti.map(function (utenti) {
  const { nome, cognome, ...resto } = utenti;
  return {
    nomeCompleto :utenti.nome + ' ' + utenti.cognome,
    ...resto
  };
});
console.log(newArrey);


// trovre l'utente con id 1 (find)
const utente = utenti.find(function(utenti) {
  return utenti.id === 1;

});
console.log(utente);
