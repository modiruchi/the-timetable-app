export const notesGroups: NotesGroup[] = [
    {
        name: 'Atlassian',
        displayValue: 'Atlassian',
        notes: [

            {
                values: [{ value: 'Note stext 1' }, { value: 'Note stext 2' }],
                color: '#ff7eb9',
                creationTimestamp: Date.now(),
                priority: 1
            },
            {
                values: [{ value: 'Note stext 2' }, { value: 'Note stext 2' }],
                color: '#feff9c',
                creationTimestamp: Date.now(),
                priority: 2
            }

        ]
    },
    {

        name: 'Atlassian1',
        displayValue: 'Atlassian1',
        notes: [

            {
                values: [{ value: '222Note stext 1' }, { value: '222Note stext 2' }],
                color: '#ff7eb9',
                creationTimestamp: Date.now(),
                priority: 1
            },
            {
                values: [{ value: '222Note stext 2' }, { value: '222Note stext 2' }],
                color: '#feff9c',
                creationTimestamp: Date.now(),
                priority: 2
            }

        ]
    }

]

export interface NotesGroup {
    notes: Note[];
    name: string;
    displayValue: string;
}

export interface Note {
    values: NoteValue[];
    color: string;
    creationTimestamp: number;
    modificationTimestamp?: number;
    priority: number;
}

export interface NoteValue {
    value: string;
}