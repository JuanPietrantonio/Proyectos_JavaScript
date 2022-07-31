class Pelicula {
    constructor(titulo, imagen, director, descripcion, link) {
        this.titulo = titulo;
        this.imagen = imagen;
        this.director = director;
        this.descripcion = descripcion;
        this.link = link;
    }
  }
  
  const pelicula1 = new Pelicula("The Godfather", "./img/TheGodfather.jpg", "Francis Ford Coppola", "Se retratan los inicios de la vida y la carrera de Vito Corleone en el Nueva York de los años 20, mientras su hijo, Michael, amplía y refuerza su control sobre el sindicato del crimen familiar.", "https://www.youtube.com/watch?v=UaVTIH8mujA")
  const pelicula2 = new Pelicula("The Prestige", "./img/ThePrestige.jpg", "Christopher Nolan", "Tras un trágico accidente, dos magos en el Londres de 1890 se enfrentan para crear la ilusión definitiva, mientras sacrifican todo lo que tienen para superar al otro.","https://www.youtube.com/watch?v=RLtaA9fFNXU")
  const pelicula3 = new Pelicula("Whiplash", "./img/Whiplash.jpg", "Damien Chazelle", "Un joven y prometedor batería se inscribe en un competitivo conservatorio donde sus sueños de grandeza son guiados por un instructor que no se detiene ante nada para realizar el potencial de su estudiante.","https://www.youtube.com/watch?v=7d_jQycdQGo")
  
  const peliculas = []
  
  peliculas.push(pelicula1);
  peliculas.push(pelicula2);
  peliculas.push(pelicula3);
  
  function mostrarPeliculas(peliculas) {
  
    const contenedorDePeliculas = document.getElementById("contenedor-de-peliculas"); //<div id="contenedor-de-peliculas"></div>
    contenedorDePeliculas.innerHTML = "";
    // por cada uno
    peliculas.forEach(pelicula => {
      const divPelicula = document.createElement("div");
      divPelicula.classList.add("pelicula");
      divPelicula.innerHTML = `
        <img src="${pelicula.imagen}" alt="${pelicula.titulo}">
        <h3>${pelicula.titulo}</h3>
        <p>Director: ${pelicula.director}</p>
        <a href="${pelicula.link}">Ver Trailer</a>
      `;
      contenedorDePeliculas.appendChild(divPelicula);
    })
  }
  
  mostrarPeliculas(peliculas);