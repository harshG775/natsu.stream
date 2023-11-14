import { useContext } from "react";
import DBContext from "../../store/DBContext";
import { Actions } from "../../store/DBReducer";

export default function Home() {
	const [state, dispatch] = useContext(DBContext);
	return (
		<>
            <button onClick={()=>dispatch({type:Actions.INCREMENT,payload:state.count+1})}>add {state.count}</button>
		</>
	);
}
