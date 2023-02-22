[
"https://ih0.redbubble.net/image.654323521.5931/flat,1000x1000,075,f.u5.jpg",
"https://wallpaperchain.com/download/doge/doge-wallpaper-43.jpg",
"https://wallpaperchain.com/download/doge/doge-wallpaper-33.jpg",
"https://www.linkpicture.com/q/LPic63f4ec5b6d4d9573020817.jpg",
"https://wallsbazar.com/wp-content/uploads/2021/11/Meme-Backgrounds-Photos.jpg",
"https://wallpaperaccess.com/full/7804705.jpg",
"https://www.linkpicture.com/q/WallpaperDog-796021.png",
"https://wallpaperchain.com/download/meme/meme-funny-wallpaper-4.jpg",
"https://wallpaperchain.com/download/meme/meme-funny-wallpaper-26.jpg",
"https://wallpaperchain.com/download/meme/meme-funny-wallpaper-44.jpg",
"https://wallpaperchain.com/download/meme/meme-funny-wallpaper-25.jpg",
"https://www.pixelstalk.net/wp-content/uploads/images6/Meme-Background-Free-Download.jpg",
]

const addImage = (randomNumber) => {
    const randomImage = imgArray[randomNumber];
    const newImage = document.createElement("div");
    const imgTag = document.createElement("img");
    imgTag.setAttribute("src", randomImage);
    newImage.append(imgTag);
    displayArray.push(newImage);
    //console.log(displayArray);
    renderAll();
}

function renderScreen() {
    welcomeScreen.style.display = "none";
    gameScreen.style.display = "none";
    scoreScreen.style.display = "none"; //? block will show
    const screen = document.querySelector("#" + game.screen);
    screen.style.display = "block";
  }


const playSound = () => {
    let audio = new Audio("WTF Boom.mp3");
    audio.play();
}
let lolLol = document.querySelector("#Meme");
lolLol.addEventListener("click", playSound)