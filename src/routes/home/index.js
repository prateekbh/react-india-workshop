import { Link } from "react-router-dom";

import "./index.css"

export default function HomePage() {
    return (
        <div>
            <Link className="full-link" to="/men">
                <div>
                    <img src="https://shop.polymer-project.org/esm-bundled/images/mens_outerwear.jpg" />
                </div>
                <span> Men's Outerwear </span>
            </Link>
            <Link className="full-link" to="/women">
                <div>
                    <img src="https://shop.polymer-project.org/esm-bundled/images/ladies_outerwear.jpg" />
                </div>
                <span> Men's Outerwear </span>
            </Link>
            <div className="split-half">
                <Link className="half-link" to="/men-tee">
                    <div>
                        <img src="https://shop.polymer-project.org/esm-bundled/images/mens_tshirts.jpg" />
                    </div>
                    <span> Men's Outerwear </span>
                </Link>
                <Link className="half-link" to="/women-tee">
                    <div>
                        <img src="https://shop.polymer-project.org/esm-bundled/images/ladies_tshirts.jpg" />
                    </div>
                    <span> Men's Outerwear </span>
                </Link>
            </div>
        </div>
    );
}