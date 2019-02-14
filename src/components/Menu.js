import React from 'react';

const Menu = (props) => {
    return (
        <tr>
            <td>pv</td>
            {props.menu.courses.map((item, i) => <td key={i}>{item.title_fi}</td>)}
        </tr>
    )
}

export default Menu