import React, { createContext, useState } from 'react';

const RenderContext = createContext();

function RenderProviderWrapper(props) {


    const [outerPage, isOuterPage] = useState(false)
    return (
        <RenderContext.Provider value={{ outerPage, isOuterPage }}>
            {props.children}
        </RenderContext.Provider>
    )
}

export { RenderContext, RenderProviderWrapper };