import React from 'react';
import './AddToDo.css';

class AddToDo extends React.Component {
    render() {
        return (
            <>
                <form className="ToDoRegister">
                    <label htmlFor="newToDo">Novo To Do: </label>
                    <input type="text" id="newToDo" className="newToDo" />

                    <label htmlFor="dateToDo">Data para realizar: </label>
                    <input type="text" id="dateToDo" className="dateToDo" placeholder="00/00/0000"/>
            
                    <button type="submit" id="btnAdd" className="btnAdd">Adicionar</button>
                </form>
            </>
        )
    }
}

export default AddToDo;
