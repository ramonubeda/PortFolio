/* Transitions */
/*window.sr = ScrollReveal();
sr.reveal('.right-transition', {
  duration: 3000,
  origin: 'right',
  distance: '-800px'
});*/

window.sr = ScrollReveal();
sr.reveal('.left-transition', {
  duration: 1500,
  origin: 'left',
  distance: '-700px'
});

window.sr = ScrollReveal();
sr.reveal('.bottom-transition', {
  duration: 5000,
  origin: 'bottom',
  distance: '-1px'
});

window.sr = ScrollReveal();
sr.reveal('.bottom-transitionmedium', {
  duration: 10000,
  origin: 'bottom',
  distance: '-1px'
});

window.sr = ScrollReveal();
sr.reveal('.bottom-transitionlong', {
  duration: 18000,
  origin: 'bottom',
  distance: '-1px'
});

/*window.sr = ScrollReveal();
sr.reveal('.bottom-transitionrolling', {
  duration: 3000,
  origin: 'bottom',
  distance: '-300px'
});*/

window.sr = ScrollReveal();
sr.reveal('.top-transition', {
  duration: 5000,
  origin: 'top',
  distance: '-1px'
});








/* SLIDER*/
const artistData = {
	active: 0,
	artists: [
		{
			name: "Mis Proyectos",
			description: `En la actualidad estoy desarrollando varios proyectos relacionados con la cocina y la programación web. Consisten en un Manual con Recetario diseñado para cualquier persona que quiera aprender o afianzar conocimientos sobre Cocina y basados en mis conocimientos, distintos cursos específicos, investigación, recopilación de datos y en mi experiencia laboral durante más de diez años a nivel profesional.`,
      spotify: {
				profileUrl:
					"",
				embedUrl:
					""
			},
			backgroundUrl: "../IMG/projects/proyexto.jpeg"
		},
		{
			name: "La Compra",
			description: `Una gestión eficiente de la compra, recepción del pedido, almacenamiento y conservación garantiza la frescura y seguridad de los ingredientes, optimiza los costos y minimiza el desperdicio.
`,
			spotify: {
				profileUrl:
					"",
				embedUrl:
					""
			},
			backgroundUrl: "../IMG/projects/2-compra.jpeg"
		},
		{
			name: "La Base",
			description: `Conocer y dominar los utensilios de cocina, operaciones previas de los alimentos, tipos de corte, métodos de cocción, fondos y técnicas en cocina es esencial, ayudan a mejorar la eficiencia en la cocina y aseguran una preparación segura y profesional de los alimentos.`,
			spotify: {
				profileUrl:
					"",
				embedUrl:
					""
			},
			backgroundUrl: "../IMG/projects/1-manual.jpeg"
		},
		{
			name: "El Control",
			description: `La gestión eficaz del Control de costes, Inventarios, Escandallos y Fichas técnicas es fundamental para el éxito de cualquier cocina profesional. Estos procesos aseguran la sostenibilidad financiera del negocio al optimizar los recursos y maximizar la rentabilidad.`,
			spotify: {
				profileUrl:
					"",
				embedUrl:
					""
			},
			backgroundUrl: "../IMG/projects/3-escandallo.jpeg"
		},
		{
			name: "La Creatividad",
			description: `La confección de platos, cartas y menús es una tarea compleja que requiere una combinación de habilidades culinarias, conocimiento de gestión, comprensión del mercado y las preferencias del cliente. Un buen diseño y gestión de la oferta culinaria mejora la experiencia del cliente, optimiza la rentabilidad, minimiza el desperdicio y asegura la sostenibilidad del negocio a largo plazo.`,
			spotify: {
				profileUrl:
					"",
				embedUrl:
					""
			},
			backgroundUrl: "../IMG/projects/4-confeccion.jpeg"
		},
		{
			name: "Recetario",
			description: `Recetas de cocina internacional por tipos de dietas. Cada dieta gastronómica refleja la diversidad cultural y geográfica, con variaciones en ingredientes, técnicas de preparación y perfiles de sabor.`,
			spotify: {
				profileUrl:
					"",
				embedUrl:
					""
			},
			backgroundUrl: "../IMG/projects/5-recetario.jpeg"
		}
	]
};

function nextSlide() {
	if (artistData.active < artistData.artists.length - 1) {
		artistData.active += 1;
	}
}

function prevSlide() {
	if (artistData.active > 0) {
		artistData.active -= 1;
	}
}

// Assuming the artistData object and functions from the previous code

document.addEventListener("DOMContentLoaded", function () {
	const artistList = document.getElementById("artist-list");

	// Populate the artist list
	artistData.artists.forEach((artist, i) => {
		const li = document.createElement("li");
		li.style.backgroundImage = `url(${artist.backgroundUrl})`;
		li.className = artistData.active === i ? "active" : "";

		li.addEventListener("click", function () {
			artistData.active = i;
			updateActiveSlide();
		});

		const h3 = document.createElement("h3");
		h3.textContent = artist.name;

		const sectionContent = document.createElement("div");
		sectionContent.className = "section-content";
		const inner = document.createElement("div");
		inner.className = "inner";

		const bio = document.createElement("div");
		bio.className = "bio";
		const h2 = document.createElement("h2");
		h2.textContent = artist.name;
		const p = document.createElement("p");
		p.textContent = artist.description;

		const spotifyLink = document.createElement("a");
		spotifyLink.href = artist.spotify.profileUrl;
		spotifyLink.target = "_blank";
		spotifyLink.className = "artist-profile-link";
		const spotifyImg = document.createElement("img");
		spotifyImg.src = "https://images.vexels.com/content/129503/preview/boiling-pot-on-fire-6ce47d.png";
		spotifyImg.alt = "Cocinateló";
		spotifyImg.width = 100;
		spotifyImg.height = 100;
		spotifyImg.loading = "lazy";

		spotifyLink.appendChild(spotifyImg);
		bio.appendChild(h2);
		bio.appendChild(p);
		bio.appendChild(spotifyLink);
		inner.appendChild(bio);
		sectionContent.appendChild(inner);
		li.appendChild(h3);
		li.appendChild(sectionContent);
		artistList.appendChild(li);
	});

	function updateActiveSlide() {
		const listItems = artistList.querySelectorAll("li");
		listItems.forEach((li, index) => {
			li.className = artistData.active === index ? "active" : "";
		});
	}
});