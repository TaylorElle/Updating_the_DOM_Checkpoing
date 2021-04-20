import "./styles.css";

/**
  Write the addheadings() function here
*/

function addHeadings() {
  //find all the articles
  const articles = document.querySelectorAll("article");
  //loop through the articles
  for (let article of articles) {
    //get the inner text of the article and name it content
    let content = article.innerText;
    //change the HTML and add <h2> to the content of each article
    article.innerHTML = `<h2>${content}</h2>`;
  }

  /*
  const body = document.querySelector(".container .articles");
  const newElement = document.createElement("h2");
  const headings = document.querySelectorAll("  article");
  //llop through the headings
  for (let i = 0; i < headings.length; i++) {
    //get inner text, change it, append it then append the all new one
    newElement.innerText = headings[i].innerText;
    //console.log(newElement);
    body.appendChild(newElement);
  }
  */
}

/**
  Write the styleTutorialsAndArticles() function here
*/
function styleTutorialsAndArticles() {
  //find the article section
  const articles = document.querySelectorAll("article");
  //loop through the article
  for (let article of articles) {
    //get the inner text of the article and name it content
    let content = article.innerText;
    //if the content includes the word: tutorial
    if (content.includes("Tutorial")) {
      //add the tutorial class list to it
      article.classList.add("tutorial");
    } else {
      //if the content doesnt include the word: tutorial
      //add the article classlist to it
      article.classList.add("article");
    }
  }
  /*
  //querySelector all the articles
  const body = document.querySelectorAll(".container .articles");
  const headings = document.querySelectorAll("  article");
  //loop through all the article elements
  for (let i = 0; i < headings.length; i++) {
    const article = headings[i].innerText;
    console.log(headings[i]);
    //if the article contains the word "tutorial", add the tutorial class
    if (article.includes("Tutorial")) {
      article.classList.add("tutorial");
      //otherwise add the article class
    } else article.classList.add("article");
  }
  */
}
/**
  Write the  function here!!
*/

function separateAllTutorials() {
  // get all the class articles
  const articles = document.querySelectorAll("article");
  //make a new array to hold the tutorials
  const tutorialArray = [];
  //loop through each article
  articles.forEach((article) => {
    //make a variable to get the content inside the article
    const content = article.innerText;
    //if that content includes tutorial
    if (content.toLowerCase().includes("tutorial")) {
      //push that article to the array
      tutorialArray.push(article);
      //and remove it from the articles class
      article.remove();
    }
  });
  // if that new array has a length that is greater than 0
  if (tutorialArray.length > 0) {
    //create a new section element
    const newElement = document.createElement("section");
    //add the tutorials class into that new element
    newElement.classList.add("tutorials");
    //loop through the array
    tutorialArray.forEach((tutorial) => {
      //and append each tutorial to the new element
      newElement.appendChild(tutorial);
    });
    //find the container class
    const container = document.querySelector(".container");
    //add the new element to the container it will add it to the very end of the container class
    container.appendChild(newElement);
  }

  /*
  const articles = document.querySelectorAll("article");
  //if no tutorials, dont create section
  //const filterArt = articles.filter(() => )
  //if there are tutorials, create section
  //loop through the articles in the articles class
  for (let article of articles) {
    console.log(article);
    let content = article.innerText;
    // if that articles has a class of tutorial
    if (content.includes("Tutorial")) {
      //remove it from the articles class
      //add it to the new tutorials class
    }
  }
*/
}
/**
  No need to edit the following
*/
function main() {
  addHeadings();
  styleTutorialsAndArticles();
  separateAllTutorials();
}

main();
