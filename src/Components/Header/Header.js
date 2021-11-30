import { useLocation } from "react-router-dom";
import rts from '../../Routes/Routes'

function findRoute(url, sub) {
    let ret
    for(let i = 0; i < sub.length; i++) {
        let item = sub[i]
        //console.log(item)
        if(item.url && item.url == url){
            //console.log("find = ", item) 
            ret = item
            break
        }
        if(item.sub){
            let f = findRoute(url, item.sub)
            if(f){
                ret = f
            }
        }
    }
    return ret
}



export default function Component() {
    const location = useLocation();
    let fr = findRoute(location.pathname, rts.sub);
    //console.log("fr", fr)
    return (
        <>
            {/* <span>location : {location.pathname}</span> */}
            {/* <span>routes : {JSON.stringify(rts)}</span> */}
            {fr? fr.nm : ""}
        </>
    )
}