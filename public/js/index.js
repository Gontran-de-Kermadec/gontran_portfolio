const options = {
    cache: false,
    animateHistoryBrowsing: true,
    //disableIE: true
  };
const swup = new Swup(options);
swup.on('contentReplaced', hoverAnimation)
swup.on('contentReplaced', overlayAnimation)

try {
    overlayAnimation();
} catch (error) {
    console.log(error);
}

function overlayAnimation () {
    const btns = document.querySelectorAll('.project__button');
    const overlay = document.querySelectorAll('.project__big-overlay');
    for(let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', () => {
            if(overlay[i].classList.contains("invisible")) {
                overlay[i].classList.replace("invisible", "visible");
            } else {
                overlay[i].classList.add("visible");
            }
        });
        document.querySelectorAll('.close__overlay')[i].addEventListener('click', () => {
            if(overlay[i].classList.contains("visible")) {
                overlay[i].classList.replace("visible", "invisible");
            }
        })
    }
}




function hoverAnimation () {
    console.log('changement');
    //section projets
    if(document.querySelector(".main-container__projets")) {
        document.querySelector(".main-container__projets").addEventListener('mouseover', (e)=> {
            const tl = gsap.timeline(); 
            tl.to(".projet__piece", 
            {
                top: "50%", 
                left: "50%",
                x: "-50%",
                y: "-50%",
                duration: .5,
                opacity: 1,
                scale: 1
            });
            tl.to(".projet__piece", 
            {
                scale: 3,
                duration: .5,
            });
        })
        document.querySelector(".main-container__projets").addEventListener('mouseout', (e)=> {
            gsap.to(".projet__piece", 
            {   
                scale: 1,
                duration: .5,
                delay: .2
            });
            const pieces = document.querySelectorAll('.projet__piece');
            for(let i = 0; i < pieces.length; i++) {
                gsap.to(pieces[i] , {
                   top: Math.random() * (300 - (-300)) + (-300),
                   left: Math.random() * (500 - (-500)) + (-500),
                   color: '#fff',
                   duration: .8,
                   opacity: 0.5,
                   scale: Math.random() * 2,
                   delay: .7
                })
            }
        })
    }
    // section about
    if(document.querySelector(".main-container__about")) {
        document.querySelector(".main-container__about").addEventListener('mouseover', (e)=> {
            const tl = gsap.timeline(); 
            tl.to(".about__piece", 
            {
                top: "50%", 
                left: "50%",
                x: "-50%",
                y: "-50%",
                duration: .5,
                opacity: 1,
                scale: 1
            });
            tl.to(".about__piece", 
            {
                scale: 3,
                duration: .5,
            });
        })

        document.querySelector(".main-container__about").addEventListener('mouseout', (e)=> {
            gsap.to(".about__piece", 
            {   
                scale: 1,
                duration: .5,
                delay: .2
            });
            const pieces = document.querySelectorAll('.about__piece');
            for(let i = 0; i < pieces.length; i++) {
                gsap.to(pieces[i] , {
                top: Math.random() * (300 - (-300)) + (-300),
                left: Math.random() * (500 - (-500)) + (-500),
                color: '#fff',
                duration: .8,
                opacity: 0.5,
                scale: Math.random() * 2,
                delay: .7
                })
            }
        })
    }
}
hoverAnimation();
const pieces = document.querySelectorAll('.piece');
for(let i = 0; i < pieces.length; i++) {
    pieces[i].addEventListener('mouseover', (e)=> {
        e.stopPropagation();
    })
    pieces[i].addEventListener('mouseout', (e)=> {
        e.stopPropagation();
    })
}