import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

import { FixedPositionWrapper } from '../../wrappers/FixedPositionWrapper';

export const BottomNavBar = ( { labels } ) => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
	const [ active, setActive ] = useState(0)
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
					value={active}
					onChange={(event, newValue) => setActive(newValue) }
				>
					{
						labels.map( label => (
							<BottomNavigationAction 
								label={ label.name}
								icon={label.icon}
								component={NavLink}
								to={label.path}
							/>
						) )
					}
				</BottomNavigation>
			</FixedPositionWrapper>
		</>
	);	
};