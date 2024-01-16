import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


export const Rankings = () => {
	const headers = ['GP', 'Avg Proj', 'Ppg', 'Beat', 'Performance', 
		'Pass Yds', 'Pass TD', 'Int', 'Sack', 
		'Rush Att', 'Rush Yds', 'Rush TD', 'YPC', 'RuYpg', 'TotYpg',
		'Tgts', 'Tgt/Gm', 'Rec', 'Rec/Gm', 'Rec Yds', 'Rec TD', 'Catch Rate' 
	]
	return (
		<Box
			sx={ {
				width: '100vw'
			} }
		>
			<TableContainer 
				component={Paper} 
				
			>
				<Table stickyHeader>
					<TableHead
						sx={ {
							display:'flex',
							gap: '12px',
							width: '100vw',
							overflowX: 'auto'
						} }
					>
						{ headers.map ( header => 
							<TableRow 
								sx={ {
									display: 'flex',
									textWrap: 'nowrap'
								} }
							>
								{ header }
							</TableRow>
						) }
					</TableHead>
					<TableBody>
						<Box
							sx={ {
								display: 'flex'
							} }
						>
							<img src="https://images.fantasypros.com/images/players/nfl/16393/headshot/250x250.webp"
								style={ {
									width: '50px',
									height:'50px'
								} }
							/>	
						</Box>
						<Box>

						</Box>
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
		
	   );
};