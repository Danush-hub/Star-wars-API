// Fetch data from SWAPI 
fetch('https://swapi.dev/api/planets/?format=json')

  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })

  .then(data => {
    console.log(data);
    displayPlanets(data.results); 
  })

  .catch(error => {
    console.error('There is a problem in fetching operation:', error);
  });

//For Movies Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

// Function to show the current slide
function showSlide() {
  slides.forEach(slide => slide.style.display = 'none');
  slides[slideIndex].style.display = 'block';
}

// Function to change slide
function changeSlide(n) {
  slideIndex += n;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide();
}

// Show the first slide initially
showSlide();

// Automatic slideshow
setInterval(() => {
  changeSlide(1);
}, 3000);


// Display Planets
function displayPlanets(planets) {
  const planetsContainer = document.getElementById('planets-container');
  planets.forEach(planet => {
    const planetCard = document.createElement('div');
    
    planetCard.addEventListener('click', function() {
        
    });
    planetCard.classList.add('planet-card');
    
    planetCard.style.backgroundImage = `url('images/${planet.name.toLowerCase()}.png')`;
    planetCard.innerHTML = `
    <div class="planet-card-back">
      <p>Rotation Period: ${planet.rotation_period}</p>
      <p>Orbital Period: ${planet.orbital_period}</p>
      <p>Diameter: ${planet.diameter}</p>
      <p>Climate: ${planet.climate}</p>
      <p>Gravity: ${planet.gravity}</p>
      <p>Terrain: ${planet.terrain}</p>
      <p>Surface Water: ${planet.surface_water}</p>
      <div>
      <button class="residents-button" onclick="window.location.href = 'residents.html';">Residents</button>
      </div>
      
    </div>
    `;
    planetsContainer.appendChild(planetCard);
  });
}







