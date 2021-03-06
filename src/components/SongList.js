import React from 'react';
import Song from './Song';

const SongList = (props) => {
  if (props.songs == null || props.songs.length === 0) {
    return <p>Loading...</p>;
    }
    console.log(props)
    const feed = props.songs.map((song, index) => {
      return
      // <tr key={index}>
        <Song
        title = {song["im:name"].label}
        <div className="text">
          <td>{index+1}</td>
          <td>{song["im:name"]["label"]}</td>
          <td>{song["im:artist"]["label"]}</td>
        </div>

        <td><img src ={song["im:image"][0].label} ></img></td>
        <td><audio controls src ={song.link[1].attributes.href}>Preview</audio></td>
      </tr>
    })

    return (
      <table>
        { feed }
      </table>
    )
  }

  export default SongList;
