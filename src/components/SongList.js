import React, { useState, useEffect } from "react";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Memory", id: 1 },
    { title: "Something just like this", id: 2 },
    { title: "Perfect", id: 3 }
  ]);
  const addSong = title => {
    setSongs([...songs, { title, id: 0 }]);
  };

  useEffect(() => {
    console.log("USeEffect Run", songs);
  });
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title} </li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  );
};
export default SongList;
