import {useState,useEffect} from 'react'
import './FormComponent.css'
import { v4 as uuidv4 } from 'uuid';

const FormComponent =(props)=>{
    const [name,setName] = useState('')
    const [tel,setTel] = useState('')
    const [formValid,setFormVaild] = useState(false)

    const inputName=(Event)=>{
        setName(Event.target.value)
    }
    const inputTel=(Event)=>{
        setTel(Event.target.value)
    }
    const saveItem=(Event)=>{
        Event.preventDefault()
        const itemData = {
            id:uuidv4(),
            name:name,
            tel:tel
        }
        props.onAddItem(itemData)
        setName('')
        setTel('')
    }
    useEffect(()=>{
        const checkData = name!=="" && tel!==""
        setFormVaild(checkData)
    },[name,tel])
    return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>กรุณากรอก คำนำหน้า-ชื่อ-นามสกุล สมาชิกของคุณ</label>
                    <input type="text" placeholder="คำนำหน้า-ชื่อ-นามสกุล"  onChange={inputName} value={name}/>
                </div>
                <div>
                    <label>กรุณากรอก เบอร์โทรศัพท์ สมาชิกของคุณ</label>
                    <input type="text" placeholder="XXX-XXX-XXXX" onChange={inputTel} value={tel}/>
                </div>
                <div>
                    <button type="submit" className="btn" disabled={!formValid}>เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent