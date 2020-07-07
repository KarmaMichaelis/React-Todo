import React from 'react'

class TodoForm extends React.Component{
    constructor(){
        super()
        this.state={}
    }//end constructor
    
    render(){
        return(
            <form>
                <input
                type='text'
                value={this.state.value}
                //add onChange here
                
                />

                <button>Add ToDo Task</button>
                <button>Clear Completed Task</button>

            </form>
        )
    }//end render


}


export default TodoForm