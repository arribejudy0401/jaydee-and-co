"use strict";

// navbar
const toggle = document.querySelector(".toggle-btn");
toggle.addEventListener("click", ()=>{
    const header = document.querySelector(".main-header");
    const toggleBtn = document.querySelector(".toggle-btn");
    header.classList.toggle("open");
    toggleBtn.classList.toggle("open");
})

// sections
const sections = document.querySelectorAll("section");
const desc = document.querySelector(".carousel-desc.desc-1");
const categories = document.querySelector(".shop-section h2");
const featured = document.querySelector(".featured-products h2");
const contact = document.querySelector(".contact-title h2");

const options = {
    threshold: 0.1,
}

let observer = new IntersectionObserver(navScroll, options);

function checkCurrentSection (condition, value, animation){
    if (condition) {
      value.style.setProperty("animation", animation);
    } else {
      value.removeAttribute("style");
    }
}

function navScroll(entries){
    entries.forEach(function (entry){
        const sectionName = entry.target.id;
        const activeLink = document.querySelector(
          `[data-link="${sectionName}"]`
        );
        
        if(sectionName === "home"){
            checkCurrentSection(
              entry.isIntersecting,
              desc,
              "easeInAnimation 3s"
            );
        }

        if(sectionName === "shop"){
            checkCurrentSection(
              entry.isIntersecting,
              categories,
              "categoryAnimation 3s"
            );
        }

        if(sectionName === "featured"){
            checkCurrentSection(
              entry.isIntersecting,
              featured,
              "featuredAnimation 2s"
            );
        }

        if(sectionName === 'contact'){
            checkCurrentSection(
              entry.isIntersecting,
              contact,
              "contactAnimation 1s"
            );
        }
    })
}

sections.forEach((section)=>{
    observer.observe(section);
})

// smooth scroll
const links = document.querySelectorAll(".main-header * a");
const footerLinks = document.querySelectorAll(".footer-links * a");

links.forEach((link)=>{
    const href = link.getAttribute("href");
    link.addEventListener("click", () => {
        const scroll = new SmoothScroll(`.main-header a[href = "${href}"]`, {speed:700});
    })
})

footerLinks.forEach((footer)=>{
    const href = footer.getAttribute("href");
    footer.addEventListener("click", () => {
        const scroll = new SmoothScroll(`.footer-links a[href = "${href}"]`, {speed:700});
    })
})