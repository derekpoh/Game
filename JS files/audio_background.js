const body = document.querySelector("body");

const backgroundArray =
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

const audioFile = {
    click: ["Audio/bonk.mp3", "Audio/bruh.mp3", "Audio/cantouchthis.mp3", "Audio/fart.mp3", "Audio/gandalf.mp3", "Audio/garbage.mp3", "Audio/hehe.mp3", "Audio3/hellnaw.mp3", "Audio/hello.mp3", "Audio3/herewegoagain.mp3", "Audio/Jeff.mp3", "Audio3/knock.mp3", 
    "Audio3/minecraft.mp3", "Audio3/nice.mp3", "Audio3/obiwan.mp3", "Audio3/oiu.mp3", "Audio3/prettygood.mp3", "Audio3/Punch.mp3", "Audio3/roblox.mp3", "Audio3/snake.mp3", "Audio3/weed.mp3"],

    win: ["Audio2/johncena.mp3", "Audio2/money.mp3", "Audio2/omgwow.mp3", "Audio2/rick.mp3", "Audio2/zawarudo.mp3"],

    lose: ["Audio2/CoffinMeme.mp3", "Audio2/directed.mp3", "Audio2/nogodplease.mp3", "Audio2/WTFBoom.mp3", "Audio2/titanic.mp3", "Audio2/walao.mp3", "Audio2/ohnolaugh.mp3"],
}



//Change background

const homeBackground = () => {                                                                                               //reference = https://stackoverflow.com/questions/34690104/make-javascript-change-background-image-every-5-seconds
    body.style.backgroundImage = null;
    body.style.backgroundImage = "url('readme_resource/background.png')";
}

const changeBackground = (randomNumber) => {
    body.style.backgroundImage = null;
    body.style.backgroundImage = "url('" + backgroundArray[randomNumber] + "')";
}

const randomBackgroundImage = () => {
    let randomNumber = Math.floor(Math.random() * 12);                                                  
    changeBackground(randomNumber);
}


//Play audio files

const playClickSound = () => {                                                                                               //reference = https://stackoverflow.com/questions/9419263/how-to-play-audio#comment11906843_9419263
    let sound = new Audio(audioFile.click[Math.floor(Math.random() * audioFile.click.length)]);
    sound.play();
}

const playWinSound = () => {
    let sound = new Audio(audioFile.win[Math.floor(Math.random() * audioFile.win.length)]);
    sound.play();
}

const playLoseSound = () => {
    let sound = new Audio(audioFile.lose[Math.floor(Math.random() * audioFile.lose.length)]);
    sound.play();
}

const playBoom = () => {
    let sound = new Audio("Audio2/WTFBoom.mp3");
    sound.play();
}
let lolButton = document.querySelector("#Meme");
lolButton.addEventListener("click", playBoom)
