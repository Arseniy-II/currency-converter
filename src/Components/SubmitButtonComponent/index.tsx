import React from 'react';
import classnames from 'classnames';
import styles from './styles.scss';

interface submitButtonComponentProps {
    text: string;
    className?: string;
}

const SubmitButtonComponent: React.FC<submitButtonComponentProps> = (props) => {
    const {className, text} = props;
    return (
        <button  data-testid="submit-button" className={classnames(className, styles.button)}>
            {text}
        </button>
    );
};

export default SubmitButtonComponent;
