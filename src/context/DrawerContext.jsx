import React, { createContext, useState, useContext } from 'react';

const DrawerContext = createContext();

export const useDrawer = () => useContext(DrawerContext);

export function DrawerProvider({ children }) {

	const [isDrawerOpen, setDrawerOpen] = useState(false);

	const toggleDrawer = () => {

		console.log('toggle drawer called', isDrawerOpen);
		setDrawerOpen(!isDrawerOpen);

	};

	return (
		<DrawerContext.Provider value={{ isDrawerOpen, toggleDrawer }}>
			{ children }
		</DrawerContext.Provider>
	);
};
