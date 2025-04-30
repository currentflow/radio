import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import { version } from '$app/environment'

// store init
let init = ({ 
  storage_name: "radio_store",
  version,
  volume: 1,
});

// Check browser for localStorage:
// if storage_name exists in localStorage - 
// and version matches => use storage...
// if storage_name does not exist -
// or version has changed => use init...
if (browser) {
  const temp = JSON.parse(localStorage.getItem(init.storage_name));
  if (temp) 
    if (temp.version == init.version) 
      init = temp;
}

export const store = writable(init);

// update localStorage
if (browser) {
  store.subscribe((value) =>
    localStorage.setItem(init.storage_name, JSON.stringify(value))
  );
}


export let stations = [
  { 
    title: "MSNBC",
    description: "News & Politics",
    url: "https://tunein.cdnstream1.com/3511_96.mp3"    
  },  
  { 
    title: "CNN",
    description: "News & Politics",
    url: "https://tunein.cdnstream1.com/2868_96.mp3"
  }, 
  { 
    title: "KGOU",
    description: "NPR",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/KGOUFM_64.mp3"
  }, 
  {
    title: "KOSU",
    description: "NPR",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/KOSUFM_NEWS.mp3" 
  }, 
  { 
    title: "KQED",
    description: "NPR",
    url: "https://streams.kqed.org/kqedradio"
  }, 
  { 
    title: "KMGL",
    description: "Adult Contemporary",
    url: "https://23263.live.streamtheworld.com/KMGLFMAAC.aac"
  }, 
  {
    title: "C-SPAN",
    description: "C-Span",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/CSPANRADIO.mp3"
  },
  {
    title: "NOAA",
    description: "OKC Weather",
    url: "https://wxradio.org/OK-OklahomaCity-WXK85"
  },
];



export function formatTime(seconds) {
  if (isNaN(seconds)) return '...';

  const minutes = Math.floor(seconds / 60);
  seconds = Math.floor(seconds % 60);
  if (seconds < 10) seconds = '0' + seconds;

  return `${minutes}:${seconds}`;
}

export function round(num,d = 0) {
  return Math.round((num) * (Math.pow(10, d))) / (Math.pow(10, d));
}

export {dbltap} from "./dbltap";

