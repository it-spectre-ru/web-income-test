import React, {Component} from 'react';
import './App.css';
import Budget from './Budget/Budget';

class App extends Component {
  state = {
    budget: [
      {sum: 28}
    ]
  }

  switchSumHandler = () => {
    this.setState({
      budget: [
        {sum: 33}
      ]
    })
  };

  render() {
    return (
        <div className="App">
          <h1>header</h1>
          <label htmlFor="">Списание со счета</label>
          <Budget sum={this.state.budget[0].sum}></Budget>
          <button onClick={this.switchSumHandler}>Изменить бюджет</button>
        </div>
    );
  }
}

export default App;
