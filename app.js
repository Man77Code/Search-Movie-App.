let api = "https://www.omdbapi.com/?apikey=61e576a4&t=";

let title = document.getElementById("title");
let date = document.getElementById("date");
let directorElement = document.getElementById("director");
let actors = document.getElementById("actors");
let genre = document.getElementById("genre");
let desc = document.getElementById("desc");
let collection = document.getElementById("collection");
let awards = document.getElementById("awards");
let writer = document.getElementById("writer");
let ratings = document.getElementById("ratings");
let img = document.getElementById("img");


let container = document.getElementById('container');
container.classList.add(d-none)

function searchMovie() {
  let movieName = document.getElementById("movieName");
  let query = api + movieName.value;
  // console.log(query)
  fetch(query)
    .then((data) => {
      return data.json();
      //   console.log(data)
    })
    .then((data) => {
      //   console.log(data);
      container.classList.remove('d-none');
      title.innerText = data.Title;
      date.innerText = data.Released;
      directorElement.innerText = data.Director;
      actors.innerText = data.Actors;
      genre.innerText = data.Genre;
      desc.innerText = data.Plot;
      collection.innerText = data.BoxOffice;
      awards.innerText = data.Awards;
      ratings.innerText = data.imdbRating;
      writer.innerText = data.Writer;
      img.src = data.Poster;
    });
}
