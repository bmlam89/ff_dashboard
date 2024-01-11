import React, { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { AnimatedTopNavBar } from '../animated-top-navbar/AnimatedTopNavBar';

const drawerHeight = 112;

const Main = styled( 'main', { shouldForwardProp: ( prop ) => prop !== 'open' } )(
	( { theme, open } ) => ( {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create( 'margin', {
			easing: theme.transitions.easing.linear,
			duration: theme.transitions.duration.leavingScreen,
		} ),
		// marginTop: `-${drawerHeight}px`,
		...( open && {
			transition: theme.transitions.create( 'margin', {
				easing: theme.transitions.easing.linear,
				duration: theme.transitions.duration.enteringScreen,
			} ),
			marginTop: `${drawerHeight}px`,
		} ),
	} ),
);

const MainContent = styled( Main, { shouldForwardProp: ( prop ) => prop !== 'open',} )( 
	( { theme, open } ) => ( {
			transition: theme.transitions.create([ 'margin', 'height'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		} ),
		...( open && {
			height: `auto`,
			marginTop: `${drawerHeight}px`,
			transition: theme.transitions.create( [ 'margin', 'height' ], {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			} ),
		} ),
	} ) 
);

const DrawerHeader = styled( 'div' )(
	( { theme } ) => ( {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
  	} )
);

// export const ScrollDrawer = ( { children } ) => {

// 	const [ isOpen, setIsOpen ] = useState( false );

// 	return (
// 		<div>
// 			<React.Fragment key={ 'top' }>
// 			<Button onClick={ () => setIsOpen( true ) }>Top</Button>
// 			<Drawer
// 				anchor={ 'top' }
// 				open={ isOpen }
// 				onClose={ () => setIsOpen( false ) }
// 			>
// 				<Box
// 					sx={ { width: 'auto' } }
// 					role="presentation"
// 					onClick={ () => setIsOpen( !isOpen ) }
// 					onKeyDown={ () => setIsOpen( !isOpen ) }
// 				>
// 					{ children }
// 					{/* <List>
// 						{ [ 'Inbox', 'Starred', 'Send email', 'Drafts' ].map( ( text, index ) => (
// 							<ListItem key={ text } disablePadding>
// 								<ListItemButton>
// 									<ListItemIcon>
// 										{ index % 2 === 0 ? <InboxIcon /> : <MailIcon /> }
// 									</ListItemIcon>
// 									<ListItemText primary={ text } />
// 								</ListItemButton>
// 							</ListItem>
// 						) ) }
// 					</List>
// 					<Divider />
// 					<List>
// 						{ [ 'All mail', 'Trash', 'Spam' ].map( ( text, index ) => (
// 							<ListItem key={ text } disablePadding>
// 								<ListItemButton>
// 									<ListItemIcon>
// 										{ index % 2 === 0 ? <InboxIcon /> : <MailIcon /> }
// 									</ListItemIcon>
// 									<ListItemText primary={ text } />
// 								</ListItemButton>
// 							</ListItem>
// 						) ) }
// 					</List> */}
// 				</Box>
// 			</Drawer>
// 			</React.Fragment>
// 		</div>
// 	);
// };

export const ScrollDrawer = ( { isMobile, open, children } ) => {
	const theme = useTheme();
	

	return (
		<Box sx={ { display: 'flex' } }>
			<CssBaseline />
			<Drawer
				className={ isMobile ? "scrollDrawer" : '' }
				sx={ {
					height: drawerHeight,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						height: drawerHeight,
						boxSizing: 'border-box',
					},
				} }
				variant="persistent"
				anchor="top"
				open={ open }
			>
				{ children }
			</Drawer>
			<Main open={open}>
			
			
				

				<Box sx={ { display:'flex', flexDirection: 'column', justifyContent: 'end', height: 'auto', width: '100vw', mb: 7 } }>

				<Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
					enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
					imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
					Convallis convallis tellus id interdum velit laoreet id donec ultrices.
					Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
					adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
					nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
					leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
					feugiat vivamus at augue. At augue eget arcu dictum varius duis at
					consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
					sapien faucibus et molestie ac.
				</Typography>


				<Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
					enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
					imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
					Convallis convallis tellus id interdum velit laoreet id donec ultrices.
					Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
					adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
					nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
					leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
					feugiat vivamus at augue. At augue eget arcu dictum varius duis at
					consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
					sapien faucibus et molestie ac.
				</Typography>



				<Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
					enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
					imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
					Convallis convallis tellus id interdum velit laoreet id donec ultrices.
					Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
					adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
					nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
					leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
					feugiat vivamus at augue. At augue eget arcu dictum varius duis at
					consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
					sapien faucibus et molestie ac.
				</Typography>



				<Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
					enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
					imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
					Convallis convallis tellus id interdum velit laoreet id donec ultrices.
					Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
					adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
					nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
					leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
					feugiat vivamus at augue. At augue eget arcu dictum varius duis at
					consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
					sapien faucibus et molestie ac.
				</Typography>



				<Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
					enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
					imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
					Convallis convallis tellus id interdum velit laoreet id donec ultrices.
					Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
					adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
					nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
					leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
					feugiat vivamus at augue. At augue eget arcu dictum varius duis at
					consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
					sapien faucibus et molestie ac.
				</Typography>

				<Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
					enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
					imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
					Convallis convallis tellus id interdum velit laoreet id donec ultrices.
					Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
					adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
					nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
					leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
					feugiat vivamus at augue. At augue eget arcu dictum varius duis at
					consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
					sapien faucibus et molestie ac.
				</Typography>

				<Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
					enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
					imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
					Convallis convallis tellus id interdum velit laoreet id donec ultrices.
					Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
					adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
					nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
					leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
					feugiat vivamus at augue. At augue eget arcu dictum varius duis at
					consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
					sapien faucibus et molestie ac.
				</Typography>
				<Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
					enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
					imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
					Convallis convallis tellus id interdum velit laoreet id donec ultrices.
					Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
					adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
					nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
					leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
					feugiat vivamus at augue. At augue eget arcu dictum varius duis at
					consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
					sapien faucibus et molestie ac.
				</Typography><Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
					enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
					imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
					Convallis convallis tellus id interdum velit laoreet id donec ultrices.
					Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
					adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
					nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
					leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
					feugiat vivamus at augue. At augue eget arcu dictum varius duis at
					consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
					sapien faucibus et molestie ac.
				</Typography><Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
					enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
					imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
					Convallis convallis tellus id interdum velit laoreet id donec ultrices.
					Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
					adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
					nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
					leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
					feugiat vivamus at augue. At augue eget arcu dictum varius duis at
					consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
					sapien faucibus et molestie ac.
				</Typography><Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
					enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
					imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
					Convallis convallis tellus id interdum velit laoreet id donec ultrices.
					Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
					adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
					nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
					leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
					feugiat vivamus at augue. At augue eget arcu dictum varius duis at
					consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
					sapien faucibus et molestie ac.
				</Typography><Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
					enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
					imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
					Convallis convallis tellus id interdum velit laoreet id donec ultrices.
					Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
					adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
					nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
					leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
					feugiat vivamus at augue. At augue eget arcu dictum varius duis at
					consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
					sapien faucibus et molestie ac.
				</Typography><Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
					enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
					imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
					Convallis convallis tellus id interdum velit laoreet id donec ultrices.
					Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
					adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
					nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
					leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
					feugiat vivamus at augue. At augue eget arcu dictum varius duis at
					consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
					sapien faucibus et molestie ac.
				</Typography><Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
					enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
					imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
					Convallis convallis tellus id interdum velit laoreet id donec ultrices.
					Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
					adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
					nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
					leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
					feugiat vivamus at augue. At augue eget arcu dictum varius duis at
					consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
					sapien faucibus et molestie ac.
				</Typography><Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
					enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
					imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
					Convallis convallis tellus id interdum velit laoreet id donec ultrices.
					Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
					adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
					nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
					leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
					feugiat vivamus at augue. At augue eget arcu dictum varius duis at
					consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
					sapien faucibus et molestie ac.
				</Typography><Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
					enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
					imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
					Convallis convallis tellus id interdum velit laoreet id donec ultrices.
					Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
					adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
					nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
					leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
					feugiat vivamus at augue. At augue eget arcu dictum varius duis at
					consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
					sapien faucibus et molestie ac.
				</Typography><Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
					enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
					imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
					Convallis convallis tellus id interdum velit laoreet id donec ultrices.
					Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
					adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
					nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
					leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
					feugiat vivamus at augue. At augue eget arcu dictum varius duis at
					consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
					sapien faucibus et molestie ac.
				</Typography><Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
					enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
					imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
					Convallis convallis tellus id interdum velit laoreet id donec ultrices.
					Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
					adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
					nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
					leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
					feugiat vivamus at augue. At augue eget arcu dictum varius duis at
					consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
					sapien faucibus et molestie ac.
				</Typography><Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
					enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
					imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
					Convallis convallis tellus id interdum velit laoreet id donec ultrices.
					Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
					adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
					nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
					leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
					feugiat vivamus at augue. At augue eget arcu dictum varius duis at
					consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
					sapien faucibus et molestie ac.
				</Typography><Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
					enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
					imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
					Convallis convallis tellus id interdum velit laoreet id donec ultrices.
					Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
					adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
					nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
					leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
					feugiat vivamus at augue. At augue eget arcu dictum varius duis at
					consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
					sapien faucibus et molestie ac.
				</Typography><Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
					enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
					imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
					Convallis convallis tellus id interdum velit laoreet id donec ultrices.
					Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
					adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
					nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
					leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
					feugiat vivamus at augue. At augue eget arcu dictum varius duis at
					consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
					sapien faucibus et molestie ac.
				</Typography><Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
					enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
					imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
					Convallis convallis tellus id interdum velit laoreet id donec ultrices.
					Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
					adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
					nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
					leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
					feugiat vivamus at augue. At augue eget arcu dictum varius duis at
					consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
					sapien faucibus et molestie ac.
				</Typography><Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
					enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
					imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
					Convallis convallis tellus id interdum velit laoreet id donec ultrices.
					Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
					adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
					nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
					leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
					feugiat vivamus at augue. At augue eget arcu dictum varius duis at
					consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
					sapien faucibus et molestie ac.
				</Typography><Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
					enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
					imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
					Convallis convallis tellus id interdum velit laoreet id donec ultrices.
					Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
					adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
					nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
					leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
					feugiat vivamus at augue. At augue eget arcu dictum varius duis at
					consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
					sapien faucibus et molestie ac.
				</Typography>
					<h1>Hello world</h1>
				</Box>
			</Main>
		</Box>
	);
};
<Typography paragraph>
					Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
					eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
					neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
					tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
					sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
					tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
					gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
					et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
					tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
					eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
					posuere sollicitudin aliquam ultrices sagittis orci a.
				</Typography>
{/* <AppBar position="fixed" open={ open }>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={ () => setOpen( true ) }
						edge="start"
						sx={ { mr: 2, ...( open && { display: 'none' } ) } }
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						Persistent drawer
					</Typography>
				</Toolbar>
			</AppBar> */}

			{/* <DrawerHeader>
					<IconButton onClick={ () => setOpen( false ) }>
						{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					{ ['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
					) ) }
				</List>
				<Divider />
				<List>
					{ ['All mail', 'Trash', 'Spam'].map( ( text, index ) => (
						<ListItem key={text} disablePadding>
							<ListItemButton>
								<ListItemIcon>
									{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
					) ) }
				</List> */}