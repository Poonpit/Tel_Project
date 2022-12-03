import Item from "./Item";
import './Transaction.css';

const Transaction =(props)=>{
    const {Items} = props
    return(
        <ul className="item-list"> 
            {Items.map((element)=>{
                return <Item{...element} key={element.id}/>
            })}
        </ul>
    );
}
export default Transaction



