import React, { Component } from 'react';
import List from './List'
import './App.css';
import TheDate from './state/TheDate';
import Counter from './state/Counter';

class App extends Component {

    static defaultProps = {
        store: {
            lists: [],
            allCards: {},
        }
    };

    render() {
        const { store } = this.props
        return (
            <main className='App'>
                <header className='App-header'>
                    <h1>Trelloyes!</h1>
                    <Counter count={123} step={3}/>
                    <TheDate />
                </header>
                <div className='App-list'>
                    {store.lists.map(list => (
                        <List
                            key={list.id}
                            header={list.header}
                            cards={list.cardIds.map(id => store.allCards[id])}
                        />
                    ))}
                </div>
            </main>
        );
    }

}

export default App;
