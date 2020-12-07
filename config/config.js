export default {
    dva: {},
    antd: {
        compact: true

    },
    routes: [
        // layout 框架
        {
            path: '/',
            component: "../layout",
            routes: []
        },
        // 这是初始化项目：Hello World
        {
            path: '/hi',
   			component: './Test/Hi.jsx',
        }
    ],

    proxy: {
        '/dev': {
            target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
            changeOrigin: false,
        },
    },
}