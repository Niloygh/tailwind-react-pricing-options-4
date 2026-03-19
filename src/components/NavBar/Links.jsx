import React from 'react';

const Links = ({route}) => {
    return (
        <div>
            <li className='px-4 hover:bg-red-400'><a href={route.path}>{route.name}</a></li>
        </div>
    );
};

export default Links;