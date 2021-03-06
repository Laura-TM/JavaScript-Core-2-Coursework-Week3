/*
================
Exercise 2
----------
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates an <li> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4 - **Extra**
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3

Prefer to work on a codepen? https://codepen.io/makanti/pen/MWwMgmW?editors
================
*/
const movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];

// create showMovies function
function showMovies() {
  let allMovies = document.querySelector("#all-movies");
  // Antigoni's example
  allMovies.innerHTML = "";
  movies.forEach((movie) => {
    let li = document.createElement("li");
    li.textContent = `Movie title: ${movie.title} by director: ${movie.director}`;
    allMovies.appendChild(li);
  });
  // My own iteration example
  // for (let movie of movies) {
  //   let li = document.createElement("li");
  //   li.innerText = `${movie.title} by ${movie.director}`;
  //   allMovies.appendChild(li);
  // }
  let newMovieAddition = (document.querySelector("#movies-number").innerText =
    movies.length); // you can avoid storing it in a variable if you are not using it afterwards
}
showMovies();

// create a new movie object for your favorite movie
const myNewFavMovie = {
  title: "Interstellar",
  director: "Christopher Nolan",
  type: "sci-fi",
  haveWatched: true,
};

// create addMovies function
function addMovie(movie, callback) {
  setTimeout(function () {
    movies.push(movie);
    callback();
  }, 2000);
}

// addMovie(myNewFavMovie);
// If you print out the array of movies you have, you will see the length of the array increased by one
// But it is not displayed, because it has not been added to the previous showMovies()
// console.log("Updated movies: ", movies);

// Here is where the callback on line 93 will need to be introduced:
addMovie(myNewFavMovie, showMovies);

// create a form
const formEl = document.querySelector("#add-movies");
const titleEl = document.querySelector("#title");
const directorEl = document.querySelector("#director");
const typeEl = document.querySelector("#type");
const haveWatchedEl = document.querySelector("#haveWatched");
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const newMovie = {
    title: titleEl.value,
    director: directorEl.value,
    type: typeEl.value,
    haveWatched: haveWatchedEl.checked,
  };
  addMovie(newMovie, showMovies);
  //console.log(e.target); // e.target would focus on the whole form, so that's not going to work
});
