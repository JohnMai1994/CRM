import { ContactIcon, SettingIcon, MessageIcon, CalendarIcon, DashboardIcon, FinanceIcon, ManagementIcon, PersonnelIcon, ProjectIcon} from "../staticIcon"

const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g;

export function isUrl(path) {
    return reg.test(path);
}

const menuData = [
    {
        name: "Dashboard",
        icon: DashboardIcon,
        path: "dashboard",
    },
    {
        name: "Contact",
        icon: ContactIcon,
        path: "contact",
    },
    {
        name: "Personnel",
        icon: PersonnelIcon,
        path: "personnel",
    },
    {
        name: "Project",
        icon: ProjectIcon,
        path: "project",
    },
    {
        name: "Management",
        icon: ManagementIcon,
        path: "management",
    },
    {
        name: "Finance",
        icon: FinanceIcon,
        path: "finance",
    },
    {
        name: "Calendar",
        icon: CalendarIcon,
        path: "calendar"
    },
    {
        name: "Message",
        icon: MessageIcon,
        path: "message"
    },
    {
        name: "Setting",
        icon: SettingIcon,
        path: "setting"
    },
]

function formatter(data, parentPath = "/") {
    return data.map(item => {
        let {path } = item;


        // 当使用真实后端的api时候用到
        // if (!isUrl(path)) {
        //     path = parentPath + item.path
        // }

        return {
            ...item,
            path,
        };
    })
}

export const getMenuData = () => formatter(menuData)

