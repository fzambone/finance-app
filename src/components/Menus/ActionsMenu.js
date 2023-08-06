import React, { useState, useEffect, useRef } from 'react';
import './ActionsMenu.css';
import PropTypes from 'prop-types';

const ActionsMenu = ({ actions }) => {
    const [menuOpen, setMenuOpen ] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        if(menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    }
    
    return (
        <div className='actions-menu' ref={menuRef}>
            <button onClick={() => setMenuOpen(!menuOpen)}>
                <i className='fa fa-ellipsis-v'></i>
            </button>
            {menuOpen && (
                <ul className='menu-list'>
                    {actions.map((action, index) => (
                        <li key={index} onClick={() => {
                            action.callback();
                            setMenuOpen(false);
                        }}>
                            {action.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

ActionsMenu.defaultProps = {
    actions: []
}

ActionsMenu.propTypes = {
    actions: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            callback: PropTypes.func.isRequired
        })
    ).isRequired
};

export default ActionsMenu;