import React, { useState } from 'react';

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
			<label for = "namefield">Enter name here:
				<input type = "text" id = "namefield" />
			</label>
		</div>
		);
}

export default App;
