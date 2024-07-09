import './style.css'
import { RiDeleteBinLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";


function TodoItem({ titulo, descricao, onclickBTN }) {

    return (
        <>
            <div>
                <h3>{titulo}</h3>
                <p>{descricao}</p>
            </div>
            <div>

                <RiDeleteBinLine onClick={onclickBTN} className='icon' />
                {/* <FaCheck className='check-icon' /> */}

            </div>
        </>
    )
}

export default TodoItem;