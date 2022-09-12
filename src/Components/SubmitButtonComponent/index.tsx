import React from 'react';
import classnames from 'classnames';
import styles from './styles.scss';

interface submitButtonComponentProps {
    text: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
    className?: string;
}

const SubmitButtonComponent: React.FC<submitButtonComponentProps> = (props) => {
    const {className, text, onClick} = props;
    return (
        <button  data-testid="submit-button" className={classnames(className, styles.button)} onClick={onClick}>
            {text}
        </button>
    );
};

export default SubmitButtonComponent;
