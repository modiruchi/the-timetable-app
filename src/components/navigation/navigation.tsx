import * as React from 'react';
import { NavigationProps } from './interfaces';
import './navigation.scss';
import { AddGroup } from './addGroup/add-group';

export const Navigation: React.FC<NavigationProps> = ({ navigationItems, onMenuClick, selectedNotesGroup, addNewGroup }) => {
    const onNavigationClick = (e: any) => {
        e && e.target && e.target.nodeName === 'LABEL' && onMenuClick(e.target.innerText);
    }
    const addNewGroupClick = React.useCallback((newGroup)=>{
        addNewGroup([...navigationItems, newGroup])
    }, [navigationItems, addNewGroup]);
    
    return (
        <div className="navigation-container">
            <AddGroup onClick={addNewGroupClick}></AddGroup>
            <div onClick={onNavigationClick} className="navigation-menu">
                {navigationItems.map((navigationItem) => {
                    return (
                        <div key={navigationItem.name} className="navigation-menu-item">
                            <span><label className={`${selectedNotesGroup === navigationItem.name ? 'selected' : ''}`}>{navigationItem.displayValue}</label></span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}