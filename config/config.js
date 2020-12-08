export default {
    dva: {},
    antd: {
        dark: true, // 开启暗色主题
       // compact: true, // 开启紧凑主题
    },
    routes: [
        // 这是初始化项目：Hello World
        {
            path: '/hi',
   			component: './HelloWorld',
        },
        // layout 框架
        {
            path: '/',
            component: "../layout",
            routes: [
                {
                    path: '/',
                    component: "./Main/Dashboard"
                },
                {
                    path: "dashboard",
                    component: "./Main/Dashboard"
                },
                {
                    path: "contact",
                    component: "./Main/Contact"
                },
                {
                    path: "personnel",
                    component: "./Main/Personnel"
                },
                {
                    path: "project",
                    component: "./Main/Project"
                },
                {
                    path: "management",
                    component: "./Main/Management"
                },
                {
                    path: "finance",
                    component: "./Main/Finance"
                },
            ]
        },
    ],

    proxy: {
        '/dev': {
            target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
            changeOrigin: false,
        },
    },
}