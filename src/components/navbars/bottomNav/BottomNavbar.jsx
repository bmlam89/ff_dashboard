import React, { useEffect, useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';

import { FixedPositionWrapper } from '../../wrappers/FixedPositionWrapper';

export const BottomNavBar = ({bottom, setBottom}) => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);

	}, [] );

	if ( !isMobile ) return null;

	return (
		<>
			<FixedPositionWrapper position="bottom" className='bottomNav'>
				<BottomNavigation 
					
					showLabels
					value={bottom}
					onChange={(event, newValue) => {
						setBottom(newValue);
					} }
				>
					<BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
					<BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
					<BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
				</BottomNavigation>
			</FixedPositionWrapper>
		</>
	);	
};