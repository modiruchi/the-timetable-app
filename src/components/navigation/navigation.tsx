import * as React from 'react';
import { NavigationProps } from './interfaces';
import './navigation.scss';

export const Navigation: React.FC<NavigationProps> = ({ navigationItems, onMenuClick, selectedNotesGroup }) => {
    const onNavigationClick = (e: any) => {
        e && e.target && e.target.nodeName === 'LABEL' && onMenuClick(e.target.innerText);
    }
    return (
        <div className="navigation-container">
            <div onClick={onNavigationClick} className="navigation-menu">
                {navigationItems.map((navigationItem) => {
                    return (
                        <div key={navigationItem.name} className="navigation-menu-item">
                            <span><label className={`${selectedNotesGroup === navigationItem.name? 'selected' : ''}`}>{navigationItem.displayValue}</label></span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}