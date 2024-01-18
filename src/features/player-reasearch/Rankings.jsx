import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';


const columns = [
	'GP',
]

export const Rankings = () => {

	const headers = ['Proj Wk Rank', 'GP', 'Avg Proj', 'Ppg', 'Beat', 'Performance', 
		'Pass Yds', 'Pass TD', 'Int', 'Sack', 
		'Rush Att', 'Rush Yds', 'Rush TD', 'YPC', 'RuYpg', 'TotYpg',
		'Tgts', 'Tgt/Gm', 'Rec', 'Rec/Gm', 'Rec Yds', 'Rec TD', 'Catch Rate' 
	]
	const values = headers.map( ( _, idx ) => idx );

	const [headerWidths, setHeaderWidths] = useState([]);
  	const headerRefs = useRef([]);

	const arr = [ 1,2,3]

	useEffect(() => {
		const measuredWidths = headerRefs.current.map(ref => ref.offsetWidth);
		setHeaderWidths(measuredWidths);
	}, []);

	return (
		<Box
			className="scrollable-content"

			sx={ {
				display: 'flex',
				justifyContent: 'space-between',
				maxWidth: '100vw',
				overflowX: 'auto'
			} }
		>
			<Box sx={ {
					display: 'flex',
					flexDirection: 'column',
				
				} }
			>

			
				<Box
					sx={ {
						display:'flex',
						whiteSpace: 'nowrap',
					} }
				>
					{ headers.map ( ( header, idx ) => 
						<Box 
							key={ header }
							ref={el => headerRefs.current[idx] = el}
							sx={ {
								display: 'flex',
								paddingX: '10px',
								paddingY: '6px',
								alignItems: 'center',
								justifyContent: 'center',
								borderTop: 1,
								borderBottom: 1,
								
							} }
						>
					
							{ header }
						</Box>
					) }
				</Box>
				
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					{ arr.map( ( ele, idx ) => (
						<Box key={ idx } >
							<Box 
								sx={ { 
									display: 'flex',
								} }
							>
								<img src="https://images.fantasypros.com/images/players/nfl/16393/headshot/250x250.webp"
									alt='player-thumbnail-img'
									style={ {
										width: '50px',
										height:'50px',
										position: 'sticky',
										left: `${ headerWidths[ 0 ] - 50 }px`
									} }
								/>
								<Box
									sx={ { 
										display: 'flex',
										flexDirection: 'column',
										position: 'sticky',
										left: `${ headerWidths[ 0 ] }px`
									} }
								>	
									<Box sx={ { 
											display: 'flex', 
											gap: 1, 
											alignItems: 'flex-start',
										} } 
									>
										Christian CMC <span style={{ color: "red" }}>NO - QB</span>
									</Box>
								</Box>	
							</Box>	

							<Box
								sx={ {
									display:'flex',
									justifyContent: 'space-between',
									width: 'full'
								} }
							>
								{ values.map ( ( val, idx ) => 
									<Box
										key={ idx }
										sx={ {
											display: 'flex',
											paddingX: '20px',
											paddingY: '6px',
											width: headerWidths[ idx ],
											justifyContent: 'center',
											alignItems: 'center',
											borderTop: 1,
											borderBottom: 1,
										} }
									>
								
										{ val }
									</Box>
								) }
							</Box>	
						</Box>
					) ) }
				</Box>
			</Box>
		</Box>
		
	   );
};