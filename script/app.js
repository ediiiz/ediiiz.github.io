var memegifs = [
    "https://media.tenor.com/images/03cef0f42c2b67f320036ecd948bea53/tenor.gif",
    "https://th.bing.com/th/id/R3523ecafa370a80d8535bbb306a3e407?rik=YgWBsQxbvVaBIQ&pid=ImgRaw",
    "https://media.tenor.com/images/a7d93b6bdb7c3d3f076cbb177d614d23/tenor.gif"
];

var gif = document.querySelector("img");
var counter = 0;
var memebtn = document.querySelector("button").addEventListener("click", function(){
    if (counter === memegifs.length){
        counter = 0;
    }
    gif.src = memegifs[counter]
    counter++;
});