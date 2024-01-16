import React from 'react';
import { Box, useTheme } from '@mui/material';
import { Input } from '../../components/input/Input';
import { Filters } from './Filters';
import { Rankings } from './Rankings';

export const PlayerResearch = () => {
	const theme = useTheme();
	return (
		<Box id='featuers/playerresearch/playerresearch'
			sx={ {
				display:'flex',
				flexDirection:'column',
				width:'auto',
				gap:'12px',
				marginTop:'15px',
				[theme.breakpoints.up('sm')]: {
					marginTop: '12px', // Height for screens defined in the 'sm' breakpoint and up (desktop)
				}
			} }
		>
			<Input />
			<Rankings />
		</Box>
	)
};