import {
    DashboardOutlined,
    TeamOutlined,
    CarOutlined,
    FolderOpenOutlined,
    LaptopOutlined,
    MoneyCollectOutlined,
    CalendarOutlined,
    SettingOutlined,
    MessageOutlined
} from '@ant-design/icons';


const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g;

export function isUrl(path) {
    return reg.test(path);
}

const menuData = [
    {
        name: "Dashboard",
        icon: DashboardOutlined,
        path: "dashboard",
    },
    {
        name: "Contact",
        icon: TeamOutlined,
        path: "contact",
    },
    {
        name: "Personnel",
        icon: CarOutlined,
        path: "personnel",
    },
    {
        name: "Project",
        icon: FolderOpenOutlined,
        path: "project",
    },
    {
        name: "Management",
        icon: LaptopOutlined,
        path: "management",
    },
    {
        name: "Finance",
        icon: MoneyCollectOutlined,
        path: "finance",
    },
    {
        name: "Calendar",
        icon: CalendarOutlined,
        path: "calendar"
    },
    {
        name: "Message",
        icon: MessageOutlined,
        path: "message"
    },
    {
        name: "Setting",
        icon: SettingOutlined,
        path: "setting"
    },
]

function formatter(data, parentPath = "/") {
    return data.map(item => {
        let {path} = item;


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

