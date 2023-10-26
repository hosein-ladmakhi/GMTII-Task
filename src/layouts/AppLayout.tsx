import React, { Suspense } from "react";
import { Outlet } from "react-router";
import { Link, useLocation } from "react-router-dom";
import { navbarItems } from "../constants";

const AppLayout = () => {
    const location = useLocation();

    return (
        <>
            <nav className="text-white bg-blue-900 p-5">
                <div className="container mx-auto px-5">
                    <div className="flex justify-between items-center">
                        <ul className="flex items-center justify-start">
                            {React.Children.toArray(navbarItems.map(navItem => (
                                <li className={`mr-5 ${navItem.path === location.pathname ? 'border-b-2' : ''}`}>
                                    <Link to={navItem.path}>
                                        {navItem.text}
                                    </Link>
                                </li>
                            )))}
                        </ul>
                        <div>
                            <h1 className="first-letter:text-blue-400 small-caps italic text-2xl font-bold">Task Manager</h1>
                        </div>
                    </div>
                </div>
            </nav>

            <Suspense fallback={<p>Loading ...</p>}>
                <div className="container mx-auto px-5 sm:px-0 my-5">
                    <Outlet />
                </div>
            </Suspense>
        </>
    )
}

export default AppLayout;