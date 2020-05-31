import * as React from 'react';
import { notesGroups } from '../../../common/data/mock-data';
import { Navigation } from '../../../components/navigation/navigation';
import { useState } from 'react';
import { Content } from '../../../components/content/content';
import './home.scss';

export const Home = () => {
    const [selectedNotesGroup, setSelectedNotesGroup] = useState(notesGroups[0].name)
    const [navigationItems, setNavigationItems] = useState(notesGroups);

    return (
        <div className="home-container">
            <Navigation navigationItems={navigationItems}
                addNewGroup={setNavigationItems}
                onMenuClick={setSelectedNotesGroup}
                selectedNotesGroup={selectedNotesGroup}>
            </Navigation>
            <Content selectedNotesGroup={selectedNotesGroup}></Content>
        </div>
    )
}