/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Show menu */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Hide menu */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll(".nav__link, .nav__contact");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== HOME TEXT CIRCULAR ===============*/
const homeText = document.getElementById("home-text"),
  letters = homeText.textContent.trim().split(""),
  angleStep = 360 / letters.length;

homeText.textContent = "";

letters.forEach((char, i) => {
  const span = document.createElement("span");
  span.textContent = char;
  span.style.transform = `rotate(${i * angleStep}deg)`;
  homeText.appendChild(span);
});

/*=============== HOME TYPED JS ===============*/
const typedHome = new Typed("#home-typed", {
  strings: ["Welcome guys...👋"],
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 2000,
  loop: true,
});

/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  window.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== SWIPER WORK ===============*/
const swiperWork = new Swiper(".work__swiper", {
  loop: false,
  spaceBetween: 24,
  grabCursor: true,
  speed: 600,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    1150: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
});

/*=============== SWIPER ACHIEVEMENT ===============*/
const swiperAchievement = new Swiper(".achievement__swiper", {
  loop: false,
  spaceBetween: 24,
  grabCursor: true,
  speed: 600,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    1150: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
});

/*=============== CONTACT EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = async (e) => {
  e.preventDefault();
  try {
    // serviceID - templateID - #from - publicKey
    await emailjs.sendForm(
      "service_offzrbh",
      "template_yqa2f0g",
      "#contact-form",
      "XzxpFpK9zX7fV17bl",
    );
    // show send message
    contactMessage.textContent = "Message sent successfully ✅";
    // clear input fields
    contactForm.reset();
  } catch (error) {
    // show error message
    contactMessage.textContent = "Message not sent (service error) ❌";
  } finally {
    // remove message after five seconds
    setTimeout(() => (contactMessage.textContent = ""), 5000);
  }
};
contactForm.addEventListener("submit", sendEmail);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  window.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]",
      );

    if (sectionsClass) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        sectionsClass.classList.add("active-link");
      } else {
        sectionsClass.classList.remove("active-link");
      }
    }
  });
};
window.addEventListener("scroll", scrollActive);
