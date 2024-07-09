import { useEffect, useState } from 'react';

import './style.css'
import TodoItem from '../TodoItem';
import { IoSearch } from "react-icons/io5";
import { toast } from 'react-toastify';

function TodoList() {

    const [isCompleteScreen, setIsCompleteScreen] = useState(false);
    const [allTodos, setAllTodos] = useState([])
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');

    //
    function handleAddTodo() {
        if (titulo === '' || descricao === '') {
            // alert("Preencha todos os campos.");
            toast.info("Preencha todos os campos.")
            return
        }

        let newTodoItem = {
            titulo: titulo,
            descricao: descricao
        }

        let updatedTodoArr = [...allTodos]
        updatedTodoArr.push(newTodoItem);
        setAllTodos(updatedTodoArr);
        localStorage.setItem('todolist', JSON.stringify(updatedTodoArr))
        setTitulo('')
        setDescricao('')
        toast.success("Item adicionado com sucesso.")
    }

    function handleDeleteTodo(index) {
        let reducedTodo = [...allTodos]
        reducedTodo.splice(index, 1)

        localStorage.setItem('todolist', JSON.stringify(reducedTodo));

        setAllTodos(reducedTodo)
        toast.success('Item deletado com sucesso.')

    }

    useEffect(() => {
        let savedTodo = JSON.parse(localStorage.getItem('todolist'));

        if (savedTodo) {
            setAllTodos(savedTodo);
        }

    }, [])

    return (
        <div className='app' >
            

            <div className='todo-wrapper' >
                <div className='todo-input' >
                    <div className='todo-input-item' >
                        <label>Title*</label>
                        <input
                            type='text'
                            placeholder='Digite o titulo'
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        />
                    </div>
                    <div className='todo-input-item' >
                        <label>Descrição*</label>
                        <input
                            type='text'
                            placeholder='Descrição'
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </div>
                    <div className='todo-input-item' >
                        <button type='button' onClick={handleAddTodo} className='primaryBtn' >Adicionar</button>
                    </div>
                </div>

                <div className='btn-area' >
                    {/* <button className={`secondaryBtn ${isCompleteScreen === false && 'active'}`} onClick={() => setIsCompleteScreen(false)} >Todo</button>
                    <button className={`secondaryBtn ${isCompleteScreen === true && 'active'}`} onClick={() => setIsCompleteScreen(true)}  >Complemento</button> */}
                    <button className={`secondaryBtn ${isCompleteScreen === false && 'active'}`}><IoSearch /></button>
                    <input className='inputPesq' type="search" name="pesquisr" placeholder='Pesquisar' />
                </div>

                <div className='todo-list' >
                    {allTodos.map((item, index) => {

                        return (
                            <div key={index} className='todo-list-item'  >
                                <TodoItem titulo={item.titulo} descricao={item.descricao} onclickBTN={() => handleDeleteTodo(index)} />
                            </div>
                        )


                    })}
                </div>

            </div>
        </div>
    )
}

export default TodoList;

