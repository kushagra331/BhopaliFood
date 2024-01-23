import React from 'react'
import { Link } from 'react-router-dom'
export default function Sub() {
  return (
    <div>
        <ul className="menu bg-base-200 w-56 rounded-box">
            <li><Link>Item 1</Link></li>
            <li>
                <Link>Parent</Link>
                <ul>
                <li><Link>Submenu 1</Link></li>
                <li><Link>Submenu 2</Link></li>
                <li>
                    <Link>Parent</Link>
                    <ul>
                    <li><Link>Submenu 1</Link></li>
                    <li><Link>Submenu 2</Link></li>
                    </ul>
                </li>
                </ul>
            </li>
            <li><Link>Item 3</Link></li>
        </ul>
    </div>
  )
}
