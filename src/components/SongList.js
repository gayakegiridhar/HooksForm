import React, { useState } from "react";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Memory", id: 1 },
    { title: "Something just like this", id: 2 },
    { title: "Perfect", id: 3 }
  ]);
  const addSong = () => {
    setSongs([...songs, { title: "new Song", id: 0 }]);
  };
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title} </li>;
        })}
      </ul>
      <button onClick={addSong}>Add a Song</button>
    </div>
  );
};
export default SongList;
