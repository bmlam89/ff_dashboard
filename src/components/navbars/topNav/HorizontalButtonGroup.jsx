import React from 'react';
import { Box } from '@mui/material';

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