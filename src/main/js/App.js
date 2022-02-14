import React, {Component} from 'react';
import ReactDom from 'react-dom';
import TopFixedFrame from "../../../frontend/src/components/TopFixedFrame";
import NavBar from "../../../frontend/src/components/NavBar";
import MainPhotoSlider from "../../../frontend/src/components/MainPhotoSlider";

export class App extends Component{
    render(){
        return(
            <div>
                <TopFixedFrame/>
                <NavBar/>
                <MainPhotoSlider/>
                <h1>Welcome to our Springboot-React Full Stack App</h1>
                <h1>Adding my line extra</h1>
                <h1>Adding my line extra 2</h1>
            </div>
        )
    }
}

export default App;
ReactDom.render(<App/>, document.querySelector('#app'));