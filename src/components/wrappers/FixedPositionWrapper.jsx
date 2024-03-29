import React from 'react';
import { Paper } from '@mui/material';

export const FixedPositionWrapper = ( { position, className, children } ) => {
	return (
		<Paper 
			className={className} 
			sx={{ 
				position: 'fixed', 
				bottom: position === 'bottom' ? 0 : 'auto', 
				top: position === 'top' ? 0 : 'auto',
				left: 0, 
				right: 0,
				zIndex: 1 
			}} 
			elevation={3}
		>
			{ children }
		</Paper>
	);
};