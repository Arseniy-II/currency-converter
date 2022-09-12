import CurrencyFlag from 'react-currency-flags';
import styles from './styles.scss';
import React, {Fragment} from 'react';

interface currencyOptionProps {
    currency: string;
}

const CurrencyOptionComponent: React.FC<currencyOptionProps> = (props) => {
    const {currency} = props;
    return (
        <Fragment>
            <CurrencyFlag currency={currency } className={styles.flagIcon}/>
            {currency}
        </Fragment>
    );
};

export default CurrencyOptionComponent;