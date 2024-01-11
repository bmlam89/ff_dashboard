import React, { useEffect, useRef, useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';

export const AnimatedTopNavBar = ({top, top2, setTop, setTop2 }) => {
	const [isScrolledDown, setIsScrolledDown] = useState(false);
	let lastScrollTop = 0;
   
	useEffect(() => {
	  const onScroll = () => {
	    let currentScrollPos = window.pageYOffset;
	    setIsScrolledDown(currentScrollPos > lastScrollTop);
	    lastScrollTop = currentScrollPos <= 0 ? 0 : currentScrollPos; // For Mobile or negative scrolling
	  };
   
	  window.addEventListener("scroll", onScroll);
	  return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return (
		<Paper sx={ { height: isScrolledDown ? 0 : 'auto', 
		transition: 'height 0.5s ease-in-out',position: 'fixed', top: 0, left: 0, right: 0, zIndex: isScrolledDown ? 0 : 5 } } elevation={3}>
			<BottomNavigation
				showLabels
				value={top}
				onChange={(event, newValue) => {
					setTop(newValue);
				} }
				sx={{ 
					height: isScrolledDown ? 0 : 'auto', 
					transition: 'height 0.5s ease-in-out'}}
			>
				<BottomNavigationAction sx={{ 
	height: isScrolledDown ? 0 : 'auto', 
	transition: 'height 0.5s ease-in-out'}} label={ isScrolledDown ? "" :"Recents"} icon={<RestoreIcon sx={{ 
		height: isScrolledDown ? 0 : 'auto', 
		transition: 'height 0.5s ease-in-out'}}/>} />
				<BottomNavigationAction  sx={{ 
	height: isScrolledDown ? 0 : 'auto', 
	transition: 'height 0.5s ease-in-out'}} label={ isScrolledDown ? "" :"Favorites"} icon={<FavoriteIcon sx={{ 
		height: isScrolledDown ? 0 : 'auto', 
		transition: 'height 0.5s ease-in-out'}}/>} />
				<BottomNavigationAction sx={{ 
	height: isScrolledDown ? 0 : 'auto', 
	transition: 'height 0.5s ease-in-out'}} label={ isScrolledDown ? "" :"Archive"} icon={<ArchiveIcon sx={{ 
		height: isScrolledDown ? 0 : 'auto', 
		transition: 'height 0.5s ease-in-out'}}/>} />
			</BottomNavigation>
			<BottomNavigation
				showLabels
				value={top2}
				onChange={(event, newValue) => {
					setTop2(newValue);
				} }
			>
				<BottomNavigationAction sx={{ 
	height: isScrolledDown ? 0 : 'auto', 
	transition: 'height 0.5s ease-in-out'}} label={ isScrolledDown ? "" : "Recents" } icon={<RestoreIcon sx={{ 
		height: isScrolledDown ? 0 : 'auto', 
		transition: 'height 0.5s ease-in-out'}}/>} />
				<BottomNavigationAction sx={{ 
	height: isScrolledDown ? 0 : 'auto', 
	transition: 'height 0.5s ease-in-out'}} label={ isScrolledDown ? "" :"Favorites"} icon={<FavoriteIcon sx={{ 
		height: isScrolledDown ? 0 : 'auto', 
		transition: 'height 0.5s ease-in-out'}}/>} />
				<BottomNavigationAction sx={{ 
	height: isScrolledDown ? 0 : 'auto', 
	transition: 'height 0.5s ease-in-out'}} label={ isScrolledDown ? "" :"Archive"} icon={<ArchiveIcon sx={{ 
		height: isScrolledDown ? 0 : 'auto', 
		transition: 'height 0.5s ease-in-out'}}/>} />
			</BottomNavigation>
		</Paper>
	);
};