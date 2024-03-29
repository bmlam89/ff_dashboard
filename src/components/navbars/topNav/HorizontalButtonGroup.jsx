import React, { useState, useEffect } from 'react';
import { AppBar, Box, useTheme } from '@mui/material';
import { useDrawer } from '../../../context/DrawerContext';

const Button = ( { label } ) => {
	return (
		<Box
			sx={{
				display: 'flex',
				padding: '6px 20px',
				margin: '0 8px',
				backgroundColor: 'secondary.main',
				color: 'white',
				textAlign: 'center',
				verticalAlign: 'center',
				cursor: 'pointer',
				borderRadius: '4px',
				'&:hover': {
					backgroundColor: 'secondary.dark',
				},
				flexShrink: 0, // Prevent the box from shrinking
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				whiteSpace: 'nowrap'
			}}
		>
			{label}
		</Box>
	);
};

export const HorizontalButtonGroup = ( { labels } ) => {
	return (
		<Box
			className='scrollable-content'
			sx={{
				display: 'flex',
				gap: '10px',
				overflowX: 'auto',
				whiteSpace: 'nowrap',
				pt: '12px',
				pb: '12px',
				
			}}
		>
			{ labels.map( ( label, idx ) => 
				<Button key={ idx } label={label}/>
			) }
		</Box>
	);
};