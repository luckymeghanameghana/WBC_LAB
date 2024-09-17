let data = [];
const fetchMovies = async () => {
  let response = await fetch("https://api.jikan.moe/v4/anime");
  data = await response.json();
  data=data.data;
  makeDiv (data);
    };
    fetchMovies();
    
    const searchMovie = () => {
      let search = document.getElementById("movieName");
      let searchValue=search.value.toLowerCase();
      console.log(searchValue);
      const MovieList=data.filter((movie) =>
        movie.title.toLowerCase().includes(searchValue)
    );
    console.log(MovieList);
    makeDiv(MovieList);
  }
    
  const makeDiv = (data) => {
    const moviesDiv = document.getElementById("movies");
    console.log(data);
    moviesDiv.innerHTML = "";
    const MovieList = data
      .map((movie) => {
        return `
          <div class="movie-card"> <!-- Updated class name -->
            <img src="${movie.images.jpg.image_url}" alt="No image" />
            <h2>${movie.title}</h2>
            <p>Score: ${movie.score}</p> <!-- Display the movie score here -->
          </div>`;
      })
      .join(" ");
    moviesDiv.innerHTML = MovieList;
  };
  
      const sortAsec = () => {
        let sortedMovies = [...data]; 
        sortedMovies.sort((a, b) => a.score - b.score); 
        makeDiv(sortedMovies); 
      };
      
      const sortDsec = () => {
        let sortedMovies = [...data]; 
        sortedMovies.sort((a, b) => b.score - a.score); 
        makeDiv(sortedMovies); 
      };
    
    

    
    

