import React from 'react';
import TodoList from './components/TodoList.js'
import TodoForm from './components/TodoForm'

const list=[
      {
          task:'Bake Cookies',
          completed:'falsed',
          id:Date.now()
      },
      {
          task:'Wash Dog',
          completed:'falsed',
          id:Date.now()
      }
  ]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state={
      list:list
    }
  }
  render() {
    return (
      <div className='App'>
        <h2>Welcome to your Todo App!</h2>
        <TodoList list={this.state.list}/>
        <TodoForm/>
      </div>
    );
  }
}

export default App;
