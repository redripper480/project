import './Searchbar.css'
import React from 'react';



function Searchbar(){
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');
    return(
        <div className="main-cont">
            <div className='left-cont'>
            <p className='search-tag'>Search : </p>
             <input
             className='search_input'
             placeholder='Input Search query'
            type="text"
            />
            </div>
            <div className='search-btn-cont'>
                <button className='search-button'>Search</button>
            </div>
        </div>
    )
}

export default Searchbar