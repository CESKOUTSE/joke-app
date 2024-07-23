//alert("je te recois");

// https://api.blablagues.net/?rub=blagues

/*
premiere chose à faire quand on veut travailler avec une API est de la prendre et mettre dans google. Pour voir les choses joliment, utilisez le plugin json viewer

Maintenant , notre blague se trouve dans data: content

on peut maintenant aller la chercher en js
*/

/*
On va donc aller chercher notre blague comme on l'a fait tout à l'heure
*/

/*fetch("https://api.blablagues.net/?rub=blagues")
  .then((res) => res.json())
  .then((res) => console.log(res.data.content.text_head));*/

/*
  Maintenant on part pointer les choses sur le dom
  */
const header = document.getElementById("header");
const content = document.getElementById("content");

/*console.log(header);
console.log(content);*/

/*
on va donner le text des blagues à nos éléments pointés
*/

/*fetch("https://api.blablagues.net/?rub=blagues")
  .then((res) => res.json())
  .then((res) => {
    header.textContent = res.data.content.text_head;
    content.textContent =
      res.data.content.text !== ""
        ? res.data.content.text
        : res.data.content.text_hidden;
  });*/

/*
  On va mettre notre logique dans une fonction
  */

/*const getJoke = () => {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((res) => {
      header.textContent = res.data.content.text_head;
      content.textContent =
        res.data.content.text !== ""
          ? res.data.content.text
          : res.data.content.text_hidden;
    });
};


// ensuite on appelle notre fonction
getJoke();

// on cree un élément au click sur le body
document.body.addEventListener("click", getJoke);*/

/*
Ensuite, on va faire le destructuring. Avec le code du haut, on peut remplacer "res.data.content" par une variable

1- creer la variable: joke = res.data.content;
2- selectionner le premier endroit ou vous voyez res.data.content, ensuite faites ctrl + D jusqu'a tous les autres soient sélectionnés et ecrivez joke
*/
const getJoke = () => {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((res) => {
      joke = res.data.content;
      header.textContent = joke.text_head;
      content.textContent = joke.text !== "" ? joke.text : joke.text_hidden;
    });
};

// ensuite on appelle notre fonction
getJoke();

// on cree un élément au click sur le body
document.body.addEventListener("click", getJoke);
