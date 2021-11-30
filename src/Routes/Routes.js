import { AppstoreOutlined, MailOutlined, SettingOutlined, FileDoneOutlined, PartitionOutlined, BookOutlined, ApiOutlined, ExclamationOutlined } from '@ant-design/icons';

const routes =
{
    sub: [
        {
            nm: "Функционал",
            icon: <PartitionOutlined />,
            sub: [
                { nm: "Структура ПО", url: "/struct" },
                { nm: "Покупное ПО", url: "/po" },
                { nm: "Зоны ответственности", url: "/zone" },
                { nm: "Интеграция с JIRA", url: "/jira" }
            ]
        },
        {
            nm: "Справочники",
            icon: <BookOutlined />,
            sub: [
                { nm: "Типы документов", url: "/books/dt" },
                { nm: "Типы носителей", url: "/books/mt" },
                { nm: "Типы лицензий", url: "/books/ct" },
                { nm: "Типы ПО", url: "/books/pt" },
                { nm: "Проекты", url: "/books/projects" },
                { nm: "Контрагенты", url: "/books/contr" }
            ]
        },
        {
            nm: "Отчеты",
            icon: <FileDoneOutlined />,
            sub: [
                { nm: "по компонентам ИАС", url: "/reports/components" },
                { nm: "по программному продукту", url: "/reports/product" },
                { nm: "по структуре ИАС", url: "/reports/struct" }
            ]
        },
        {
            nm: "Тех. часть",
            icon: <ApiOutlined />,
            sub: [
                { nm: "Состояние", url: "/tech/state", icon: <ExclamationOutlined /> },
                { nm: "ANT Design", url: "/tech/ant", icon: <ExclamationOutlined /> },
                { nm: "Стиль-контроль", url: "/tech/style" },
                { nm: "Дерево", url: "/tech/tree", icon: <ExclamationOutlined /> }
            ]
        },
        {
            nm: "Навигатор", url: "/", icon: <ExclamationOutlined />
        }
    ]
}

export const findRoute = (url, sub) => {

    if (sub) {
        sub.forEach(e => {
            if (e.url == url) {
                console.log(e.nm, e.url, url)
                return e.nm
            }
            if(e.sub){
                return findRoute(url, e.sub)
            }
        });
    }
}



export default routes