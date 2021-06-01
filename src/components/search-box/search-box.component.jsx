import React from 'react'
import "./search-box.styles.css"
const SearchBox = ({
    placeholder,
    changeHandler
}) => {
    return (
        <input type="search" placeholder={placeholder} onChange={changeHandler}/>
    )
}

export default SearchBox;