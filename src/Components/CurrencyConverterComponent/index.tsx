import React from 'react';
import NumberInputComponent from '../NumberInputComponent';
import ChangeButtonComponent from '../ChangeButtonComponent';
import CurrencySelectComponent from '../CurrencySelectComponent';
import SubmitButtonComponent from '../SubmitButtonComponent';
import styles from './styles.scss';
import classnames from 'classnames';

const Index: React.FC = () => {
    return (
        <div className={styles.box}>
            <div className={styles.inputBox}>
                <CurrencySelectComponent className={styles.currencySelect} label={'From:'}/>
                <ChangeButtonComponent className={styles.changeButton} />
                <CurrencySelectComponent className={styles.currencySelect} label={'To:'}/>
            </div>
            <div className={classnames(styles.inputBox, styles.marginTop)}>
                <NumberInputComponent label={'Amount:'} suffix={'EUR'}/>
                <div className={styles.gap}/>
                <NumberInputComponent label={'Converted to:'} suffix={'GBP'}/>
            </div>
            <SubmitButtonComponent text='Convert' className={styles.submitButton}/>
            <div className={styles.infoBox}>
                <div className={styles.currencyRateBox}>
                    <div className={styles.icon}/> 1 EUR = 0.92214 GBP
                </div>
                <div className={styles.noticeBox}>
                    All figures are live mid-market rates, which are for informational purposes only. To see the rates for money transfer, please select sending money option.
                </div>
            </div>
        </div>
    );
};
export default Index;
