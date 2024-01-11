import logo from './logo.svg';
import './App.css';
import React from 'react';

function MyButton() {
    return (
        <button>Click me!</button>
    );
}

class TestComponent extends React.Component {
    // Just for the sandbox
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click me!</button>
            </div>
        );
    }
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <MyButton />
                <TestComponent />
            </header>
        </div>
    );
}

export default App;
