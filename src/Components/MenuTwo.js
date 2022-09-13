import { useState } from 'react';
import 'src/styles/MenuTwo.scss'

const MenuTwo = () => {

    const [menuComps, setMenuComps] = useState([
        { image: 'src/Images/Gallery.jpg', title: 'Gallery', id: 1 },
        { image: 'src/Images/Gallery.jpg', title: 'Title-2', id: 2 },
        { image: 'src/Images/Gallery.jpg', title: 'Title-3', id: 3 },
        { image: 'src/Images/Gallery.jpg', title: 'Title-4', id: 4 },
        { image: 'src/Images/Gallery.jpg', title: 'Title-5', id: 5 },
        { image: 'src/Images/Gallery.jpg', title: 'Title-6', id: 6 }
    ])

    return (
        <div className="menu-two">
            {menuComps.map((menuComp) => (
                <div className="menu-comp-preview" key={menuComp.id}>
                    <img src={require('src/Images/Gallery.jpg')} alt="" />
                    <div className="bottom">  
                        <h1>{ menuComp.title }</h1>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default MenuTwo;