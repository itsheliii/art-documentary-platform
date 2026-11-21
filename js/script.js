// ==========================================================
// main script
// ==========================================================

// 1. Find the element in the HTML that has id="year".
//    document.querySelector uses the same selectors as CSS ("#" = id).
const yearElement = document.querySelector("#year");

// 2. Ask JavaScript for today's date and take just the year (e.g. 2026).
const currentYear = new Date().getFullYear();

// 3. Put that year inside the element as text.
yearElement.textContent = currentYear;


// ------------------ Gallery -------------------------

const paintings = [
    { title: "Cottage on the Hill", image: "images/sample-painting.jpg", alt: "Cottage in a meadow", story: "A quiet home at the end of a summer path." },
    { title: "Painting Two",        image: "images/sample-painting.jpg", alt: "Cottage in a meadow", story: "Story coming soon." },
    { title: "Painting Three",      image: "images/sample-painting.jpg", alt: "Cottage in a meadow", story: "Story coming soon." },
];

// 2. find the empty gallery box.
const gallery = document.querySelector(".gallery-grid");

// for each painting, build a card and add it to the box
paintings.forEach(function(painting) {
    gallery.innerHTML += `
        <article class="art-card">
            <img src="${painting.image}" alt="${painting.alt}">
            <h3>${painting.title}</h3>
            <p>${painting.story}</p>
        </article>
    `;
});
