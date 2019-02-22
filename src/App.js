import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <input id="upload" type="file" accept="image/*" className="upload" onChange={this.onFileSelected} hidden/>
        <img id="photo" className="photo" alt="photo" onClick={() => document.getElementById("upload").click()} src="placeholder.png"/>
        <input type="text" className="title" placeholder="Title"/>
        <input type="text" className="subtitle" placeholder="Subtitle"/> 
        <textarea rows="50" className="text" placeholder="Your text goes here..."/> 
      </div>
    );
  }

  onFileSelected = (event) => {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (event) => document.getElementById("photo").src = event.target.result;  
    reader.readAsDataURL(selectedFile);
  }
}

export default App;