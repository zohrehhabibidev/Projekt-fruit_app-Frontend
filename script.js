let fruits = [];

function init() {
    fetchData();
}

async function fetchData() {
    let response = await fetch('http://127.0.0.1:8000/fruits/');
    let responseAsJson = await response.json();
    fruits = responseAsJson.fruits;
    renderList();
}

function renderList() {
    console.log(fruits);
    let content = document.getElementById('content');
    for (let i = 0; i < fruits.length; i++) {
        const fruit = fruits[i];
        content.innerHTML += /*html*/ `
            <li><strong>${fruit.name}</strong>: Gewicht - ${fruit.weight}g, Farbe - ${fruit.color}</li>
        `;
    }
}
