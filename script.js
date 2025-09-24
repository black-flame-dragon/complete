//----- Back To Top Button -----//
	const backToTopBtn = document.getElementById("backToTopBtn");

  	window.onscroll = function () {
    	if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      		backToTopBtn.style.display = "block";
    	} 
    	else {
      		backToTopBtn.style.display = "none";
    	}
  	};

  	function scrollToTop() {
    	window.scrollTo({ top: 0, behavior: 'smooth' });
  	}

//----- Fade In Animation -----//
	const faders = document.querySelectorAll('.fade-in');

		const observer = new IntersectionObserver((entries, observer) => {
	    	entries.forEach(entry => {
	      		if (entry.isIntersecting) {
	        		entry.target.classList.add('visible');
	        		observer.unobserve(entry.target); // Optional: fade only once
	      		}
			});
	  	}, {
	    	threshold: 0.1,
	  	});

	  	faders.forEach(fader => {
	    	observer.observe(fader);
	  	});

//----- Navbar -----//
	function toggleMenu() {
    	const navLinks = document.querySelector('.nav-links');
    		navLinks.classList.toggle('active');
  }

//----- Gallery -----//
	function toggleGallery() {
    	const gallery = document.getElementById("hiddenGallery");
    	const btn = document.querySelector(".toggle-btn");
    		gallery.classList.toggle("show");

    	btn.textContent = gallery.classList.contains("show") ? "Show Less" : "Show More";
  	}

//----- Testimonials -----//
  	function scrollSlider(direction) {
      	const slider = document.getElementById("testimonialSlider");
      	const scrollAmount = 320;
      		slider.scrollBy({
        		left: direction * scrollAmount,
        		behavior: "smooth"
      		});
    }

//----- Footer -----//
	document.getElementById("year").textContent = new Date().getFullYear();