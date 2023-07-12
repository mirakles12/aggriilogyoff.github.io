let myimage = document.getElementById("slideshow");
let image = ["images/1.png","images/2.png","images/3.jpg"];
let i = 0;

function slideshow(){
    myimage.setAttribute('src' , image[i]);
    if ( i == image.length - 1){
        i = 0 ;
    }else {
        i++;
    }
    setTimeout( function() {
        slideshow();
    }, 2000)
    myimage.style.background = ' linear-gradient(rgba(0,0,0,0.5) , rgba(0,0,0,0.5))';
}

slideshow();