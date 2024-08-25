import { NavLink } from "react-router-dom";
import { TsidebarElements, TSidebarItems } from "../types/sidebar.types";

export const sideBarItemsGenertor = (sideBarItems: TSidebarItems[], role: string) => {

    return sideBarItems.reduce((acc: TsidebarElements[], items) => {
        if (items.name && items.path) {
            acc.push({
                key: items.name,
                label: <NavLink to={`/${role}/${items.path}`}>{items.name}</NavLink>
            })
        }
        if (items.children) {
            acc.push({
                key: items.name,
                label: items.name,
                children: items.children.map(child => {
                    if (child?.name) {
                        return {
                            key: child.name,
                            label: <NavLink to={`/${role}/${child.path}`}> {child.name}</NavLink>
                        }
                    }
                })
            })
        }
        return acc
    }, [])
};
