import React from 'react';
import styles from './styles.scss';

interface numberInputProps {
    label: string;
    className?: string;
    suffix?: string;
}

const NumberInputComponent: React.FC<numberInputProps> = (props) => {
    const {label, suffix, className} = props;
    return (
        <div className={className}>
            <div className={styles.label} data-testid="label">
                {label}
            </div>
            <div className={styles.inputBox}>
                <input type="number" className={styles.input}/>
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
