import React from 'react';
import ReactDOM from 'react-dom';
import CurrencyConverterComponent from './Components/CurrencyConverterComponent';
import './styles.scss';

ReactDOM.render(
    <React.StrictMode>
        <CurrencyConverterComponent />
    </React.StrictMode>,
    document.getElementById('app')
);