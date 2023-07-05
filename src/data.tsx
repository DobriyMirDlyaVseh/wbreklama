import React from "react";
import Assessment from '@material-ui/icons/Assessment';
import PermIdentity from '@material-ui/icons/PermIdentity';
import SettingsPower from '@material-ui/icons/SettingsPower';
import VpnKey from '@material-ui/icons/VpnKey';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { cyan, pink, purple } from '@material-ui/core/colors';
import StoreOutlinedIcon from '@material-ui/icons/StoreOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
const cyan600 = cyan['600'];
const pink600 = pink['600'];
const purple600 = purple['600'];

const data = {
  menus: [
    { text: "Панель управления", icon: <Assessment />, link: "/dashboard" },
    { text: "Заказчик", icon: <PermIdentity />, link: "/customers" },
    { text: "Заказ", icon: <ShoppingCartOutlinedIcon />, link: "/orders" },
    { text: "Товар", icon: <StoreOutlinedIcon />, link: "/products" },
    { text: "О", icon: <InfoOutlinedIcon />, link: "/about" }
  ],
  userMenus: [
    { text: "Выход", icon: <SettingsPower />, link: "/login" },
    { text: "Изменить пароль", icon: <VpnKey />, link: "" }
  ],
  tablePage: {
    items: [
      { id: 1, name: "Товар 1", price: "4500 руб.", category: "Категория 1" },
      { id: 2, name: "Товар 2", price: "13500 руб.", category: "Категория 2" },
      { id: 3, name: "Товар 3", price: "22500 руб.", category: "Категория 3" },
      { id: 4, name: "Товар 4", price: "6300 руб.", category: "Категория 4" },
      { id: 5, name: "Товар 5", price: "40500 руб.", category: "Категория 5" },
      { id: 6, name: "Товар 6", price: "85500 руб.", category: "Категория 6" },
      { id: 7, name: "Товар 7", price: "49500 руб.", category: "Категория 7" },
      { id: 8, name: "Товар 8", price: "67500 руб.", category: "Категория 8" },
      { id: 9, name: "Товар 9", price: "85500 руб.", category: "Категория 6" },
      { id: 10, name: "Товар 10", price: "49500 руб", category: "Категория 7" },
      { id: 11, name: "Товар 11", price: "67500 руб.", category: "Категория 8" }
    ]
  },
  dashBoardPage: {
    recentProducts: [
      {
        id: 1,
        title: "Samsung TV",
        text: "Samsung 32 1080p 60Hz LED Smart HDTV."
      },
      { id: 2, title: "Playstation 4", text: "PlayStation 3 500 GB System" },
      {
        id: 3,
        title: "Apple iPhone 6",
        text: "Apple iPhone 6 Plus 16GB Factory Unlocked GSM 4G "
      },
      {
        id: 4,
        title: "Apple MacBook",
        text: "Apple MacBook Pro MD101LL/A 13.3-Inch Laptop"
      }
    ],
    monthlySales: [
      { name: "Янв.", uv: 3700 },
      { name: "Фев.", uv: 3000 },
      { name: "Март", uv: 2000 },
      { name: "Апр.", uv: 2780 },
      { name: "Май", uv: 2000 },
      { name: "Июнь", uv: 1800 },
      { name: "Июль", uv: 2600 },
      { name: "Авг.", uv: 2900 },
      { name: "Сен.", uv: 3500 },
      { name: "Окт.", uv: 3000 },
      { name: "Ноя.", uv: 2400 },
      { name: "Дек.", uv: 2780 }
    ],
    newOrders: [
      { pv: 2400 },
      { pv: 1398 },
      { pv: 9800 },
      { pv: 3908 },
      { pv: 4800 },
      { pv: 3490 },
      { pv: 4300 }
    ],
    browserUsage: [
      { name: "Хром", value: 800, color: cyan600, icon: <ExpandMore /> },
      { name: "Файерфокс", value: 300, color: pink600, icon: <ChevronRight /> },
      { name: "Сафари", value: 300, color: purple600, icon: <ExpandLess /> }
    ],
    lineBarChart: [
      { name: "Страница 1", uv: 590, pv: 800, amt: 1400 },
      { name: "Страница 2", uv: 868, pv: 967, amt: 1506 },
      { name: "Страница 3", uv: 1397, pv: 1098, amt: 989 },
      { name: "Страница 4", uv: 1480, pv: 1200, amt: 1228 },
      { name: "Страница 5", uv: 1520, pv: 1108, amt: 1100 },
      { name: "Страница 6", uv: 1400, pv: 680, amt: 1700 }
    ]
  }
};

export default data;
