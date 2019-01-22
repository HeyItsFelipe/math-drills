import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

const Menu = () => {

    return (
        <div className="Menu">
            <div className="Menu-inner">
                <div className="Menu-title">Select Drill</div>
                <div className="Menu-buttons">
                    <div>
                        <button className="Menu-buttons-btn">Addition</button>
                        <button className="Menu-buttons-btn">Subtraction</button>
                    </div>
                    <div>
                        <Link to="/multiplication-drill"><button className="Menu-buttons-btn">Multiplication</button></Link>
                        <button className="Menu-buttons-btn">Division</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;