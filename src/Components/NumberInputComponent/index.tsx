import React from 'react';
import styles from './styles.scss';

interface numberInputProps {
    label: string;
    className?: string;
    suffix?: string;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLElement>;
}

const NumberInputComponent: React.FC<numberInputProps> = (props) => {
    const {label, suffix, className, onChange, value} = props;
    return (
        <div className={className}>
            <div className={styles.label} data-testid="label">
                {label}
            </div>
            <div className={styles.inputBox}>
                <input type="number" className={styles.input} value={value} onChange={onChange}/>
                {
                    suffix && <div className={styles.suffix} data-testid="suffix">
                        {suffix}
                    </div>
                }
            </div>
        </div>
    );
};

export default NumberInputComponent;
