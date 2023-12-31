import {
    DashboardOutlined,
    ShoppingCartOutlined,
    ShoppingOutlined,
    ShopOutlined,
    UserOutlined,
    PictureOutlined,
    GiftOutlined,
    MailOutlined,
    UsergroupAddOutlined,
    SettingOutlined,
    MobileOutlined,
    FileTextOutlined,
    ScheduleOutlined,
} from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const dashBoardNavTree = [
    {
        key: "sidenav.main",
        path: `${APP_PREFIX_PATH}/main`,
        title: "sidanav.main",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [
            {
                key: "sidenav.main.dashboard",
                path: `${APP_PREFIX_PATH}/dashboard`,
                title: "sidenav.main.dashboard",
                icon: DashboardOutlined,
                breadcrumb: false,
                submenu: [],
            },
            {
                key: "sidenav.main.scheduler",
                path: `${APP_PREFIX_PATH}/scheduler`,
                title: "sidenav.main.scheduler",
                icon: ScheduleOutlined,
                breadcrumb: false,
                submenu: [],
            },
            {
                key: "sidenav.main.catalog",
                path: `${APP_PREFIX_PATH}/catalog`,
                title: "sidenav.main.catalog",
                icon: ShoppingCartOutlined,
                breadcrumb: true,
                submenu: [
                    {
                        key: "sidenav.main.catalog.items",
                        path: `${APP_PREFIX_PATH}/catalog/items`,
                        title: "sidenav.main.catalog.items",
                        icon: "",
                        breadcrumb: false,
                        submenu: [],
                    },
                    {
                        key: "sidenav.main.catalog.categories",
                        path: `${APP_PREFIX_PATH}/catalog/categories`,
                        title: "sidenav.main.catalog.categories",
                        icon: "",
                        breadcrumb: true,
                        submenu: [],
                    },
                    {
                        key: "sidenav.main.catalog.collection",
                        path: `${APP_PREFIX_PATH}/catalog/collection`,
                        title: "sidenav.main.catalog.collection",
                        icon: "",
                        breadcrumb: false,
                        submenu: [],
                    },
                    {
                        key: "sidenav.main.catalog.combo",
                        path: `${APP_PREFIX_PATH}/catalog/combo`,
                        title: "sidenav.main.catalog.combo",
                        icon: "",
                        breadcrumb: false,
                        submenu: [],
                    },
                ],
            },
            {
                key: "sidenav.main.orders",
                path: `${APP_PREFIX_PATH}/orders`,
                title: "sidenav.main.orders",
                icon: ShoppingOutlined,
                breadcrumb: false,
                submenu: [],
            },
            {
                key: "sidenav.main.clients",
                path: `${APP_PREFIX_PATH}/clients`,
                title: "sidenav.main.clients",
                icon: UserOutlined,
                breadcrumb: true,
                submenu: [
                    {
                        key: "sidenav.main.clients.list",
                        path: `${APP_PREFIX_PATH}/clients/list`,
                        title: "sidenav.main.clients.list",
                        icon: "",
                        breadcrumb: false,
                        submenu: [],
                    },
                    {
                        key: "sidenav.main.clients.group",
                        path: `${APP_PREFIX_PATH}/clients/group`,
                        title: "sidenav.main.clients.group",
                        icon: "",
                        breadcrumb: true,
                        submenu: [],
                    },
                ],
            },
            {
                key: "sidenav.main.banners",
                path: `${APP_PREFIX_PATH}/banners`,
                title: "sidenav.main.banners",
                icon: PictureOutlined,
                breadcrumb: false,
                submenu: [],
            },
            {
                key: "sidenav.main.promo",
                path: `${APP_PREFIX_PATH}/promo`,
                title: "sidenav.main.promo",
                icon: GiftOutlined,
                breadcrumb: false,
                submenu: [],
            },
            {
                key: "sidenav.main.offline-shops",
                path: `${APP_PREFIX_PATH}/offline-shops`,
                title: "sidenav.main.offline-shops",
                icon: ShopOutlined,
                breadcrumb: true,
                submenu: [
                    {
                        key: "sidenav.main.offline-shops.addresses",
                        path: `${APP_PREFIX_PATH}/offline-shops/addresses`,
                        title: "sidenav.main.offline-shops.addresses",
                        icon: "",
                        breadcrumb: false,
                        submenu: [],
                    },
                    {
                        key: "sidenav.main.offline-shops.geo",
                        path: `${APP_PREFIX_PATH}/offline-shops/geo`,
                        title: "sidenav.main.offline-shops.geo",
                        icon: "",
                        breadcrumb: true,
                        submenu: [],
                    },
                ],
            },
            {
                key: "sidenav.main.employees",
                path: `${APP_PREFIX_PATH}/employees`,
                title: "sidenav.main.employees",
                icon: UsergroupAddOutlined,
                breadcrumb: false,
                submenu: [],
            },
            {
                key: "sidenav.main.mailings",
                path: `${APP_PREFIX_PATH}/mailings`,
                title: "sidenav.main.mailings",
                icon: MailOutlined,
                breadcrumb: false,
                submenu: [],
            },
        ],
    },
    {
        key: "sidenav.system",
        path: `${APP_PREFIX_PATH}/system`,
        title: "sidenav.system",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [
            {
                key: "sidenav.system.settings",
                path: `${APP_PREFIX_PATH}/settings`,
                title: "sidenav.system.settings",
                icon: SettingOutlined,
                breadcrumb: false,
                submenu: [],
            },
            {
                key: "sidenav.system.mobile",
                path: `${APP_PREFIX_PATH}/mobile`,
                title: "sidenav.system.mobile",
                icon: MobileOutlined,
                breadcrumb: false,
                submenu: [],
            },
            {
                key: "sidenav.system.logs",
                path: `${APP_PREFIX_PATH}/logs`,
                title: "sidenav.system.logs",
                icon: FileTextOutlined,
                breadcrumb: false,
                submenu: [],
            },
        ],
    },
];

const navigationConfig = [...dashBoardNavTree];

export default navigationConfig;
