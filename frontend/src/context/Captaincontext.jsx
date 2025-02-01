import { createContext, useContext, useState } from 'react';

// Create the context
const CaptainDataContext = createContext();

// Create a provider component
export const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Add functions to manage captain state
    const updateCaptain = (captainData) => {
        setCaptain(captainData);
    };

    const clearCaptain = () => {
        setCaptain(null);
    };

    // Values to be provided to consumers
    const value = {
        captain,
        loading,
        error,
        updateCaptain,
        clearCaptain,
        setLoading,
        setError
    };

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};
