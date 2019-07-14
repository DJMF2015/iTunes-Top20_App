import React from 'react'
import '../App.css';


const Song = (props)=> {
  return (
    <div className="song">
    <h4>{props.title}&nbsp;</h4>
    <h4>{props.position}&nbsp; </h4>
    <h4>{props.artist}&nbsp;</h4>

    <audio src={props.sample} controls="controls"/>
    </div>
  );
}
