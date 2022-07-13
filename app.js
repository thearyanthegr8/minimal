const image = document.querySelector(".background");
const logo = document.querySelector("#logo");
const nav_links = document.querySelector(".nav-links");
const container = document.querySelector(".container");
const mouse = document.querySelector(".scroll");

const tl = new TimelineMax();

tl.fromTo(image, 1, { width: "75%" }, { width: "50%", ease: Power2.easeInOut })
  .fromTo(
    logo,
    1.2,
    { opacity: "0", x: "-40" },
    { opacity: "1", x: "0", ease: Power2.easeInOut },
    "-=1"
  )
  .fromTo(
    nav_links,
    1.2,
    { opacity: "0", x: "40" },
    { opacity: "1", x: "0", ease: Power2.easeInOut },
    "-=1"
  )
  .fromTo(
    container,
    1,
    { opacity: "0", y: "70" },
    { opacity: "1", y: "0", ease: Power2.easeInOut }
  )
  .fromTo(
    mouse,
    1,
    { opacity: "0", y: "-70" },
    { opacity: "1", y: "0", ease: Power2.easeInOut },
    "-=1"
  );
