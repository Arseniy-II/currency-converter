import React, {Fragment, useState, useCallback, useEffect} from 'react';
import NumberInputComponent from '../NumberInputComponent';
import ChangeButtonComponent from '../ChangeButtonComponent';
import CurrencySelectComponent, {OptionType} from '../CurrencySelectComponent';
import LoadingComponent from '../LoadingComponent';
import SubmitButtonComponent from '../SubmitButtonComponent';
import styles from './styles.scss';
import classnames from 'classnames';

enum RequestState {
    Loading = 'Loading',
    Error = 'Error',
    Success = 'Success',
}

type RequestStateType = keyof typeof RequestState;

const Index: React.FC = () => {
    const [from, setFrom] = useState('EUR');
    const [to, setTo] = useState('GBP');
    const [amount, setAmount] = useState('1.00');
    const [result, setResult] = useState('');
    const [rate, setRate] = useState('');
    const [requestState, setRequestState] = useState<RequestStateType>(RequestState.Success);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLustUpdateFromResponse, setIsLustUpdateFromResponse] = useState(false);
    const [isLastUpdateFromResultInput, setIsLastUpdateFromResultInput] = useState(false);

    const fetchRates = useCallback((to: string, from: string, amount: string, reverse?: boolean): void => {
        setRequestState(RequestState.Loading);
        const url= `https://my.transfergo.com/api/fx-rates?from=${to}&to=${from}&amount=${amount}`;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (!data?.rate || !data.toAmount) {
                    throw Error;
                }
                if (reverse) {
                    // no need to setRate value here as we know that we are here only when user changes result amount
                    // it means rate is already fetched and set
                    // we can calculate revers rate here and set it, but it will be inconsistent with actual rate
                    setAmount(data.toAmount);
                    setIsLustUpdateFromResponse(true);
                } else {
                    setRate(data.rate);
                    setResult( data.toAmount);
                    setIsLustUpdateFromResponse(true);
                }
                setRequestState(RequestState.Success);
            })
            .catch(() => {
                setRequestState(RequestState.Error);
            });
    }, []);

    const handleSubmit = useCallback(() => {
        setIsSubmitted(true);
    }, []);

    const handleAmountChange = useCallback((event) => {
        setAmount((event.target as HTMLInputElement).value);
        setIsLustUpdateFromResponse(false);
        setIsLastUpdateFromResultInput(false);
    }, []);

    const handleResultChange = useCallback((event) => {
        setResult((event.target as HTMLInputElement).value);
        setIsLustUpdateFromResponse(false);
        setIsLastUpdateFromResultInput(true);
    }, []);

    const changeCurrency = useCallback(() => {
        setFrom(to);
        setTo(from);
        setIsLustUpdateFromResponse(false);
        setIsLastUpdateFromResultInput(false);
    }, [to, from]);

    const handleToChange = useCallback((option: OptionType | null): void => {
        setTo(option.value);
        setIsLustUpdateFromResponse(false);
        setIsLastUpdateFromResultInput(false);
    }, []);

    const handleFromChange = useCallback((option: OptionType | null): void => {
        setFrom(option.value);
        setIsLustUpdateFromResponse(false);
        setIsLastUpdateFromResultInput(false);
    }, []);

    useEffect(() => {
        // Do not fetch if user didn't pressed submit button yet OR if last values change came from back-end response
        if (isSubmitted === false || isLustUpdateFromResponse) {
            return;
        }
        if (!isLastUpdateFromResultInput) {
            // Do ordinary fetch
            fetchRates(from, to, amount);
        } else {
            // Do reverse fetch when user changes result input value
            fetchRates(to, from, result, true);
        }
    }, [fetchRates, to, from, amount, result, isSubmitted, isLustUpdateFromResponse, isLastUpdateFromResultInput]);

    return (
        <div className={styles.box}>
            <div className={styles.inputBox}>
                <CurrencySelectComponent className={styles.currencySelect} label={'From:'} value={from} onChange={handleFromChange}/>
                <ChangeButtonComponent className={styles.changeButton} onClick={changeCurrency}/>
                <CurrencySelectComponent className={styles.currencySelect} label={'To:'} value={to} onChange={handleToChange}/>
            </div>
            <div className={classnames(styles.inputBox, styles.marginTop)}>
                <NumberInputComponent label={'Amount:'} suffix={from} className={styles.numberInput} value={amount} onChange={handleAmountChange}/>
                { isSubmitted && <Fragment>
                    <div className={styles.gap}/>
                    <NumberInputComponent label={'Converted to:'} suffix={to} className={styles.numberInput} value={result}  onChange={handleResultChange}/>
                </Fragment>}
            </div>
            { !isSubmitted && <SubmitButtonComponent text='Convert' className={styles.submitButton} onClick={handleSubmit}/>}
            { isSubmitted && <div className={styles.infoBox}>
                <div className={styles.currencyRateBox}>
                    <div className={styles.icon}/> 1 {from} = {rate} {to}
                    {requestState === RequestState.Loading && <LoadingComponent className={styles.loadingIcon}/>}
                </div>
                <div className={styles.noticeBox}>
                    All figures are live mid-market rates, which are for informational purposes only. To see the rates for money transfer, please select sending money option.
                </div>
            </div>}
            { requestState === RequestState.Error && <div className={styles.error}>
                Ooops looks like there is an error on the server side. Please try to select another currency, change amount or try later.
            </div>}
        </div>
    );
};
export default Index;
