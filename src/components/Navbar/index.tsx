import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../context"
import { LocalGroceryStore } from '@mui/icons-material'

function Navbar() {
  const contextCount = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
        <ul className="flex items-center gap-3">
          <li className="font-semibold text-lg">
            <NavLink to="/">
              Shopi
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
              All
            </NavLink>
          </li>
          {/* TODO: filter by category
           <li>
            <NavLink to="/clothes" className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
              Clothes
            </NavLink>
          </li>
          <li>
            <NavLink to="/electronics" className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
              Electronics
            </NavLink>
          </li>
          <li>
            <NavLink to="/others" className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
              Others
            </NavLink>
          </li> */}
        </ul>
        
        {/* right side */}

        <ul className="flex items-center gap-3">
          <li>
            <NavLink to="/new-product" className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
              New product
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-order" className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
              My order
            </NavLink>
          </li>
          <li>
            <div className="flex justify-between">
              <LocalGroceryStore /> 
              <p className="ml-1">
                {contextCount.count}
              </p>
            </div>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar