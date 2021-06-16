const options = {
    cache: false,
    animateHistoryBrowsing: true
  };
const swup = new Swup(options);
swup.on('contentReplaced', hoverAnimation)
swup.on('contentReplaced', test)

try {
    test();
} catch (error) {
    console.log(error);
}

function test () {
    const btns = document.querySelectorAll('.button');
    console.log(btns);
    for(let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', () => {
            console.log(btns[i]);
            let overlay = document.querySelector('.big_overlay');
            if(overlay.classList.contains("invisible")) {
                console.log("invisible");
                overlay.classList.replace("invisible", "visible");
            } else {
                overlay.classList.add("visible");
            }
        });
        document.querySelector('.close_overlay').addEventListener('click', () => {
            let overlay = document.querySelector('.big_overlay');
            //overlay.style.display = "block";
            if(overlay.classList.contains("visible")) {
                console.log("visible");
                overlay.classList.replace("visible", "invisible");
            }
            //overlay.classList.toggle("visible")
        })
    }
    // btns.addEventListener('click', () => {
    // //document.querySelector('button').addEventListener('click', () => {
    //     //document.querySelector('.try').innerHTML = "kikooo";
    //     console.log(btns[i]);
    //     let overlay = document.querySelector('.big_overlay');
    //     if(overlay.classList.contains("invisible")) {
    //         console.log("invisible");
    //         overlay.classList.replace("invisible", "visible");
    //     } else {
    //         overlay.classList.add("visible");
    //     }
    //     //overlay.style.display = "block";
    //     //overlay.classList.toggle("visible")
    // })
    // document.querySelector('.close_overlay').addEventListener('click', () => {
    //     let overlay = document.querySelector('.big_overlay');
    //     //overlay.style.display = "block";
    //     if(overlay.classList.contains("visible")) {
    //         console.log("visible");
    //         overlay.classList.replace("visible", "invisible");
    //     }
    //     //overlay.classList.toggle("visible")
    // })
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
                //tl.to(pieces[i], {
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
                //tl.to(pieces[i], {
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

// const options = {
//     cache: false,
//     animateHistoryBrowsing: true
//   };
// const swup = new Swup(options);
// swup.on('contentReplaced', hoverAnimation)
//swup.on('contentReplaced', test)
//swup.on('willReplaceContent', hoverAnimation);
//section projets
// document.querySelector(".main-container__projets").addEventListener('mouseover', (e)=> {
//     const tl = gsap.timeline(); 
//     tl.to(".projet__piece", 
//     {
//         top: "50%", 
//         left: "50%",
//         x: "-50%",
//         y: "-50%",
//         duration: .5,
//         opacity: 1,
//         scale: 1
//     });
//     tl.to(".projet__piece", 
//     {
//         scale: 3,
//         duration: .5,
//     });
// })
// document.querySelector(".main-container__projets").addEventListener('mouseout', (e)=> {
//     const tl = gsap.timeline();
//     gsap.to(".projet__piece", 
//     //tl.to(".projet__piece", 
//     {   
//         scale: 1,
//         duration: .5,
//         delay: 0.5
//     });
//     const pieces = document.querySelectorAll('.projet__piece');
//     for(let i = 0; i < pieces.length; i++) {
//         gsap.to(pieces[i] , 
//         //tl.to(pieces[i], 
//         {
//            top: Math.random() * (300 - (-300)) + (-300),
//            left: Math.random() * (500 - (-500)) + (-500),
//            color: '#fff',
//            duration: .8,
//            opacity: 0.5,
//            scale: Math.random() * 2,
//            delay: 0.8
//         })
//     }
// })


// section about
// document.querySelector(".main-container__about").addEventListener('mouseover', (e)=> {
//     const tl = gsap.timeline(); 
//     tl.to(".about__piece", 
//     {
//         top: "50%", 
//         left: "50%",
//         x: "-50%",
//         y: "-50%",
//         duration: .8,
//         opacity: 1,
//         scale: 1
//     });
//     tl.to(".about__piece", 
//     {
//         scale: 3,
//         duration: .8,
//     });
// })

// document.querySelector(".main-container__about").addEventListener('mouseout', (e)=> {
//     gsap.to(".about__piece", 
//     {   
//         scale: 1,
//         duration: .5,
//         delay: 1
//     });
//     const pieces = document.querySelectorAll('.about__piece');
//     for(let i = 0; i < pieces.length; i++) {
//         gsap.to(pieces[i] , {
//         //tl.to(pieces[i], {
//            top: Math.random() * (300 - (-300)) + (-300),
//            left: Math.random() * (500 - (-500)) + (-500),
//            color: '#fff',
//            duration: .8,
//            opacity: 0.5,
//            scale: Math.random() * 2,
//            delay: 1.5
//         })
//     }
// })




