import React from 'react';
import { createRoot } from 'react-dom/client';
import CurrencyConverterComponent from './Components/CurrencyConverterComponent';
import './styles.scss';

const root = createRoot(document.getElementById('app'));
root.render(
    <React.StrictMode>
        <CurrencyConverterComponent />
    </React.StrictMode>
);