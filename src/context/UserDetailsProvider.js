import { useState, createContext } from "react";

export const userDetailsContext = createContext();

const UserDetailsProvider = ({ children }) => {
	const [userDetails, setUserDetails] = useState({});

	return (
		<userDetailsContext.Provider value={[userDetails, setUserDetails]}>
			{children}
		</userDetailsContext.Provider>
	);
};

export default UserDetailsProvider;
