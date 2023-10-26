// Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
// [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
// Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
// nome del tavolo, (tableName)
// nome dell'ospite,  (guestName)
// posto occupato. (place)
// Generiamo e stampiamo in console la lista per i segnaposto.

// creo array con i nomi



const tavoloVip = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];



const segnaposto = [];
person = tavoloVip.map((element, index) => {


    return { tableName: 'tavoloVip', guestName: element, place: index + 1 }
});

console.log(segnaposto);
let place = 1
tavoloVip.forEach((element, index, array) => {
    array[index] = {
        tableName: 'tavoloVip',
        guestName: element,
        place: place
    }
    //  if (guest ==='Maneskin'){
    //     for(let i= 0; i < 3; i++){
    //         place++;
    //         array.push({
    //             tableName: 'tavoloVip',
    //              guestName: element,
    //               place: place
    //          })
    //     }
    //  }

})



// ## SNACK 2
// Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
// 1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
// ES (Marco della Rovere => MARCO DELLA ROVERE);
// 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
// 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

// creo array studenti
const studenti = [
    {
        id: 213,
        name: 'Marco della Rovere',
        grades: 78
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        grades: 96
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grades: 48
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        grades: 74
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grades: 50
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84
    }
]
// Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
const upperName = studenti.map((el) => {
    console.log(el.name.toUpperCase());
})
// Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70

const goodStudent = studenti.filter((el) => {
    return el.grades > 70;
})
console.log(goodStudent);

// Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

const superStudent = studenti.filter((el) => {
    return el.grades > 70 && el.id > 120;
})

console.log(superStudent);


// SNACK 3
// A partire da un array di stringhe, crea un secondo array formattando le
// stringhe del primo array in minuscolo e con l’iniziale maiuscola.
// Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]


const disney = ['pippo', 'pluto', 'paperino'];



const upEl = disney.map((element) => {
    const sliceUp = element.charAt(0);
    return sliceUp.toUpperCase() + sliceUp.slice(1);
});

console.log(upEl)

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

// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.
// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il
// nome e cognome e l’indicazione se può guidare, in base all’età.

const family = [
    {
        nome: 'Gina',
        cognome: 'Lollo',
        anni: 81
    },
    {
        nome: 'Primo',
        cognome: 'Ultimo',
        anni: 16
    },
    {
        nome: 'Felice',
        cognome: 'Povero',
        anni: 41
    },
    {
        nome: 'Assunta',
        cognome: 'Triste',
        anni: 34
    },

]

const people = family.map((element) => {

    let text;
    if (element.anni > 18) {
        text = 'può guidare';
    } else {
        text = 'non può guidare';
    }

    return `il componente con nome ${element.nome} e cognome ${element.cognome} e ${element.anni} ${text} `
});
console.log(people);


// ## SNACK 3
// Creare un array di oggetti:
// - Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// - Stampare in console la bici con peso minore utilizzando destructuring e template literal


// creare array bici da corsa

const bici = [
    {
        nome: 'Flash',
        peso: 7,
        image: 'bici-rossa.jpg'
    },
    {
        nome: 'Turbo',
        peso: 6,
        image: 'bici-turbo.jpg'
    },
    {
        nome: 'Giulietta',
        peso: 8,
        image: 'bici-giulietta.jpg'
    },
    {
        nome: 'Postino',
        peso: 9,
        image: 'bici-postino.jpg'
    }
];

console.log(bici)
const rowEl = document.querySelector('.row');
//ciclo finchè non trovo chi ha il peso minore
let biciLeggera;

for (let i = 0; i < bici.length; i++) {

    if (i === 0) biciLeggera = bici[i];

    if (bici[i].peso < biciLeggera.peso) {
        biciLeggera = bici[i];
    }
    printCol(bici)
};
const biciEl = document.getElementById('bici-da-corsa');
const { nome, peso, image } = biciLeggera;
function printCol(bikes) {
    const col = document.createElement("div");
    col.classList.add("col-6");
    const template = `        
        <div class=" col-6 card-bike text-center text-light p-3 d-flex flex-row align-content center ">
        <div class="col-6">
            <h4 class="text-uppercase text-light ">Nome Bici</h4>          
            <h3>${biciLeggera.nome} </h3>
            </div>
            <div class="col-6 card-body d-flex flex-column text-center text-light"> 
            <img class="bike-img" src="/img/${biciLeggera.image}" alt="">                                         
            <h4 class="p-3 text-light">peso: ${biciLeggera.peso}</h4>  
                    
            </div>
        </div>


    `
    col.innerHTML = template;
    rowEl.append(col);
}


let text;

text = ` Questa è la bici più leggera. Si chiama ${biciLeggera.nome} e pesa ${biciLeggera.peso} kg`;

biciEl.innerHTML = text;



// ## SNACK 4
// - Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// > Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Creare un array di oggetti di squadre di calcio.

const squadre = [
    {
        name: 'Bologna',
        punti: 0,
        falli: 0,
        picture: 'Logo_Bologna_FC_2018.svg.png',
        allenatore: 'Thiago Motta',
    },
    {
        name: 'Chievo',
        punti: 0,
        falli: 0,
        picture: 'chievo.png',
        allenatore: 'Michele Marcolini'
    },
    {
        name: 'Inter',
        punti: 0,
        falli: 0,
        picture: 'inter.png',
        allenatore: 'Simone Inzaghi'
    },
    {
        name: 'Milan',
        punti: 0,
        falli: 0,
        picture: 'Logo_of_AC_Milan.svg.webp',
        allenatore: 'Stefano Pioli'
    }
];

console.log(rowEl);





const classifica = squadre.map((element) => {
    const { name, punti, falli, picture, allenatore } = element;
    const obj = {
        name,
        punti,
        falli,
        picture,
        allenatore
    };

    // Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti
    obj.punti = getRndInteger(40, 75);
    obj.falli = getRndInteger(20, 60);
    // Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.  
    console.log(`la squadra ${name} ha totalizzato ${obj.falli} falli`);
    for (let i = 0; i < 1; i++) {
        printCol(obj[i])
    };
    function printCol(scudetto) {
        const col = document.createElement("div");
        col.classList.add("col-6");
        const template = `    
           <div id="football"> 
            <div class="card text-center col-3 text-light">
            <h3 class="text-uppercase text-light"> squadra</h3>
                <img class="card-img" src="/img/${obj.picture}" alt ="">
                <h3>${obj.name} </h3>
                    <div class="col-9 card-body d-flex flex-column stext-center text-light">                                               <h4 class="p-3 text-light">Allenatore: ${obj.allenatore}</h4>  
                        <h5 class="p-3 text-light">falli subiti ${obj.falli} </h5>
                    </div>
            </div>
            </div>
       
        `
        col.innerHTML = template;
        rowEl.append(col);
    }

});






// utility

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}