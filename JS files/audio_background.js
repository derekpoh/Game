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
    click: ["audio/bonk.mp3", "audio/bruh.mp3", "audio/cantouchthis.mp3", "audio/fart.mp3", "audio/gandalf.mp3", "audio/garbage.mp3", "audio/hehe.mp3", "audio/hellnaw.mp3", "audio/hello.mp3", "audio/herewegoagain.mp3", "audio/Jeff.mp3", "audio/knock.mp3", 
    "audio/minecraft.mp3", "audio/nice.mp3", "audio/obiwan.mp3", "audio/oiu.mp3", "audio/prettygood.mp3", "audio/Punch.mp3", "audio/roblox.mp3", "audio/snake.mp3", "audio/weed.mp3"],

    win: ["audio2/johncena.mp3", "audio2/money.mp3", "audio2/omgwow.mp3", "audio2/rick.mp3", "audio2/zawarudo.mp3"],

    lose: ["audio2/CoffinMeme.mp3", "audio2/directed.mp3", "audio2/nogodplease.mp3", "audio2/WTFBoom.mp3", "audio2/titanic.mp3", "audio2/walao.mp3", "audio2/ohnolaugh.mp3"],
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
    let sound = new Audio("audio/WTFBoom.mp3");
    sound.play();
}
let lolButton = document.querySelector("#Meme");
lolButton.addEventListener("click", playBoom)
