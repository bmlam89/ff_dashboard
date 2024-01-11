import React, { useEffect, useRef, useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Divider from '@mui/material/Divider';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';

export const AnimatedTopNavBar = ({top, top2, setTop, setTop2 }) => {
	const [isMobile, setIsMobile] = useState( window.innerWidth <= 768);
	return (
		<Paper id='Start of AnimatedTopNavBar'  sx={ { position: 'fixed', top: 0, left: 0, right: 0 } } elevation={1}>
			<BottomNavigation
				showLabels
				value={top}
				onChange={(event, newValue) => {
					setTop(newValue);
				} }
			>
				<BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
				<BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
				<BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
			</BottomNavigation>
			<Divider/>
			<BottomNavigation
				showLabels
				value={top2}
				onChange={(event, newValue) => {
					setTop2(newValue);
				} }
			>
				<BottomNavigationAction  label="Recents" icon={<RestoreIcon />} />
				<BottomNavigationAction  label="Favorites" icon={<FavoriteIcon />} />
				<BottomNavigationAction  label="Archive" icon={<ArchiveIcon />} />
			</BottomNavigation>
		</Paper>
	);
};