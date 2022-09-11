import menItems from './men-items.json';
import womenItems from './women-items.json';
import { Link } from "react-router-dom";
import _ from "lodash";

import './index.css'

export default function MensOuterwear({ isWomen }) {
    const bannerSrc = isWomen ? "https://shop.polymer-project.org/esm-bundled/images/ladies_outerwear.jpg" : "https://shop.polymer-project.org/esm-bundled/images/ladies_outerwear.jpg"
    const items = isWomen ? womenItems : menItems
    return (
        <div>
            <div className="banner">
                <div>
                    <img src={bannerSrc} />
                </div>
                <span> Men's Outerwear </span>
            </div>
            <div className="item-list">
                {items.map(item => (
                    <div className="item">
                        <Link to="/product">
                            <div>
                                <img src="https://shop.polymer-project.org/esm-bundled/data/images/10-15068B.jpg" />
                            </div>
                            <div className="itemname">{_.upperFirst(item.name)}</div>
                            <div>{item.cost}</div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}