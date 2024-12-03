if (document.getElementById('quiz-form'))
document.getElementById('quiz-form').addEventListener('submit', function (event) {
	
    event.preventDefault(); 

    // Az eredmények tárolása dictionaryben és eredménymeghatározás
    const results = {
        ferrari: 0,
        rollsroyce: 0,
        lamborghini: 0,
        astonmartin: 0
    };

   
    const answers = new FormData(event.target);
    for (const [question, answer] of answers.entries()) {
        results[answer] += 1; 
    }

    
    let recommendedBrand = '';
    let maxPoints = 0;
    for (const [brand, points] of Object.entries(results)) {
        if (points > maxPoints) {
            maxPoints = points;
            recommendedBrand = brand;
        }
    }

    const brandLinks = {
        ferrari: 'ferrari.html',
        rollsroyce: 'rollsroyce.html',
        lamborghini: 'lamborghini.html',
        astonmartin: 'astonmartin.html'
    };


    const resultContainer = document.createElement('div');
    resultContainer.className = 'result-container'; 
    resultContainer.innerHTML = `
        <h3>Ajánlott autómárka: ${recommendedBrand.charAt(0).toUpperCase() + recommendedBrand.slice(1)}</h3>
        <a href="${brandLinks[recommendedBrand]}" target="_self">További információ itt</a>`;


    // Eredmény külön containerbe
    const quizContainer = document.querySelector('.quiz-container');
    const existingResult = document.querySelector('.result-container');
    if (existingResult) {
        existingResult.remove(); 
    }
    quizContainer.appendChild(resultContainer);
});



//Képgaléria


let slideIndex = 0; 

function showSlides(n) {
	
    let slides = document.getElementsByClassName("slide");
	
    if (n >= slides.length) {
        slideIndex = 0; 
    } else if (n < 0) {
        slideIndex = slides.length - 1; 
    } else {
        slideIndex = n;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex].style.display = "block";  
	
}
function plusSlides(n) {
    showSlides(slideIndex += n);
}


document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);  
});