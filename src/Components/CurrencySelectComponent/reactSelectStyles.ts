import styles from './styles.scss';

const reactSelectStyles = {
    input: (provided) => ({
        ...provided,
        fontSize: styles.inputFontSize,
    }),
    container: (provided) => ({
        ...provided,
        padding: styles.inputPadding,
    }),
    singleValue: (provided) => ({
        ...provided,
        display: 'flex',
        alignItems: 'center',
        fontSize: styles.inputFontSize
    }),
    option: (provided) => ({
        ...provided,
        display: 'flex',
        alignItems: 'center',
        fontSize: styles.optionFontSize
    }),
    indicatorSeparator: () => ({
        display: undefined,
    }),
    dropdownIndicator: () => ({
        color: styles.droptDownIndicatorColor
    }),
    control: (provided) => ({
        ...provided,
        border: 'none',
        borderBottom: styles.inputBorder,
        boxShadow: undefined,
        borderRadius: 0,
        '&:hover': {
            borderBottom: styles.inputBorder,
        }
    }),
    valueContainer: (provided) => ({
        ...provided,
        padding: 0,
    })
};

export default reactSelectStyles;