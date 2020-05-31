export const responseNotesGroups = [
    {
        name: 'Atlassian',
        displayValue: 'Atlassian',
        notes: [

            {
                values: [{ value: 'Note stext 1', id: '1', parent: 'AtlassianNote1' }, { value: 'Note stext 2', id: '2', parent: 'AtlassianNote1' }],
                color: '#ff7eb9',
                creationTimestamp: Date.now(),
                priority: 1,
                id: 'AtlassianNote1',
                parent: 'Atlassian'
            },
            {
                values: [{ value: 'Note stext 2', id: '1', parent: 'AtlassianNote2' }, { value: 'Note stext 2', id: '2', parent: 'AtlassianNote2' }],
                color: '#7afcff',
                creationTimestamp: Date.now(),
                priority: 2,
                id: 'AtlassianNote2',
                parent: 'Atlassian'
            }

        ]
    },
    {

        name: 'Atlassian1',
        displayValue: 'Atlassian1',
        notes: [

            {
                values: [{ value: '222Note stext 1', id: '1', parent: 'Atlassian1Note1' }, { value: '222Note stext 2', id: '2', parent: 'Atlassian1Note1' }],
                color: '#ff7eb9',
                creationTimestamp: Date.now(),
                priority: 1,
                id: 'Atlassian1Note1',
                parent: 'Atlassian1'
            },
            {
                values: [{ value: '222Note stext 2', id: '1', parent: 'Atlassian1Note2' }, { value: '222Note stext 2', id: '2', parent: 'Atlassian1Note2' }],
                color: '#7afcff',
                creationTimestamp: Date.now(),
                priority: 2,
                id: 'Atlassian1Note2',
                parent: 'Atlassian1'
            }

        ]
    }

]

export let notesGroups: NotesGroup[] = [];

const processData = () => {
    notesGroups = responseNotesGroups.map((noteGroup) => {
        return { name: noteGroup.name, displayValue: noteGroup.displayValue };
    });
}

processData();

export interface NotesGroup {
    name: string;
    displayValue: string;
}

export interface INote {
    color: string;
    creationTimestamp: number;
    modificationTimestamp?: number;
    priority: number;
    id: string;
    parent: string;
}

export interface NoteValue {
    value: string;
    id: string;
    parent: string;
}