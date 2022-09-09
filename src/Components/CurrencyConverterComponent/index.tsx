import React from 'react';
import NumberInputComponent from '../NumberInputComponent'
import styles from './styles.scss';

const Index: React.FC = () => {
    return (
        <div className={styles.box}>
            <NumberInputComponent label={'Amount:'} suffix={'EUR'}/>
        </div>
    );
};
export default Index;
