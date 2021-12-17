import React from 'react'
import Debounce from './Debounce'
import Throttle from './Throttle'

export default function Home() {
    return (
        <div className='container mt-4 border rounded p-4'>
            <Debounce/>
            <hr />
            <Throttle/>
        </div>
    )
}
