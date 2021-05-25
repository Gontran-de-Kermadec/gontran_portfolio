const pieces = document.querySelectorAll('.piece');
for(let i = 0; i < pieces.length; i++) {
    pieces[i].addEventListener('mouseover', (e)=> {
        e.stopPropagation();
    })
    pieces[i].addEventListener('mouseout', (e)=> {
        e.stopPropagation();
    })
}
//section projets
// document.querySelector(".main-container__projets").addEventListener('mouseover', (e)=> {
//     const tl = gsap.timeline(); 
//     tl.to(".projet__piece", 
//     {
//         top: "50%", 
//         left: "50%",
//         x: "-50%",
//         y: "-50%",
//         duration: .8,
//         opacity: 1,
//         scale: 1
//     });
//     tl.to(".main-container__projets .ten", 
//     {
//         scale: 3,
//         borderRadius: 10,
//         padding: 15
//     });
//     tl.to(".main-container__projets .ten", 
//     {
//         color: '#000',
//     });
// })
// document.querySelector(".main-container__projets").addEventListener('mouseout', (e)=> {
//     gsap.to(".main-container__projets .ten", 
//     {
//         color: '#fff',
//     });
//     gsap.to('.main-container__projets .ten', {
//             borderRadius: 50,
//             delay: .5
//     })
//     gsap.to(".projet__piece", 
//     {   
//         scale: 1,
//         duration: .5,
//         delay: .5
//     });
//     const pieces = document.querySelectorAll('.projet__piece');
//     for(let i = 0; i < pieces.length; i++) {
//         gsap.to(pieces[i] , {
//         //tl.to(pieces[i], {
//            top: Math.random() * (300 - (-300)) + (-300),
//            left: Math.random() * (500 - (-500)) + (-500),
//            color: '#fff',
//            duration: .8,
//            opacity: 0.5,
//            scale: Math.random() * 2,
//            delay: 0.8
//         })
//        console.log(Math.random() * (500 - (-500)) + (-500))
//     }
// })


// section about
document.querySelector(".main-container__about").addEventListener('mouseover', (e)=> {
    const tl = gsap.timeline(); 
    tl.to(".about__piece", 
    {
        top: "50%", 
        left: "50%",
        x: "-50%",
        y: "-50%",
        duration: .8,
        opacity: 1,
        scale: 1
    });
    // tl.to(".main-container__about .ten", 
    // {
    //     scale: 3,
    //     borderRadius: 10,
    //     padding: 15
    // });
    // tl.to(".main-container__about .ten", 
    // {
    //     color: '#000',
    // });
})

document.querySelector(".main-container__about").addEventListener('mouseout', (e)=> {
    // gsap.to(".main-container__about .ten", 
    // {
    //     color: '#fff',
    // });
    // gsap.to('.main-container__about .ten', {
    //         borderRadius: 50,
    //         delay: .5
    // })
    gsap.to(".about__piece", 
    {   
        scale: 1,
        duration: .5,
        delay: 1
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
           delay: 1.5
        })
       console.log(Math.random() * (500 - (-500)) + (-500))
    }
})


