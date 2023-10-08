import {Routes,Route} from "react-router-dom";
import Convert from "../Components/Converter/Converter";
import Debug from "../Components/Debugger/Debugger";
import Quality from "../Components/Quality/Quality";

export default function AllRoutes(){
    return <div>
        <Routes>
            <Route path="/" element={<Convert/>}></Route>
            <Route path="/debug" element={<Debug/>}></Route>
            <Route path="/quality" element={<Quality/>}></Route>
        </Routes>
    </div>
}