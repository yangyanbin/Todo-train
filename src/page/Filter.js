import React, {memo} from "react";

function Filter (props){
    console.log('filter');
    const {handleClick,mode} = props;
    return (
        <button className='btn btn-primary' onClick={handleClick}>{mode.isShowAll?'ALL':'ACTIVE'}</button>
    );
}

export default memo(Filter);