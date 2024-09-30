
// *********** loading bar *************

const loadBar = (id, percent, duration) => {
  const bar = document.getElementById(`bar-${id}`);
  const percentageText = document.getElementById(`percent-${id}`);
  let currentPercent = 0;

  const interval = setInterval(() => {
    if (currentPercent <= percent) {
      bar.style.width = `${currentPercent}%`;
      percentageText.textContent = `${currentPercent}%`;
      currentPercent++;
    } else {
      clearInterval(interval);
    }
  }, duration);
};

// Load all bars
loadBar(65, 65, 10);
loadBar(75, 75, 10);
loadBar(90, 90, 10);
loadBar(100, 100, 10);

//****************** partners ******************

const carousel = document.querySelector(".partner-carousel");
const images = document.querySelectorAll(".partner-images");
let scrollAmount = 0;
let imageWidth = images[0].offsetWidth;
const totalImages = images.length;

// Clone all images and append them to the end for infinite scrolling
images.forEach((image) => {
  const clone = image.cloneNode(true);
  carousel.appendChild(clone);
});

// Function to auto-slide the carousel
function autoSlide() {
  imageWidth = images[0].offsetWidth; // Recalculate width on each slide to account for responsive changes
  scrollAmount += imageWidth; // Move the carousel left by one image width

  carousel.style.transform = `translateX(-${scrollAmount}px)`;

  // Reset the carousel to the beginning if we have scrolled past the original images
  if (scrollAmount >= imageWidth * totalImages) {
    setTimeout(() => {
      carousel.style.transition = "none"; // Temporarily disable transition
      scrollAmount = 0; // Reset scroll position
      carousel.style.transform = `translateX(0)`; // Jump back to the first image

      // Re-enable smooth transition after resetting position
      setTimeout(() => {
        carousel.style.transition = "transform 0.5s linear";
      }, 50);
    }, 500); // Timeout to wait until the scrolling finishes
  }
}

// Auto-scroll every 2 seconds continuously
setInterval(autoSlide, 2000);

// Adjust the carousel when the window is resized
window.addEventListener("resize", () => {
  imageWidth = images[0].offsetWidth; // Update image width on resize
  scrollAmount = 0; // Reset scroll amount
  carousel.style.transform = `translateX(0)`; // Jump back to the first image
});



// *********** Portfolio********

const myPortfolioItemContainer = document.getElementById(
  "my-portfolio-item-cards"
);
const theDropdownBtn = document.getElementById("my-portfolio");

const portfolioCard = {
  portfolioList: [
    {
      position: "Mac Book m2",
      image: {
        src: "images/computer1.jpg",
        alt: "laptop",
      },
    },
    {
      position: "Mac Book Y7",
      image: {
        src: "images/computer2.jpg",
        alt: "laptop",
      },
    },
    {
      position: "Sony TV",
      image: {
        src: "images/tv3.jpg",
        alt: "tv",
      },
    },
    {
      position: "Iphone 11 pro",
      image: {
        src: "images/phone1.jpg",
        alt: "phone",
      },
    },
    {
      position: "Iphone 13 pro",
      image: {
        src: "images/phone2.jpg",
        alt: "phone",
      },
    },
    {
      position: "LG 300p tv",
      image: {
        src: "images/tv1.jpg",
        alt: "tv",
      },
    },
    {
      position: "Sony P500u Tv",
      image: {
        src: "images/tv4.jpg",
        alt: "tv",
      },
    },
    {
      position: "Iphone 12 iPro",
      image: {
        src: "images/phone3.jpg",
        alt: "phone",
      },
    },
    {
      position: "Apple mini 200u",
      image: {
        src: "images/computer3.jpg",
        alt: "laptop",
      },
    },
    {
      position: "LG E300 TV",
      image: {
        src: "images/tv2.jpg",
        alt: "tv",
      },
    },
    {
      position: "Iphone 15 pro",
      image: {
        src: "images/phone4.jpg",
        alt: "phone",
      },
    },
    {
      position: "Apple Air",
      image: {
        src: "images/computer4.jpg",
        alt: "laptop",
      },
    },
  ],
};

Object.freeze(portfolioCard);
const { portfolioList } = portfolioCard;

const theSetPortfolioCards = (arr = portfolioList) => {
  myPortfolioItemContainer.innerHTML = arr
    .map(
      ({ position, image }) =>
        `<div class="portfolio-item">
      <div class="portfolio-item-image">
        <img src="${image.src}" alt="${image.alt}"/>
      </div>

      <div class="portfolio-item-description">
        <p> ${position}</p>
      </div>
    </div>`
    )
    .join("");
};

theDropdownBtn.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    myPortfolioItemContainer.innerHTML = "";

    switch (e.target.value) {
      case "laptop":
        theSetPortfolioCards(
          portfolioList.filter(
            (portfolioSi) => portfolioSi.image.alt === "laptop"
          )
        );
        break;

      case "tv":
        theSetPortfolioCards(
          portfolioList.filter((portfolioSi) => portfolioSi.image.alt === "tv")
        );
        break;

      case "phone":
        theSetPortfolioCards(
          portfolioList.filter(
            (portfolioSi) => portfolioSi.image.alt === "phone"
          )
        );
        break;

      default:
        theSetPortfolioCards();
        break;
    }
  }
});

// ******************testimony************

let myCustomerTestimony = document.querySelectorAll(".my-customer-testimony");
let nextTestimony = document.querySelector(".nextTestimony");
let prevTestimony = document.querySelector(".prevTestimony");
let dotsTestimony = document.querySelectorAll(".dotTestimony");
var counterTestimony = 0;

// Code for nextTestimony button
nextTestimony.addEventListener("click", slideNextTestimony);
function slideNextTestimony() {
  myCustomerTestimony[counterTestimony].style.animation =
    "nextQ1 0.5s ease-in forwards";
  if (counterTestimony >= myCustomerTestimony.length - 1) {
    counterTestimony = 0;
  } else {
    counterTestimony++;
  }
  myCustomerTestimony[counterTestimony].style.animation =
    "nextQ2 0.5s ease-in forwards";
  indicatorsTestimony();
}

// Code for prevTestimony button
prevTestimony.addEventListener("click", slidePrevTestimony);
function slidePrevTestimony() {
  myCustomerTestimony[counterTestimony].style.animation =
    "prevQ1 0.5s ease-in forwards";
  if (counterTestimony == 0) {
    counterTestimony = myCustomerTestimony.length - 1;
  } else {
    counterTestimony--;
  }
  myCustomerTestimony[counterTestimony].style.animation =
    "prevQ2 0.5s ease-in forwards";
  indicatorsTestimony();
}

// Auto sliding
function autoSlidingTestimony() {
  deletInterval = setInterval(timer, 10000);
  function timer() {
    slideNextTestimony();
    indicatorsTestimony();
  }
}
autoSlidingTestimony();

// Stop auto sliding when mouse is over
const containerTestimony = document.querySelector(".all-testimony-container");
containerTestimony.addEventListener("mouseover", function () {
  clearInterval(deletInterval);
});

// Resume sliding when mouse is out
containerTestimony.addEventListener("mouseout", autoSlidingTestimony);

// Add and remove activeTestimony class from the indicatorsTestimony
function indicatorsTestimony() {
  for (i = 0; i < dotsTestimony.length; i++) {
    dotsTestimony[i].className = dotsTestimony[i].className.replace(
      " activeTestimony",
      ""
    );
  }
  dotsTestimony[counterTestimony].className += " activeTestimony";
}

// Add click event to the indicator
function switchTestimony(currentTestimony) {
  currentTestimony.classList.add("activeTestimony");
  var testimonyId = currentTestimony.getAttribute("attr");
  if (testimonyId > counterTestimony) {
    myCustomerTestimony[counterTestimony].style.animation =
      "nextQ1 0.5s ease-in forwards";
    counterTestimony = testimonyId;
    myCustomerTestimony[counterTestimony].style.animation =
      "nextQ2 0.5s ease-in forwards";
  } else if (testimonyId == counterTestimony) {
    return;
  } else {
    myCustomerTestimony[counterTestimony].style.animation =
      "prevQ1 0.5s ease-in forwards";
    counterTestimony = testimonyId;
    myCustomerTestimony[counterTestimony].style.animation =
      "prevQ2 0.5s ease-in forwards";
  }
  indicatorsTestimony();
}
document.querySelectorAll(".dotTestimony").forEach(function (element) {
  element.addEventListener("click", function () {
    switchTestimony(this);
  });
});


//************  fag **********

document.addEventListener("DOMContentLoaded", function () {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      answer.classList.toggle("open"); // Toggle the 'open' class for smooth transition

      // Toggle active class for styling
      this.classList.toggle("active");

      // Change text color to orange when active
      if (this.classList.contains("active")) {
        this.style.color = "#ff9100";
      } else {
        this.style.color = ""; // Reset to default color when not active
      }

      // Toggle arrow icon direction (CSS will handle the rotation)
      const arrowIcon = this.querySelector("i");
      if (this.classList.contains("active")) {
        arrowIcon.classList.remove("fa-angle-right");
        arrowIcon.classList.add("fa-angle-down");
      } else {
        arrowIcon.classList.remove("fa-angle-down");
        arrowIcon.classList.add("fa-angle-right");
      }
    });
  });
});
