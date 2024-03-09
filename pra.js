console.log("Welcome to Spotify");

//initiate the variables
let songIndex = 0;
let audioElement = new Audio('songs/3.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif =document.getElementById('gif'); 
let masterSongName=document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "  Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "  Tere hawale", filePath: "songs/2.mp3", coverPath:" cover/2.jpg"},
    {songName: "  Tujhme rab dikhta hai", filePath: "songs/3.mp3", coverPath:" cover/3.jpg"},
    {songName: "  hasi bn gye", filePath: "songs/4.mp3", coverPath:" cover/1.jpg"},
    {songName: "  O mahi", filePath: "songs/5.mp3", coverPath:" cover/1.jpg"},
    {songName: "  Chaiya Chaiya", filePath: "songs/6.mp3", coverPath:" cover/1.jpg"},
    {songName: "  Rashiya", filePath: "songs/7.mp3", coverPath:" cover/1.jpg"},

]

songItems.forEach((element,i)=>{
   element.getElementsByTagName("img")[0].src = songs[i].coverPath;
   element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

   //handle play/pause click

masterPlay.addEventListener('click',()=>{
    if( audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

//listen events
audioElement.addEventListener('timeupdate',()=>{
    
    // update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

//k
const makeAllplays = () =>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
    element.addEventListener('click' ,(e) =>{
         console.log(e.target);
         makeAllplays();
         e.target.classList.remove('fa-play-circle');
         e.target.classList.add('fa-pause-circle');

         songIndex=parseInt(e.target.id);
         audioElement.src=`songs/${songIndex+1}.mp3`;
          masterSongName.innerText=songs[songIndex].songName;
          audioElement.currentTime =0;
          masterPlay.classList.remove('fa-play-circle');
          masterPlay.classList.add('fa-pause-circle');
           audioElement.play();
         gif.style.opacity=1;
        
    })
})

document.getElementById('previous').addEventListener('click', () =>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime =0;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    audioElement.play();
    gif.style.opacity=1;
    
})

document.getElementById('next').addEventListener('click', () =>{
    if(songIndex>=6){
        songIndex = 0
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime =0;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    audioElement.play();
    gif.style.opacity=1;

})

