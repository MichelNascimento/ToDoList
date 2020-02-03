import React from 'react';
import './ItemToDo.css';

class ItemToDo extends React.Component {
    render() {
        return (
            <>
                <main>
                    <ul>
                        <li>
                            <div id="itemTodo" className="itemToDo">
                                <span id="dateTodo">02/02/2020</span>
                                <hr />
                                <label id="descriptionToDo" className="descriptionToDo">Descrição do To Do</label>
                                <div className="actions">
                                    <button id="editToDO" className="editToDo">Editar</button>
                                    <button id="deleteToDo" className="deleteToDo">Excluir</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </main>
            </>
        )
    }
}

export default ItemToDo;