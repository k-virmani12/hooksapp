import React, { useState } from 'react';
import SongForm from './songform';

function App() {
	const [ songs, setSongs ] = useState ([
		{
			name : 'The Wild darkness',
			id : 1 
		},{
			name : 'Memory gospel',
			id : 2
		},{
			name : 'Maps',
			id : 3
		}]
	);

	const addSong = ( songName) => {
		let newSong = {
			name : songName,
			id : 4
		}
		setSongs ([...songs, newSong]);
	}
		
	return (
		<div className="song-list">
			<ul>
				{ songs.map ( ( song, index ) => {
				return (
				<li key = {`song-${index}`}>
					{song.name}
				</li>
				)})}
			</ul>
			<SongForm addNewSong = {addSong} />
		</div>
		);
}

export default App;
