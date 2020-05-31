import { NotesGroup, notesGroups, responseNotesGroups, INote } from './mock-data';

export const getNotesGroup = (selectedNotesGroupName: string): NotesGroup | undefined => {
    return notesGroups.find((notesGroup) => {
        return notesGroup.name === selectedNotesGroupName;
    });
}

export const getNotesFromGroup = (groupName: string): INote[] => {
    return responseNotesGroups.find((notesGroup) => {
        return notesGroup.name === groupName;
    }).notes.map((note) => {
        return {
            color: note.color,
            creationTimestamp: note.creationTimestamp,
            // modificationTimestamp: note.modificationTimestamp, //TODO giving error
            priority: note.priority,
            id: note.id,
            parent: note.parent
        };
    });
}

export const getValuesArrayFromNote = (note: INote) => {
    return responseNotesGroups.find(notesGroups => notesGroups.name === note.parent)
        .notes.find((noteObj) => noteObj.id === note.id).values;
}