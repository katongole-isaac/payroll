/**
 * Sidebar Nav Link
 * 
 */
import Link from "next/link";
import { Nav } from "react-bootstrap";


const SidebarLink = ({ icon, path, label, activeLink, onLinkClick }) =>{

let activeClass = activeLink === path ? "active" : "";

return (
  <Nav>
    <Nav.Item className={`nav_item ${activeClass}`}>
      <Link  onClick={ () => onLinkClick(path)} href={path} className="d-flex">
        {icon} {label}
      </Link>
    </Nav.Item>
  </Nav>
);

}

export default SidebarLink ;