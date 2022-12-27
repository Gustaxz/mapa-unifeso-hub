import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export function Home() {
    const location = useLocation()

    console.log(location)
    return (
        <div>
            <p>Home</p>
            <Link to="/main">Main</Link>
        </div>
    )
}
