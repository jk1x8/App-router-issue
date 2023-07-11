'use client'
import Link from "next/link"
import { useEffect } from "react";

export default function Navbar(){ console.log('Navbar rendered');
    useEffect(() => {
        console.log('Navbar initialized');
    }, [])
    return(
        <nav style={{display: 'flex', gap: '30px', margin: '20px'}}>
            <Link href="/">Homepage</Link>
            <Link href="/info">Info</Link>
        </nav>
    )
}
