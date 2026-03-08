console.log("Script running");

const navbar = document.getElementsByClassName("navbar");

// console.log("Narbar", navbar);
// navbar[0].scrollTop
// navbar[0].clientHeight

// window.addEventListener("wheel", (event)=>{
//     if(event.deltaY < 0){
//         console.log("Scroll up...");
        // navbar[0].style.backgroundColor = "none";
//         // console.log(navbar[0].scrollHeight);

//     }
//     else if(event.deltaY > 0){
//         console.log("Scroll down...");
//         navbar[0].style.backgroundColor = "black";
//     }
//     else{
//         console.log("Scroll up...");
        
//     }

// });


// console.log(window)
// console.log(navbar[0].scrollTop);

// console.log(window.innerHeight);
// console.log(window.innerWidth);
// console.log(window.screenTop);
console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.scrollTop);
console.log(document.documentElement.scrollHeight);

window.addEventListener("scroll", ()=>{
    const {scrollHeight, scrollTop, clientHeight} = document.documentElement;

    if(document.documentElement.scrollTop > 10){
        // console.log("I am Scrolling");
        // navbar[0].style.backgroundColor = "black";
        // navbar[0].classList.toggle("backgrounds");
        navbar[0].classList.replace("background", "backgrounds")
    }else if(document.documentElement.scrollTop == 0){
        // console.log("I am not Scrolling");
        navbar[0].classList.replace("backgrounds", "background")
    }
    // if(scrollTop + clientHeight <= scrollHeight){
    //     console.log("I am at bottom");

    //     // showData();
    // }
    // else{
    //     console.log("I am at top");
    // }
    // if(window.pageYOffset > 100){
    //     console.log("Scooll up");
    //     navbar[0].style.backgroundColor = "black";
    // }
    // else{
    //     console.log("Scooll down");
    //     navbar[0].style.backgroundColor = "none";
    // }
    // else if( window.pageYOffset <= 0){
    //     console.log("Scooll down");
    //     navbar[0].style.backgroundColor = "none";
    // }
    // else{
    //     console.log("Scooll down");
    //     navbar[0].style.backgroundColor = "none";
    // }
});