import { Link } from "react-router-dom";
import s from './Nav.module.css';

export const Navigation = () => {
   return (
      <nav className={s.wrapper}>
         <Link to='/generate'>Generate QR</Link>
         <Link to='/scan'>Scan QR</Link>
         <Link to='/generateHistory'>History generate</Link>
         <Link to='/scanHistory'>History scan</Link>
      </nav>
   )
}