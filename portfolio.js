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