import React, {Fragment} from 'react';
import flags from 'country-flag-icons/react/3x2';
import countryToCurrency from 'country-to-currency';
import styles from './styles.scss';

const getFlagOptionsForSelect = (countries: string[]): { value: string, label: React.ReactElement }[] => {
    const flagOptionsForSelect = [];
    countries.forEach((countryCode) => {
        const ReactSVGIcon = flags[countryCode];
        const currency = countryToCurrency[ countryCode ];
        if (ReactSVGIcon && currency) {
            const CurrencyComponent = <Fragment><ReactSVGIcon className={styles.flagIcon}/>{currency}</Fragment>;
            flagOptionsForSelect.push({
                value: countryCode,
                label: CurrencyComponent
            });
        }
    });
    return flagOptionsForSelect;
};

export default getFlagOptionsForSelect;