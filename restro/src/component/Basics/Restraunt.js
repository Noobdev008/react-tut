import './style.css';
import Menu from './menuApi.js'
import MenuCard from './MenuCard';
import Navbar from './Navbar';
import { useState } from 'react';

const uniqueList = [... new Set(Menu.map((currentEle) => {
    return currentEle.category;
})
),
"All",
];
console.log(uniqueList)

function Resturant() {

    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

    const filteritem = (catagory) => {
        if(catagory==="All"){
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((currentEle) => {
            return currentEle.category === catagory;
        });

        setMenuData(updatedList)

    }

    // console.log(menuData)
    return (
        <>
           <Navbar filteritem={filteritem} menuList={menuList}/>
            <MenuCard menuData={menuData} />
        </>
    );
}

export default Resturant;
