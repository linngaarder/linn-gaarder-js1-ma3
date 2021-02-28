const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".container");

async function getGames() {

    try {

    const response = await fetch(url);

    const data = await response.json();

    const facts = data.results;

    resultsContainer.innerHTML = "";

for (let i = 0; i < facts.length; i++) {
    console.log(facts[i].name);
    console.log(facts[i].rating);
    console.log(facts[i].tags.length)

    if (i === 8) {
        break;
    }

    resultsContainer.innerHTML += `<div class="result">Name: ${facts[i].name}</div>` +
                                  `<div class="result">Rating: ${facts[i].rating}</div>` +
                                  `<div class="result">Tags: ${facts[i].tags.length}</div>`
                                

    }
    }
    catch(error) {
        console.log("something went wrong");
        resultsContainer.innerHTML = "Error: something went wrong"
    }
}

getGames();