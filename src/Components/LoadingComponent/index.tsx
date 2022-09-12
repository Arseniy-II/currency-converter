import React from 'react';
import classnames from 'classnames';
import styles from './styles.scss';

interface loadingProps {
    className?: string;
}

const LoadingComponent: React.FC<loadingProps> = (props) => {
    const {className} = props;
    return (
        <svg
            className={classnames(className, styles.icon)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="20 20 60 60"
        >
            <rect width="6" height="12" x="47" y="24" fill="currentColor" rx="3" ry="6">
                <animate
                    attributeName="opacity"
                    begin="-0.91s"
                    dur="1s"
                    keyTimes="0;1"
                    repeatCount="indefinite"
                    values="1;0"
                ></animate>
            </rect>
            <rect
                width="6"
                height="12"
                x="47"
                y="24"
                fill="currentColor"
                rx="3"
                ry="6"
                transform="rotate(30 50 50)"
            >
                <animate
                    attributeName="opacity"
                    begin="-0.83s"
                    dur="1s"
                    keyTimes="0;1"
                    repeatCount="indefinite"
                    values="1;0"
                ></animate>
            </rect>
            <rect
                width="6"
                height="12"
                x="47"
                y="24"
                fill="currentColor"
                rx="3"
                ry="6"
                transform="rotate(60 50 50)"
            >
                <animate
                    attributeName="opacity"
                    begin="-0.75s"
                    dur="1s"
                    keyTimes="0;1"
                    repeatCount="indefinite"
                    values="1;0"
                ></animate>
            </rect>
            <rect
                width="6"
                height="12"
                x="47"
                y="24"
                fill="currentColor"
                rx="3"
                ry="6"
                transform="rotate(90 50 50)"
            >
                <animate
                    attributeName="opacity"
                    begin="-0.67s"
                    dur="1s"
                    keyTimes="0;1"
                    repeatCount="indefinite"
                    values="1;0"
                ></animate>
            </rect>
            <rect
                width="6"
                height="12"
                x="47"
                y="24"
                fill="currentColor"
                rx="3"
                ry="6"
                transform="rotate(120 50 50)"
            >
                <animate
                    attributeName="opacity"
                    begin="-0.583s"
                    dur="1s"
                    keyTimes="0;1"
                    repeatCount="indefinite"
                    values="1;0"
                ></animate>
            </rect>
            <rect
                width="6"
                height="12"
                x="47"
                y="24"
                fill="currentColor"
                rx="3"
                ry="6"
                transform="rotate(150 50 50)"
            >
                <animate
                    attributeName="opacity"
                    begin="-0.5s"
                    dur="1s"
                    keyTimes="0;1"
                    repeatCount="indefinite"
                    values="1;0"
                ></animate>
            </rect>
            <rect
                width="6"
                height="12"
                x="47"
                y="24"
                fill="currentColor"
                rx="3"
                ry="6"
                transform="rotate(180 50 50)"
            >
                <animate
                    attributeName="opacity"
                    begin="-0.416s"
                    dur="1s"
                    keyTimes="0;1"
                    repeatCount="indefinite"
                    values="1;0"
                ></animate>
            </rect>
            <rect
                width="6"
                height="12"
                x="47"
                y="24"
                fill="currentColor"
                rx="3"
                ry="6"
                transform="rotate(210 50 50)"
            >
                <animate
                    attributeName="opacity"
                    begin="-0.34s"
                    dur="1s"
                    keyTimes="0;1"
                    repeatCount="indefinite"
                    values="1;0"
                ></animate>
            </rect>
            <rect
                width="6"
                height="12"
                x="47"
                y="24"
                fill="currentColor"
                rx="3"
                ry="6"
                transform="rotate(240 50 50)"
            >
                <animate
                    attributeName="opacity"
                    begin="-0.25s"
                    dur="1s"
                    keyTimes="0;1"
                    repeatCount="indefinite"
                    values="1;0"
                ></animate>
            </rect>
            <rect
                width="6"
                height="12"
                x="47"
                y="24"
                fill="currentColor"
                rx="3"
                ry="6"
                transform="rotate(270 50 50)"
            >
                <animate
                    attributeName="opacity"
                    begin="-0.167s"
                    dur="1s"
                    keyTimes="0;1"
                    repeatCount="indefinite"
                    values="1;0"
                ></animate>
            </rect>
            <rect
                width="6"
                height="12"
                x="47"
                y="24"
                fill="currentColor"
                rx="3"
                ry="6"
                transform="rotate(300 50 50)"
            >
                <animate
                    attributeName="opacity"
                    begin="-0.083s"
                    dur="1s"
                    keyTimes="0;1"
                    repeatCount="indefinite"
                    values="1;0"
                ></animate>
            </rect>
            <rect
                width="6"
                height="12"
                x="47"
                y="24"
                fill="currentColor"
                rx="3"
                ry="6"
                transform="rotate(330 50 50)"
            >
                <animate
                    attributeName="opacity"
                    begin="0s"
                    dur="1s"
                    keyTimes="0;1"
                    repeatCount="indefinite"
                    values="1;0"
                ></animate>
            </rect>
        </svg>
    );
};

export default LoadingComponent;
