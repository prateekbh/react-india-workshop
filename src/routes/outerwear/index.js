import menItems from './men-items.json';
import womenItems from './women-items.json';
import { Link } from "react-router-dom";
import _ from "lodash";
import moment from 'moment';

import './index.css'
import { useEffect } from 'react';

export default function MensOuterwear({ isWomen }) {
    useEffect(function efect(){
        console.log("use effect")
        for (let i=0; i<50000; i++) {
            console.log(moment.ISO_8601())
        }
    }, [])
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
                                <img src={item.url||"https://shop.polymer-project.org/esm-bundled/data/images/10-15068B.jpg"} />
                            </div>
                            <div className="itemname">{_.upperFirst(item.name)}</div>
                            <div>{item.cost}</div>
                            <div>Added - {moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}