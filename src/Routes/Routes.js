//import { FileDoneOutlined, PartitionOutlined, BookOutlined, ApiOutlined, ExclamationOutlined, HomeOutlined } from '@ant-design/icons';
import * as i from '@ant-design/icons';

const routes =
{
    sub: [
        {
            nm: "Функционал",
            icon: <i.PartitionOutlined />,
            sub: [
                { nm: "Структура ПО", url: "/struct" },
                { nm: "Покупное ПО", url: "/po" },
                { nm: "Зоны ответственности", url: "/zone" },
                { nm: "Интеграция с JIRA", url: "/jira" }
            ]
        },
        {
            nm: "Справочники",
            icon: <i.BookOutlined />,
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
            icon: <i.FileDoneOutlined />,
            sub: [
                { nm: "Отчет компоненты ИАС", url: "/reports/components" },
                { nm: "Отчет программный продукт", url: "/reports/product" },
                { nm: "Отчет структура ИАС", url: "/reports/struct" }
            ]
        },
        {
            nm: "Технический раздел",
            icon: <i.ApiOutlined />,
            sub: [
                { nm: "Состояние", url: "/tech/state", icon: <i.ExclamationOutlined /> },
                { nm: "ANT Design", url: "/tech/ant", icon: <i.ExclamationOutlined /> },
                { nm: "Стиль-контроль", url: "/tech/styleControl" },
                { nm: "Дерево", url: "/tech/tree", icon: <i.ExclamationOutlined /> },
                { nm: "Навигатор", url: "/", icon: <i.HomeOutlined /> }
            ]
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