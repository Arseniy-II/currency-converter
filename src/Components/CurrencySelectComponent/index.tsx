import React, { useMemo} from 'react';
import Select, {ActionMeta, }  from 'react-select';
import currencies from './currencies';
import getFlagOptionsForSelect from './getFlagOptionsForSelect';
import reactSelectStyles from './reactSelectStyles';
import styles from './styles.scss';
import CurrencyOptionComponent from '../CurrencyOptionComponent';

export interface OptionType {
    label: React.ReactElement;
    value: string;
}

type changeReactSelectValue = (option: OptionType | null, actionMeta: ActionMeta<OptionType>) => void;

interface currencySelectProps {
    label: string;
    value: string;
    className?: string;
    onChange: changeReactSelectValue;
}

const CurrencySelectComponent: React.FC<currencySelectProps> = (props) => {
    const inputOptions = useMemo(() => getFlagOptionsForSelect(currencies), []);
    const {label, className, value, onChange} = props;
    return (
        <div className={className}>
            <div className={styles.label} data-testid="label">
                {label}
            </div>
            <Select
                options={inputOptions}
                styles={reactSelectStyles}
                value={{value: value, label: <CurrencyOptionComponent currency={value}/>}}
                onChange={onChange}
            />
        </div>
    );
};

export default CurrencySelectComponent;
