import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
const currentTimeKey = 'videoplayer-current-time';


const saveCurrentTime = throttle(() => {
  player.getCurrentTime(time => {
    localStorage.setItem(currentTimeKey, time);
    console.log(currentTimeKey);
  });
}, 1000);
console.log(currentTimeKey);

const restoreCurrentTime = () => {
  const currentTime = localStorage.getItem(currentTimeKey);
  if (currentTime) {
    player.setCurrentTime(currentTime)
  }
}

player.on('timeupdate', saveCurrentTime);
restoreCurrentTime()