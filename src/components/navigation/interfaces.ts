export interface NavigationProps {
    navigationItems: NavigationItem[];
    onMenuClick: any;

}

export interface NavigationItem {
    name: string;
    displayValue: string;
}