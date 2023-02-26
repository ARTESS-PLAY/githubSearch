import React from 'react';
import Header from './components/Header/Header';
import GitSearchBlock from './widget/gitSearch/components/GitSearchBlock';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header></Header>
            <GitSearchBlock></GitSearchBlock>
        </div>
    );
};

export default App;
