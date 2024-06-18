import React, { ReactNode, createContext, useContext, useState } from 'react';

interface SearchContextType {
    searchQuery: string;
    handleSearchChange: (query: string) => void;
}

interface SearchProviderProps {
    children: ReactNode; // Explicitly define children prop as ReactNode
}

export const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearchContext = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearchContext must be used within a SearchProvider');
    }
    return context;
};

export const SearchProvider: React.FC<SearchProviderProps> = ({children}) => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSearchChange = (query: string) => {
        setSearchQuery(query);
    };

    const contextValue: SearchContextType = {
        searchQuery,
        handleSearchChange,
    };

    return (
        <SearchContext.Provider value={contextValue}>
            {children}
        </SearchContext.Provider>
    );
};
