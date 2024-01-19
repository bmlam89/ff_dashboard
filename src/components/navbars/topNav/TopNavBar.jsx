import React, { useState, useEffect } from 'react';
import { AppBar, Box, Divider, useTheme } from '@mui/material';

import { SearchBar } from './SearchBar';
import { HorizontalButtonGroup } from './HorizontalButtonGroup';
export const TopNavBar = () => {
	const theme = useTheme();
	const [hideAppBar, setHideAppBar] = useState(false);
	let lastScrollY = window.scrollY;

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		if (window.scrollY > lastScrollY) {
	// 			// Scrolling down
	// 			setHideAppBar(true);
	// 		} else {
	// 			// Scrolling up
	// 			setHideAppBar(false);
	// 		}
	// 		lastScrollY = window.scrollY;
	// 	};

	// 	window.addEventListener('scroll', handleScroll);
	// 	return () => window.removeEventListener('scroll', handleScroll);
	// }, []);

	return (
		<Box sx={{ flexGrow: 1, zIndex: 5 }}>
			<AppBar position="fixed" sx={ {
					transition: 'height 0.3s linear',
					height: hideAppBar ? 0 : '117px', // Adjust '64px' to your AppBar's height
					[theme.breakpoints.up('sm')]: {
						height: hideAppBar ? 0 : '125px', // Height for screens defined in the 'sm' breakpoint and up (desktop)
					},
					overflow: 'hidden',
				} }
			>
				<SearchBar/>
				<Divider/>
				<HorizontalButtonGroup labels={ ["Projections", "Player Research", "Trade Analyzer", "Sleepers"] }/>

			</AppBar>
		</Box>
	);
};