// 3. Create a web interface(styling not important) that queries the SWAPI
// API (Do not use the wrapper libraries) and displays a list of the Star Wars
// characters’ attributes(at least 3) in a table.When a user clicks on an
// element, they should be able to view all the details
// for the selected
// character.The user should be allowed to open a character’ s details in a
// new tab.
// The detail view should have a favorites feature where they can pick up to 5
// favorites from of the list.They should also be able to remove a character
// from their list of favorites.
// If a character is marked as a favorite, this should be indicated in the
// list view with a heart icon.

const app = document.getElementById("app");

const container = document.createElement('div');
container.setAttribute('class', 'container');

const ul = document.createElement('ul');
ul.setAttribute('class', 'characters');

container.append(ul);

app.appendChild(container);

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function fetchCharacters() {
    const url = 'https://swapi.co/api/people/';
    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            let characters = data.results;
            return characters.map(function(character) {
                let li = createNode('li'),
                    span = createNode('span');
                a = createNode('a');
                a.setAttribute('target', '_blank');
                span.innerHTML = `${character.name}`;
                xterurl = `${character.url}`
                a.href = 'character.html?' + xterurl;

                append(a, span);
                append(li, a);
                append(ul, li);
            })
        })
        .catch(function(error) {
            console.log(JSON.stringify(error));
        });
}

function fetchCharacter() {
    const url = getUrlVars()["url"];
    console.log(url);

}