import React, { useEffect, useRef, useState, createRef } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { BorderAll } from '@mui/icons-material';


export const Rankings = () => {

	const headers = ['GP', 'Avg Proj', 'Ppg', 'Beat', 'Performance', 
		'Pass Yds', 'Pass TD', 'Int', 'Sack', 
		'Rush Att', 'Rush Yds', 'Rush TD', 'YPC', 'RuYpg', 'TotYpg',
		'Tgts', 'Tgt/Gm', 'Rec', 'Rec/Gm', 'Rec Yds', 'Rec TD', 'Catch Rate' 
	]
	const values = headers.map( ( _, idx ) => idx );

	const arr = [1, 2, 3];
	
	
	
	return (
		<Box
			sx={ {
				width: '100vw',
				overflowX: 'auto'

			} }
		>
			<Box
				className="scrollable-content"
				sx={ {
					display:'flex',
					gap: '12px',
					width: '100vw',
				} }
			>
				{ headers.map ( header => 
					<Box
						key={ header }
						sx={ {
							display: 'flex',
							textWrap: 'nowrap'
						} }
					>
				
						<p>{ header }</p>
					</Box>
				) }
			</Box>
			
			<>
				{ arr.map( ( _, idx ) => (
					<Box key={ idx} >
						<Box 
							sx={ { 
								display: 'flex',
								position: 'fixed',
								left: 0
								
							} }
						>
							<img src="https://images.fantasypros.com/images/players/nfl/16393/headshot/250x250.webp"
								alt='player-thumbnail-img'
								style={ {
									width: '50px',
									height:'50px',
									
								} }
							/>

							<Box
								sx={ { 
									display: 'flex',
									flexDirection: 'column'
								} }
							>	
								<Box sx={ { display: 'flex', gap: 1, alignItems: 'flex-start' } } >
									Christian CMC <span style={{ color: "red" }}>NO - QB</span>
								</Box>
							</Box>	
						</Box>	

						<Box
							sx={ {
								display:'flex',
								gap: '12px',
								zIndex: 100

							} }
						>
							{ values.map ( header => 
								<Box
									key={ header }
									sx={ {
										display: 'flex',
										textWrap: 'nowrap'
									} }
								>
							
									<p>{ header }</p>
								</Box>
							) }
						</Box>
					</Box>		
				) ) }
				

			


				

				
			</>
					
			
		</Box>
		
	   );
};