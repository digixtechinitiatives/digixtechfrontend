import '../css/homeloader.css'
import {useEffect} from 'react'
import { useAnimate} from "framer-motion"

function HomeLoader(){

    const [scope , animate] = useAnimate()

    useEffect(()=>{
     handleAnimate()

    })

async function handleAnimate(){
 await animate('#loader' , {rotate: '3600deg'},{duration:'3s'})
}

    return (
        <div ref={scope} className="center_complete">
            <div id="loader" className="animate_item">

            </div>
        </div>
    )
}

export default HomeLoader 

