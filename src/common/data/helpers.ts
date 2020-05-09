import { NavigationItem } from '../../components/navigation/interfaces';
import { NotesGroup, notesGroups } from './mock-data';

export const getNavigationItem = (name: string, displayValue: string): NavigationItem => {
    return ({ 'name': name, 'displayValue': displayValue });
}

export const getNotesGroup = (selectedNotesGroupName: string): NotesGroup | undefined=> {
    return notesGroups.find((notesGroup)=>{
        return notesGroup.name === selectedNotesGroupName;
    });
}