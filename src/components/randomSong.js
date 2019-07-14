import React, {Fragment} from 'react';
  selectedRandomSong(song){
         let currentIndex = song.length, temporaryValue, randomIndex;

         while(0 !== currentIndex){
             randomIndex = Math.floor(Math.random()*currentIndex);
             currentIndex -= 1;


         temporaryValue = song[currentIndex];
         song[currentIndex] = song[randomIndex];
         song[randomIndex] = temporaryValue;
         }
         return song;
     }

