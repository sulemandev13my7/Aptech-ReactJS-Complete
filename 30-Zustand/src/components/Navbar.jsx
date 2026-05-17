import React, { use, useEffect } from 'react'
import useMyStore from '../Store'

function Navbar() {
    // choose subscription of state carefully
    // const {count, increment, capitalizedName} = useMyStore();

    const count = useMyStore(state=>state.count)
    const increment = useMyStore(state=>state.increment)
    const capitalizedName = useMyStore(state=>state.capitalizedName)
    useEffect(()=>{
        console.log('re-render howa kiya',count)
    })


    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={capitalizedName}>Capitalized</button>
        </div>
    )
}

export default Navbar