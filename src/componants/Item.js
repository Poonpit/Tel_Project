import PropTypes from 'prop-types';
import './Item.css'

const Item =(props)=>{
    const {name,tel} = props
    let state = ""
    if( name.startsWith("นาง")) {
        state = "girl"
    }else if( name.startsWith("นาย")) {
        state = "boy"
    }else{
        state = "other"
    }
    return <li className={state}>{name}<span>{tel}</span></li>
}

Item.propType={
    name:PropTypes.string,
    tel:PropTypes.string
}
export default Item