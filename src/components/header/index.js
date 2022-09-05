import { Link } from 'react-router-dom';
import './index.css';

export default function HeadNav() { 
    return (
        <nav>
            <Link to="/men">Men's Outerwear </Link>
            <Link to="/women">Ladies Outerwear</Link>
            <Link to="/men-tee">Men's T-Shirts</Link>
            <Link to="/women-tee">Ladies T-Shirts</Link>
        </nav>
    )
}