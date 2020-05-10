import * as React from 'react';
import { notesGroups } from '../../../common/data/mock-data';
import { NavigationItem } from '../../../components/navigation/interfaces'
import { Navigation } from '../../../components/navigation/navigation';
import { useState } from 'react';
import { Content } from '../../../components/content/content';
import './home.scss';

export const Home = () => {
    const [selectedNotesGroup, setSelectedNotesGroup] = useState(notesGroups[0].name)
    const navigationItems: NavigationItem[] = notesGroups.map((notesGroup) => {
        return { name: notesGroup.name, displayValue: notesGroup.displayValue };
    })

    return (
        <div className="home-container">
            <Navigation navigationItems={navigationItems} onMenuClick={setSelectedNotesGroup}></Navigation>
            <Content selectedNotesGroup={selectedNotesGroup}></Content>
        </div>
    )
}