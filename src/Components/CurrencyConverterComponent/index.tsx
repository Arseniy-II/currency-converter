import React from 'react';
import NumberInputComponent from '../NumberInputComponent';
import CurrencySelectComponent from '../CurrencySelectComponent';
import styles from './styles.scss';

const Index: React.FC = () => {
    return (
        <div className={styles.box}>
            <div>
                <CurrencySelectComponent label={'From:'}/>
                <CurrencySelectComponent label={'To:'}/>
            </div>
            <NumberInputComponent label={'Amount:'} suffix={'EUR'}/>
        </div>
    );
};
export default Index;
