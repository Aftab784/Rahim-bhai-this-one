const popSongLeft = document.querySelector('#pop-song-left');
const popSongRight = document.querySelector('#pop-song-right');
const popSong = document.getElementsByClassName('pop-song')[0];

const popArtistLeft = document.querySelector('#pop-artist-left'); // Button for artist section
const popArtistRight = document.querySelector('#pop-artist-right'); // Button for artist section
const popArtist = document.getElementsByClassName('item')[0]; // Container for artist section

popSongRight.addEventListener('click', () => {
    popSong.scrollLeft += 330
    popSong.style.scrollBehaviour = 'smooth'
})
popSongLeft.addEventListener('click', () => {
    popSong.scrollLeft -= 330
})
popArtistRight.addEventListener('click', () => {
    popArtist.scrollLeft += 130
})
popArtistLeft.addEventListener('click', () => {
    popArtist.scrollLeft -= 130
})


const music = new Audio('audio/arjit/1.mp3')
const masterPlay = document.querySelector('#masterPlay')
let wave = document.getElementById('wave')



const songs = [
    {
        id: "1",
        songName: `Naina Ashq na Ho <br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/arjit/1.jpg",
        titleOfSong: "Naina Ashq na Ho"
    },
    {
        id: "2",
        songName: `Khairiyat<br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/arjit/2.jpg",
        titleOfSong: "Khairiyat"
    },
    {
        id: "3",
        songName: `Desh Mere  <br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/arjit/3.jpg",
        titleOfSong: "Desh Mere"
    },
    {
        id: "4",
        songName: `Dhoka <br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/arjit/4.jpg",
        titleOfSong: "Dhoka"
    },
    {
        id: "5",
        songName: `Tera Yaar Hoon Main <br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/arjit/5.jpg",
        titleOfSong: "Tera Yaar Hoon Main"
    },
    {
        id: "6",
        songName: `Chunar <br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/arjit/6.jpg",
        titleOfSong: "Chunar"
    },
    {
        id: "7",
        songName: `Galti se Mistake<br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/arjit/7.jpg",
        titleOfSong: "Galti se Mistake"
    },
    {
        id: "8",
        songName: `Hamari Adhuri Kahani <br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/arjit/8.jpg",
        titleOfSong: "Hamari Adhuri Kahani"
    },
    {
        id: "9",
        songName: `Neki Ki Raah <br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/arjit/9.jpg",
        titleOfSong: "Neki Ki Raah"
    },
    {
        id: "10",
        songName: `Humdard<br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/arjit/10.jpg",
        titleOfSong: "Humdard"
    },
    {
        id: "11",
        songName: `Mere Yaaraa<br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/arjit/11.jpg",
        titleOfSong: "Mere Yaaraa"
    },
    {
        id: "12",
        songName: `Nashe Si Chadh Gayi<br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/arjit/12.jpg",
        titleOfSong: "Nashe Si Chadh Gayi"
    },
    {
        id: "13",
        songName: `Ae Watan  <br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/arjit/13.jpg",
        titleOfSong: "Ae Watan"
    },
    {
        id: "14",
        songName: `Agar Tum Saath Ho <br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/arjit/14.jpg",
        titleOfSong: "Agar Tum Saath Ho"
    },
    {
        id: "15",
        songName: `Pachtaoge  <br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/arjit/15.jpg",
        titleOfSong: "Pachtaoge"
    }
]




Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1')
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill')
    } else {
        music.pause();
        wave.classList.remove('active1')
        masterPlay.classList.add('bi-play-fill')
        masterPlay.classList.remove('bi-pause-fill')
    }
})

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill')
        el.classList.remove('bi-pause-circle-fill')
    })
}
const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgba(105, 105, 105, .0)'
    })
}

let index = 0;
let posterMasterPlay = document.querySelector('#poster-master-play')
let title = document.querySelector('#title')
let downloadMusic = document.querySelector('#download-music')

Array.from(document.getElementsByClassName('playlistPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        // console.log(index);
        music.src = `audio/arjit/${index}.mp3`;
        posterMasterPlay.src = `img/arjit/${index}.jpg`
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill')
        downloadMusic.href = `audio/arjit/${index}.mp3`
        music.play();

        let songTitles = songs.filter((els) => {
            return els.id == index
        })
        let songTitle = songs.filter((eles) => {
            return eles.id == index
        })

        songTitles.forEach((elss) => {
            let { songName } = elss
            title.innerHTML = songName
        })
        songTitle.forEach((elsss) => {
            let { titleOfSong } = elsss
            downloadMusic.setAttribute('download', titleOfSong)
        })

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgba(105, 105, 105, .1)'
        makeAllPlay()
        el.target.classList.add('bi-pause-circle-fill')
        el.target.classList.remove('bi-play-circle-fill')
        wave.classList.add('active1')
        wave.classList.remove('active1')
    })
})

let currentStart = document.getElementById('currentStart')
let currentEnd = document.getElementById('currentEnd')
let seek = document.getElementById('seek')
let bar2 = document.getElementById('bar2')
let dot = document.getElementsByClassName('dot')[0]

music.addEventListener('timeupdate', () => {
    let musicCurrent = music.currentTime
    let musicDuration = music.duration
    let min1 = Math.floor(musicDuration / 60)
    let sec1 = Math.floor(musicDuration % 60)
    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }
    currentEnd.innerText = `${min1}:${sec1}`
    let min2 = Math.floor(musicCurrent / 60)
    let sec2 = Math.floor(musicCurrent % 60)

    if (sec2 < 10) {
        sec2 = `0${sec2}`
    }
    currentStart.innerText = `${min2}:${sec2}`

    let progressBar = parseInt((musicCurrent / musicDuration) * 100)
    seek.value = progressBar
    // console.log(seek.value)
    let seekBar = seek.value;
    bar2.style.width = `${seekBar}%`
    dot.style.left = `${seekBar}%`
})

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100
})

let volIcon = document.getElementById('vol-icon')
let vol = document.getElementById('vol')
let volBar = document.querySelector('.vol-bar')
let volDot = document.getElementById('vol-dot')

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        volIcon.classList.remove('bi-volume-up-fill')
        volIcon.classList.remove('bi-volume-down-fill')
        volIcon.classList.add('bi-volume-off-fill')
    }
    if (vol.value > 0) {
        volIcon.classList.remove('bi-volume-up-fill')
        volIcon.classList.add('bi-volume-down-fill')
        volIcon.classList.remove('bi-volume-off-fill')
    }
    if (vol.value > 50) {
        volIcon.classList.add('bi-volume-up-fill')
        volIcon.classList.remove('bi-volume-down-fill')
        volIcon.classList.remove('bi-volume-off-fill')
    }
    let vol_a = vol.value;
    volBar.style.width = `${vol_a}%`
    volDot.style.left = `${vol_a}%`
    music.volume = vol_a / 100
})

let back = document.querySelector('#back')
let next = document.querySelector('#next')

back.addEventListener('click', () => {
    index -= 1
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length
    }
    music.src = `audio/arjit/${index}.mp3`;
    posterMasterPlay.src = `img/arjit/${index}.jpg`
    music.play();
    masterPlay.classList.remove('bi-play-fill')
    masterPlay.classList.add('bi-pause-fill')

    let songTitles = songs.filter((els) => {
        return els.id == index
    })

    songTitles.forEach(elss => {
        let { songName } = elss
        title.innerHTML = songName
    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgba(105, 105, 105, .1)'
    makeAllPlay()
    el.target.classList.add('bi-pause-circle-fill')
    el.target.classList.remove('bi-play-circle-fill')
    wave.classList.add('active1')
    wave.classList.remove('active1')
})

next.addEventListener('click', () => {
    index++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = `audio/arjit/${index}.mp3`;
    posterMasterPlay.src = `img/arjit/${index}.jpg`
    masterPlay.classList.remove('bi-play-fill')
    masterPlay.classList.add('bi-pause-fill')
    music.play();

    let songTitles = songs.filter((els) => {
        return els.id == index
    })

    songTitles.forEach(elss => {
        let { songName } = elss
        title.innerHTML = songName
    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgba(105, 105, 105, .1)'
    makeAllPlay()
    el.target.classList.add('bi-pause-circle-fill')
    el.target.classList.remove('bi-play-circle-fill')
    wave.classList.add('active1')
    wave.classList.remove('active1')
})

let shuffle = document.getElementsByClassName('shuffle')[0]

shuffle.addEventListener('click', () => {
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = "repeat"
            break;

        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = "random"
            break;

        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = "next"
            break;
    }
})


const nextMusic = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index++
    }
    // index ++;
    music.src = `audio/arjit/${index}.mp3`;
    posterMasterPlay.src = `img/arjit/${index}.jpg`
    masterPlay.classList.remove('bi-play-fill')
    masterPlay.classList.add('bi-pause-fill')
    downloadMusic.href = `audio/arjit/${index}.mp3`
    music.play();

    let songTitles = songs.filter((els) => {
        return els.id == index
    })
    let songTitle = songs.filter((eles) => {
        return eles.id == index
    })

    songTitles.forEach((elss) => {
        let { songName } = elss
        title.innerHTML = songName
    })
    songTitle.forEach((elsss) => {
        let { titleOfSong } = elsss
        downloadMusic.setAttribute('download', titleOfSong)
    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgba(105, 105, 105, .1)'
    makeAllPlay()
    el.target.classList.add('bi-pause-circle-fill')
    el.target.classList.remove('bi-play-circle-fill')
    wave.classList.add('active1')
    wave.classList.remove('active1')

}

const repeatMusic = () => {
    index
    music.src = `audio/arjit/${index}.mp3`;
    posterMasterPlay.src = `img/arjit/${index}.jpg`
    masterPlay.classList.remove('bi-play-fill')
    masterPlay.classList.add('bi-pause-fill')
    downloadMusic.href = `audio/arjit/${index}.mp3`
    music.play();

    let songTitles = songs.filter((els) => {
        return els.id == index
    })
    let songTitle = songs.filter((eles) => {
        return eles.id == index
    })

    songTitles.forEach((elss) => {
        let{songName} = elss
        title.innerHTML = songName
    })
    songTitle.forEach((elsss) => {
        let{titleOfSong} = elsss
        downloadMusic.setAttribute('download', titleOfSong)
    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgba(105, 105, 105, .1)'
    makeAllPlay()
    el.target.classList.add('bi-pause-circle-fill')
    el.target.classList.remove('bi-play-circle-fill')
    wave.classList.add('active1')
    wave.classList.remove('active1') 
}

const randomMusic = () => {
    if(index == songs.length){
        index = 1
    }else {
        index = Math.floor((Math.random() * songs.length) + 1)
    }
    music.src = `audio/arjit/${index}.mp3`;
    posterMasterPlay.src = `img/arjit/${index}.jpg`
    masterPlay.classList.remove('bi-play-fill')
    masterPlay.classList.add('bi-pause-fill')
    downloadMusic.href = `audio/arjit/${index}.mp3`
    music.play();

    let songTitles = songs.filter((els) => {
        return els.id == index
    })
    let songTitle = songs.filter((eles) => {
        return eles.id == index
    })

    songTitles.forEach((elss) => {
        let{songName} = elss
        title.innerHTML = songName
    })
    songTitle.forEach((elsss) => {
        let{titleOfSong} = elsss
        downloadMusic.setAttribute('download', titleOfSong)
    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgba(105, 105, 105, .1)'
    makeAllPlay()
    el.target.classList.add('bi-pause-circle-fill')
    el.target.classList.remove('bi-play-circle-fill')
    wave.classList.add('active1')
    wave.classList.remove('active1')
}

music.addEventListener('ended', () => {
  let b = shuffle.innerHTML

  switch (b) {
    case 'repeat':
        repeatMusic()
        break;
    case 'next':
        nextMusic()
        break;
    case 'random':
        randomMusic()
        break;
  }
})

