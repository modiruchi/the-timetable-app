import { NotesGroup } from "../../common/data/mock-data";

export interface NavigationProps {
    navigationItems: NotesGroup[];
    onMenuClick: any;
    selectedNotesGroup: string;
    addNewGroup: any;

}