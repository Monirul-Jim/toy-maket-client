import { useEffect } from "react"

const DynamicTitle=(title)=>{
    useEffect(()=>{
        document.title=`Jim | ${title}`
        //  **‘PHero | About us’**.
    },[title])

}
export default DynamicTitle;