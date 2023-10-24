// Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
// [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
// Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
// nome del tavolo, (tableName)
// nome dell'ospite,  (guestName)
// posto occupato. (place)
// Generiamo e stampiamo in console la lista per i segnaposto.

// creo array con i nomi
const tavoloVip =[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']




const segnaposto = tavoloVip.map((element, index) => {  

// return 'nome' +  element + '' + 'posto:' + index++
return {tableName:'tavoloVip',guestName:element,place:index +1}

});
console.log(segnaposto);

// ## SNACK 2
// Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
// 1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
// ES (Marco della Rovere => MARCO DELLA ROVERE);
// 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
// 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

// creo array studenti
const studenti =[
    {
        id: 213,
        name : 'Marco della Rovere',
        grades : 78
    },
    {
        id: 110,
        name : 'Paola Cortellessa',
        grades : 96
    },
    {
        id: 250,
        name : 'Andrea Mantegna',
        grades : 48
    },
    {
        id: 145,
        name : 'Gaia Borromini',
        grades : 74
    },
    {
        id: 196,
        name : 'Luigi Grimaldello',
        grades : 68
    },
    {
        id: 102,
        name : 'Piero della Francesca',
        grades : 50
    },
    {
        id: 120,
        name : 'Francesca da Polenta',
        grades : 84
    }
]
// Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
const upperName = studenti.map((el) =>{
  console.log(el.name.toUpperCase());
})
// Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
 
const goodStudent = studenti.filter((el) =>{
    return el.grades > 70;
})
console.log(goodStudent);

// Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

const superStudent = studenti.filter((el) =>{
    return el.grades > 70 && el.id > 120;
})

console.log(superStudent);


// SNACK 3
// A partire da un array di stringhe, crea un secondo array formattando le
// stringhe del primo array in minuscolo e con l’iniziale maiuscola.
// Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]


const disney =['pippo', 'pluto', 'paperino'];
   
console.log(disney);

const upEl = disney.map((element)=>{
   const sliceUp = element.charAt(0);
  return sliceUp.toUpperCase() + element.charAt();
 
});


// SNACK 4
// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:
// Crea un nuovo array con la lista dei mammiferi.
// [
//  { nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ },
//  { nome: ‘cane’, famiglia: ‘canidi’, classe: ‘mammiferi’ },
//  { nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ },

const animals = [
   {
    nome: 'gatto',
    famiglia: 'felini',
    classe: 'mammiferi'
   },
   {
    nome: 'cane',
    famiglia: 'canidi',
    classe: 'mammiferi'
   },
   {
    nome: 'pettirosso',
    famiglia: 'volatili',
    classe: 'uccelli'
   }
];

const mamAnimals = animals.filter((el) => {
    return el.classe === 'mammiferi';
    
});
console.log(mamAnimals);
