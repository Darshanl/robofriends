import React from 'react';

const SearchBox = ({searchField , searchChange}) => {
    return(
        <div className="pa2">
            <input type='search'
            className="pa2 ba bg--green bg-lightest-blue"
            placeholder='Search Robots'
            onChange={searchChange} />
        </div>
    )
}

export default SearchBox;