const navToggle = document.getElementById("toggle");
const menu = document.querySelector(".menu__ul");
const menuContainer = document.getElementById("menu");
//seleciona os filhos do menu
const menuItems = menu.querySelectorAll("*")
const body = document.body;
const home = document.getElementById("home-section");
const aboutMe = document.getElementById("about-me-section");
const content = document.querySelectorAll(".container");
//seleciona todas as seções que receberão a animação do estilo "fade-down"
const fadeDownItems = document.querySelectorAll(".fade-down > *");

const darkModeBtn = document.querySelector(".dark-mode-btn");
const darkModeItems = document.querySelectorAll(".dark-item")

//funcao para toggle mobile

navToggle.addEventListener("click", () => {
    if (menu.style.display === "none") {
      menu.style.display = "block";
      menu.style.transform = "translateX(0)";
      navToggle.classList.remove("fa-bars")
      navToggle.classList.add("fa-x")
    } else {
      menu.style.transform = "translateX(100%)";
      setTimeout(() => {
        menu.style.display = "none";
      }, 300); 
      navToggle.classList.remove("fa-x")
      navToggle.classList.add("fa-bars")
    }
  });
  
  //evento que invoca a funcao de toggleDarkMode
darkModeBtn.addEventListener("click", () => {
  toggleDarkMode()
})

function toggleDarkMode() {
    const isDarkMode = body.classList.contains('dark-mode');

    if (isDarkMode) {
      // Modo escuro ativo
      body.classList.remove('dark-mode');
      menuContainer.classList.remove('dark-mode');
      menuContainer.style.background = '#ffffff'
      aboutMe.style.backgroundImage = "linear-gradient(to bottom, #eaeaea, #eeeeee, #f2f2f2, #f6f6f6, #fafafa, #fcfcfc, #fdfdfd, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff)";
      home.style.backgroundImage = 'url(/assets/waves-bg.svg)';
      darkModeBtn.classList.remove("fa-lightbulb");
      darkModeBtn.classList.add("fa-moon");
      darkModeItems.forEach(element => {
          element.style.color = '#1d1d1d';
      });
      //evento para aplicar efeito hover durante darkmode via javascript
      menuItems.forEach(element => {
        element.addEventListener("mouseenter", () => element.style.color = "var(--primary-color)");
        element.addEventListener("mouseleave", () => element.style.color = "#1d1d1d");
      })
    }
      else {
        // Modo claro ativo
        body.classList.add('dark-mode');
        menuContainer.classList.add('dark-mode');
        menuContainer.style.background = '#000000';
        aboutMe.style.background = 'transparent';
        home.style.background = 'transparent';
        darkModeBtn.classList.remove("fa-moon");
        darkModeBtn.classList.add("fa-lightbulb");
        darkModeItems.forEach(element => {
            element.style.color = '#e6edf3';
        });
        menuItems.forEach(element => {
          element.addEventListener("mouseenter", () => element.style.color = "var(--primary-color)");
          element.addEventListener("mouseleave", () => element.style.color = "#e6edf3");
        })
    }
}


window.addEventListener("load",() => {
    fadeDownItems.forEach(element => {
        element.style.display= "none";
    })
})

// Função para verificar se a seção está visível no viewport
function isSectionVisible(section) {
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top <= windowHeight * 0.8;
  }
  
  // Adicione um evento de rolagem para verificar a visibilidade das seções
window.addEventListener("scroll", () => {
    fadeDownItems.forEach((element) => {
        if (isSectionVisible(element)) {
        fadeDown(element);
    }
});
});
  

//função que invoca o comportamento de fadeDown adicionando as classes 
function fadeDown(item) {
    item.classList.add("animate__animated");
    item.classList.add("animate__fadeInDown");
    item.style.display = "flex";
}