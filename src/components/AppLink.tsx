import { NavLink } from "react-router-dom";
import "./AppLink.css"
import type { LinkProps } from "react-router-dom";

function AppLink({ children, to, ...props }: LinkProps) {
  
    return (
        <NavLink
          to={to}
          {...props}
          className="app-link"
        >
          {children}
        </NavLink>
    );
  }

  export default AppLink;