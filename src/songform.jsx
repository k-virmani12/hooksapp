import React, { useState } from 'react';

export default function SongForm (props) {
	const [ song, setSong ] = useState ('');
	
	const handleChange = (e) => {
		setSong (e.target.value);	
	}

	function handleSubmit (e) {
		e.preventDefault ();
		console.log (song);
		props.addNewSong (song);
	}

	return (
		<form onSubmit = {handleSubmit}>
			<label>
				Enter Song Name:
			</label>
			<input type = "text" value = {song} onChange = { handleChange } />
			<input type = "submit" value = "Add" />
		</form>
	)
}
