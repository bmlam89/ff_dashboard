import React from 'react';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


export const Input = () => {

	return (

		<Box sx={ { display: 'flex', flexWrap: 'wrap', backgroundColor: 'white' } }>
			<FormControl sx={{ m: 1 }}>
				<InputLabel htmlFor="outlined-adornment-amount">Player Name</InputLabel>
				<OutlinedInput
					id="outlined-adornment-amount"
					startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
					label="Player Name"
				/>
			</FormControl>
		</Box>

	);
};