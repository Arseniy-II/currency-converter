import React from 'react';
import CurrencyOptionComponent from '../CurrencyOptionComponent';
import {CurrencyType} from './currencies';

const getFlagOptionsForSelect = (currencies: CurrencyType[]): { value: string, label: React.ReactElement }[] => {
    return currencies.map(({cc}) => ({
        value: cc,
        label: <CurrencyOptionComponent currency={cc}/>
    }));
};

export default getFlagOptionsForSelect;