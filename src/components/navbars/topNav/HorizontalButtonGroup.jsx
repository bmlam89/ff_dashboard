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
	const theme = useTheme();
	const [hideAppBar, setHideAppBar] = useState(false);
	let lastScrollY = window.scrollY;
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > lastScrollY) {
				// Scrolling down
				setHideAppBar(true);
			} else {
				// Scrolling up
				setHideAppBar(false);
			}
			lastScrollY = window.scrollY;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	return (
		<AppBar position="fixed" sx={ {
				transition: 'height 0.3s linear',
				height: hideAppBar ? 0 : 56, // Adjust '64px' to your AppBar's height
				[theme.breakpoints.up('sm')]: {
					height: hideAppBar ? 0 : 64, // Height for screens defined in the 'sm' breakpoint and up (desktop)
				},
				overflow: 'hidden',
			} }
		>
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
		</AppBar>
	);
};