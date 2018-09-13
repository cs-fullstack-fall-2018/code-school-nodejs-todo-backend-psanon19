import React, {Component} from 'react'

class ToDoList extends Component {

    render() {
        var forEachItem = this.props.arr.map(
            eachItem => {
                let booleanInfo = eachItem.isDone;
                let itemTrue = "done ";
                let itemFalse = "not done ";
                let fetch = " ";
                if (booleanInfo === false)
                    fetch = "not done";
                else if (booleanInfo === true)
                    fetch = "done";
                    
                return (
                    <div className='ToDolist'>
                        <p>{eachItem.username} has to {eachItem.todo} is <u>{fetch}</u></p>
                        <hr/>
                    </div>


                )
            }
        );

        return (
            <div>
                <h2>{forEachItem}</h2>
            </div>
        );
    }
}

export default ToDoList;