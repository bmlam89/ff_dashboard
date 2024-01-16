import React, { useState } from 'react';
import { Box, CssBaseline, useTheme } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';

import { SignIn } from './features/sign-in/SignIn';
import { SignUp } from './features/sign-up/SignUp';
import { Dashboard } from './features/dashboard/Dashboard';

import { TopNavBar } from './components/navbars/topNav/TopNavBar';
import { BottomNavBar } from './components/navbars/bottomNav/BottomNavbar';
import { PlayerNews } from './features/player-news/PlayerNews';
import { PlayerResearch } from './features/player-reasearch/PlayerResearch';

export const App = () => {
	const theme = useTheme();

	return (
		<Router>
			<Box>
				<CssBaseline />
				<TopNavBar/>
				
				<Box 
					sx={{
						display: 'flex',
						pb:7, 
						pt:'117px',
						[theme.breakpoints.up('sm')]: {
							pt: '125px', // Height for screens defined in the 'sm' breakpoint and up (desktop)
						}
					}}
				>
					<Routes>
						<Route path="/" element={ <PlayerResearch /> } />
					</Routes>
			
				</Box>
				<BottomNavBar 
					className='bottomNav'
					labels={[
						{
							name:'Recents',
							icon: <RestoreIcon />,
							path: '/'
						},
						{
							name:'Profile',
							icon: <ArchiveIcon />,
							path:'/profile'
						},
						{
							name:'Favorites',
							icon: <FavoriteIcon />,
							path:'/favorites'
						},
						
					]}
				/>
			</Box>
		</Router>
	);
};