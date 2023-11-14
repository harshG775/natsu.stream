import { useReducer} from "react";

import DBContext from "./DBContext";
import { DBReducer } from "./DBReducer.js";

export default function DBContextProvider(prop) {
    const initialState ={
        appData:{
            apiKey:"c04c4d588ea04e1542849e5b03feadc9",
        },
        count:1,
    }
    return (
        <DBContext.Provider  value={useReducer(DBReducer, initialState)}>
            {prop.children}
        </DBContext.Provider>
    );
}
