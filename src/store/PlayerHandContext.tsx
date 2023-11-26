import React, { useContext, useMemo, useState } from "react"
import { APIContextTheme, APIResults } from './APIContextInterface'
import TypeProviderContextProps from "../../models/TypeProviderContextProps"

export const PlayerHandContext = React.createContext<null | APIContextTheme>(null)

export function APIProvider({ children }: TypeProviderContextProps): JSX.Element {

    const [apiResults, setApiResults] = useState<APIResults[]>([])


    const updateApiState = (input: APIResults[]): void => {
        setApiResults(input)
    }

    const memoizedContextValue = React.useMemo(
        () => ({
            searchTerm, updateSearchState, submittedSearch, updateSubmittedSearch, apiResults, updateApiState
        }),
        [searchTerm, updateSearchState, submittedSearch, updateSubmittedSearch, apiResults, updateApiState]
    )

    return (
        <APIContext.Provider
            value={memoizedContextValue}>
            {children}
        </APIContext.Provider>
    )
}

export function useAPIContext() {
    const apiContext = useContext(APIContext)
    if (!apiContext) throw new Error("You need to use this context inside the provider")
    return apiContext
}