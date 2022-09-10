import React, {useMemo} from 'react';
import Select from 'react-select';
import { countries } from 'country-flag-icons';
import getFlagOptionsForSelect from './getFlagOptionsForSelect';
import reactSelectStyles from './reactSelectStyles';
import styles from './styles.scss';

interface currencySelectProps {
    label: string;
    className?: string;
}

const CurrencySelectComponent: React.FC<currencySelectProps> = (props) => {
    const inputOptions = useMemo(() => getFlagOptionsForSelect(countries), []);
    const {label, className} = props;
    return (
        <div className={className}>
            <div className={styles.label} data-testid="label">
                {label}
            </div>
            <Select options={inputOptions} styles={reactSelectStyles}/>
        </div>
    );
};

export default CurrencySelectComponent;
