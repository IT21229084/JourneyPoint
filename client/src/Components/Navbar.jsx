import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleMenuTaggler = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const navItems = [
    { path: "/", title: "Start a Search" },
    { path: "/myJob", title: "My Jobs" },
    { path: "/salary", title: "Salary Estimate" },
    { path: "/postJob", title: "Post A job" }
  ]

  return (
    <header className='max-w-screen-2x1 container mx-auto x1:px-24 px-4'>
      <nav className='flex justify-between items-center py-6'>
        <a href='/'>
          {/* <img src="/images/Linear.png" alt="" /> */}
          <span>JourneyPoint</span></a>

        <ul className='hidden md:flex gap-12'>
          {
            navItems.map(({ path, title }) => (
              <li key={path} className='text-base text-primary'>
                <NavLink to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "active" : ""}>
                  {title}
                </NavLink>
              </li>
            ))
          }
        </ul>

        <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
          <Link to='/login' className='py-2 px-5 border  rounded'>Log In</Link>
          <Link to='/signUp' className='py-2 px-5 border  rounded bg-blue text-white'>Sign Up</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar