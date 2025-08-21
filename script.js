console.log("welcome ");

let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterplay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let materSongName = document.getElementById('materSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let song = [
    {songName: "Rowady baby", filePath: "songs/1.mp3", coverpath: "./cover/1.jpeg"},
    {songName: "Vaa vathi", filePath: "songs/2.mp3", coverpath: "./cover/2.jpeg"},
    {songName: "Enna solla", filePath: "songs/3.mp3", coverpath: "./cover/3.jpeg"},
    {songName: "life of pazam", filePath: "songs/4.mp3", coverpath: "./cover/4.jpeg"},
    {songName: "Kolavari", filePath: "songs/5.mp3", coverpath: "./cover/5.jpeg"},
    {songName: "Maari Thara Local", filePath: "songs/6.mp3", coverpath: "./cover/6.jpeg"},

]

songItems.forEach((element, i) => {
    
    element.getElementsByTagName('img')[0].src = song[i].coverpath; // use coverpath
    element.getElementsByClassName("songName")[0].innerText = song[i].songName;
});


masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
})

audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');


    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    

    myProgressBar.value = progress;
})


myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlay();
        
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        materSongName.innerText = song[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');



    })

})


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=5){
        songIndex = 0;

    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
     materSongName.innerText = song[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

})



document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;

    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
        materSongName.innerText = song[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

})