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
    click: ["Audio/bonk.mp3", "Audio/bruh.mp3", "Audio/cantouchthis.mp3", "Audio/fart.mp3", "Audio/gandalf.mp3", "Audio/garbage.mp3", "Audio/hehe.mp3", "Audio/hellnaw.mp3", "Audio/hello.mp3", "Audio/herewegoagain.mp3", "Audio/Jeff.mp3", "Audio/knock.mp3", 
    "Audio/minecraft.mp3", "Audio/nice.mp3", "Audio/obiwan.mp3", "Audio/oiu.mp3", "Audio/prettygood.mp3", "Audio/Punch.mp3", "Audio/roblox.mp3", "Audio/snake.mp3", "Audio/weed.mp3"],

    win: ["Audio/johncena.mp3", "Audio/money.mp3", "Audio/omgwow.mp3", "Audio/rick.mp3", "Audio/zawarudo.mp3"],

    lose: ["Audio/CoffinMeme.mp3", "Audio/directed.mp3", "Audio/nogodplease.mp3", "Audio/WTFBoom.mp3", "Audio/titanic.mp3", "Audio/walao.mp3", "Audio/ohnolaugh.mp3"],
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
    let sound = new Audio("Audio/WTFBoom.mp3");
    sound.play();
}
let lolButton = document.querySelector("#Meme");
lolButton.addEventListener("click", playBoom)
