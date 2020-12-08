const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g;

export function isUrl(path) {
    return reg.test(path);
}

const menuData = [
    {
        name: "Dashboard",
        icon: "dashboard",
        path: "dashboard",
    },
    {
        name: "Contact",
        icon: "contact",
        path: "contact",
    },
    {
        name: "Personnel",
        icon: "personnel",
        path: "personnel",
    },
    {
        name: "Project",
        icon: "project",
        path: "project",
    },
    {
        name: "Management",
        icon: "management",
        path: "management",
    },
    {
        name: "Finance",
        icon: "finance",
        path: "finance",
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

