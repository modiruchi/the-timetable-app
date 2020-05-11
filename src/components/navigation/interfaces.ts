export interface NavigationProps {
    navigationItems: NavigationItem[];
    onMenuClick: any;
    selectedNotesGroup: string;

}

export interface NavigationItem {
    name: string;
    displayValue: string;
}