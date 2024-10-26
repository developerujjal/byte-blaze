import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const [theme, setTheme] = useState('light')

    const handleToggle = e => {
        if (e.target.checked) {
          setTheme('synthwave')
        } else {
          setTheme('light')
        }
      }
    
      // set theme state in localStorage on mount & also update localStorage on state change
      useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
    
        // add custom data-theme attribute
        document.querySelector('html').setAttribute('data-theme', localTheme)
      }, [theme])
    
 

    return (

        <div className="shadow-lg sticky top-0 z-20">
            <div className="container">
                <div className="navbar bg-base-100 p-0 py-2">
                    <div className="flex-1">
                        <Link to={'/'} className="btn btn-ghost px-0 text-primaryColor gap-0 text-2xl font-semibold">Byte<span className="text-seconColor">Blaze</span></Link>
                    </div>
                    <div className="flex gap-3">
                        <ul className="menu menu-horizontal px-1 font-bold flex gap-5">
                            <NavLink to={'/'} className={({isActive})=> isActive ? 'text-seconColor': '' }>Home</NavLink>
                            <NavLink to={'/blogs'} className={({isActive})=> isActive ? 'text-seconColor': '' }>Blogs</NavLink>
                            <NavLink to={'bookmarks'} className={({isActive})=> isActive ? 'text-seconColor': '' }>Bookmarks</NavLink>
                        </ul>
                        <label className="grid cursor-pointer place-items-center">
                            <input
                                type='checkbox'
                                onChange={handleToggle}
                                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
                            <svg
                                className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5" />
                                <path
                                    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                            </svg>
                            <svg
                                className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        </label>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;