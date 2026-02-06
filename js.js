/* STAP 1 */
// Maak een .json bestand met daarin enkele gegevens (studenten, boeken, films, etc)
// Zorg dat het een geldige JSON-structuur heeft (zie voorbeeld)


/* STAP 2 */
// Maak een javascript-bestand waarin je gebruik maakt van de functie fetch om het JSON-bestand in te lezen
// Log met behulp van een loop de gegevens in het bestand naar de console (tip: forEach)

// const doSomething = async (url) => {
//   const response = await fetch(url);
//   const data = await response.json();
//
//   data.studenten.forEach(student => {
//     console.log(student)
//     const ulElement = document.getElementById("js-students");
//     const liElement = document.createElement('li');
//     liElement.append(`Naam: ${student.naam}, Leeftijd:, ${student.leeftijd}, Specialisatie:, ${student.specialisatie}`)
//
//     ulElement.appendChild(liElement);
//   })
// }
//
// doSomething("pt-studenten.json")


const ulElement = document.getElementById("js-students");

const fetchData = async () => {
  const response = await fetch('pt-studenten.json');
  const data = await response.json();
  return data;
}

const createStudentItems = async () => {
  const data = await fetchData()
  data.studenten.forEach(student => {
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);

    for(const info in student) {
      liElement.innerHTML += ` <b>${info}:</b> ${student[info]}<br>`;
    }
  })
}
createStudentItems()
fetchData()

// Log met behulp van een loop de gegevens in het bestand naar de console (tip: forEach)

/* Stap 3 */
// Maak een boilerplate html-bestand die je een <h1> en een lege <ul> heeft
// Pas de iteratie met de loop in het script aan zodat er voor elk opgehaald gegeven een nieuwe li in een ul wordt aangemaakt met daarin de data
// TIPS
// const ulElement = document.querySelector('ul')
// data.forEach( item => {} )
// const liElement = document.createElement('li')
// ulElement.appendChild(liElement)





