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