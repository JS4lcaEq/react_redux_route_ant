import { useLocation } from "react-router-dom";


export default function Component(){
    let location = useLocation();
    return (
        <div>
            debug : {JSON.stringify(location)}
        </div>
    )
}