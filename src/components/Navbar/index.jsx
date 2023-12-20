import { NavLink } from "react-router-dom"


export const NavBar = () => {

  const asctiveStyle = 'underline  underline-offset-4'


  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink
            to="/"
            exact>Shopi</NavLink>
        </li>
        <li>
          <NavLink to="/"
            className={({ isActive }) =>
              isActive ? asctiveStyle : undefined
            }
            exact>All</NavLink>
        </li>
        <li>
          <NavLink to="/clothes"
            className={({ isActive }) =>
              isActive ? asctiveStyle : undefined
            }
            exact>Clothes</NavLink>
        </li>
        <li>
          <NavLink to="/electronics"
            className={({ isActive }) =>
              isActive ? asctiveStyle : undefined
            }
            exact>Electronics</NavLink>
        </li>
        <li>
          <NavLink to="/fourniture"
            className={({ isActive }) =>
              isActive ? asctiveStyle : undefined
            }
            exact>Fourniture</NavLink>
        </li>
        <li>
          <NavLink to="/toys"
            className={({ isActive }) =>
              isActive ? asctiveStyle : undefined
            }
            exact>Toys</NavLink>
        </li>

      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          Cris@gmail.com
        </li>
        <li>
          <NavLink to="/my-orders"
            className={({ isActive }) =>
              isActive ? asctiveStyle : undefined
            }
            exact>My Orders</NavLink>
        </li>
        <li>
          <NavLink to="/my-account"
            className={({ isActive }) =>
              isActive ? asctiveStyle : undefined
            }
            exact>My Account</NavLink>
        </li>
        <li>
          <NavLink to="/sign-in"
            className={({ isActive }) =>
              isActive ? asctiveStyle : undefined
            }
            exact>Sign In</NavLink>
        </li>
        <li>
          <NavLink to="/electronics"
            className={({ isActive }) =>
              isActive ? asctiveStyle : undefined
            }
            exact>🚗0</NavLink>
        </li>


      </ul>
    </nav>
  )
}
