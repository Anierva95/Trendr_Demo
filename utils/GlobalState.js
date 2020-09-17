import React, { createContext, useReducer, useContext } from "react";


const SalesContext = createContext();
const { Provider } = SalesContext;

const reducer = (state, action) => {
    console.log(`reducer state`, state);
    console.log(`reducer state`, action);

    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                products: [...action.products]
    }
}
}

const SalesProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        sale1: {},
        sale2: {},
        sale3: {},
    });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useSalesContext = () => {
    return useContext(SalesContext);
}

export {SalesProvider, useSalesContext};