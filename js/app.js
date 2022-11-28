const aside = document.querySelector(".aside");
const navToggler = document.querySelector(".nav-toggler");
const allSection = document.querySelectorAll(".section");
const hireMe = document.querySelector(".hire-me");
const totalSection = allSection.length;

function asideSectionTogglerBtn() {
    const icon = document.querySelector('.icon');
   const text = document.querySelector('.spanIcon');

  if (icon.classList.contains('fa-bars')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }

    aside.classList.toggle("open");
    navToggler.classList.toggle("open");
    for(let i=0; i<totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

  hireMe.addEventListener("click", function() {
        const sectionIndex = this.getAttribute("data-section-index");
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);  
      })


navToggler.addEventListener("click", () => {
    asideSectionTogglerBtn() ;
})

      
    //   typing animation
var typed = new Typed(".typing", {
    strings: [" an Enthusiastic Dev ❤️"," a Front-End Developer💻 ","a Software Developer 🌐","a ReactJS|React Native Dev📱 "],
    typeSpeed:100,
    backSpeed:100,
    loop:true
})
// aside
const nav = document.querySelector(".nav"),
      navList = document.querySelectorAll("li"),
      totalNavList = navList.length;
      
    function removeBackSection() {
        for(let i=0; i<totalSection; i++) {
            allSection[i].classList.remove("back-section");
        }
    }
   function addBackSection(num) {
    allSection[num].classList.add("back-section");
   }

for(let i = 0; i < totalNavList; i++) {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function() 
        {
            for(let j=0; j<totalNavList; j++)
            {
                removeBackSection();
                if(navList[j].querySelector("a").classList.contains("active")) {
                    addBackSection(j);
                }
                navList[j].querySelector("a").classList.remove("active");
                this.classList.add("active"); 
              showSection(this);
              
              if(window.innerWidth < 1200) {
                asideSectionTogglerBtn();  
            }
            }
        })
        
      }
      function showSection(element) {
        for(let i=0; i<totalSection; i++) {
            allSection[i].classList.remove("sectionactive");
        }
        const target = element.getAttribute("href").split("#")[1];
         document.querySelector("#" + target).classList.add("sectionactive");
      }

      function updateNav(element) {
        for(let i=0; i<totalNavList; i++) {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
                navList[i].querySelector("a").classList.add("active");
            }
        }
      }
   