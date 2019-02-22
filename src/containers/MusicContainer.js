
import React, {Component, Fragment} from 'react';
import SongList from '../components/SongList.js';

class MusicContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      currentSong: null
    }
  }

  componentDidMount() {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(response => response.json())
    .then(data => this.setState({songs: data.feed.entry}));
  }

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

  render() {
    return(
      <Fragment>


        <div className="text">

          <h1><center>iTunes UK Top 20</center></h1>
          <p><center>Built using the iTunes Top20 api</center></p>

          <SongList songs={this.state.songs}  />

        </div>
      </Fragment>

    )
  }
//https://s3.eu-west-2.amazonaws.com/colt/Chase+%26+Status+-+Retreat2018+(Feat.+Cutty+Ranks).mp3
}
export default MusicContainer;
