function changeImage()
    {
    var img = document.getElementById("myImage");
    img.src = images[x];
    x++;

    if(x >= images.length){
        x = 0;
    }
   var timerid = setInterval(changeImage(), 1000);
}   }
var images = [], x = 0;
images[0] = "../img/banner.jpg";
images[1] = "../img/bicyclerack.jpg";
images[2] = "../img/mountain.jpg";
