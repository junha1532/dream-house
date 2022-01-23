import React, {Component} from 'react';
import ReactDom from 'react-dom';

export class App extends Component{
    render(){
        return(
            <div>
                <h1>Welcome to our Springboot-React Full Stack App</h1>
                <h1>Adding my line 1</h1>
            </div>
        )
    }
}

export default App;
ReactDom.render(<App/>, document.querySelector('#app'));