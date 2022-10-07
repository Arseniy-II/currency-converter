import React, {Fragment, useState, useCallback, useMemo} from 'react';
import {debounce} from 'lodash';
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

// TODO add prop types as they will add check during run time
// write tests and as the result refactor that whole component

const Index: React.FC = () => {
    const [from, setFrom] = useState('EUR');
    const [to, setTo] = useState('GBP');
    const [amount, setAmount] = useState('1.00');
    const [result, setResult] = useState('');
    const [rate, setRate] = useState('');
    const [requestState, setRequestState] = useState<RequestStateType>(RequestState.Success);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const fetchRates = useCallback((to: string, from: string, amount: string, isSubmitted?: boolean, reverse?: boolean): void => {
        if (!isSubmitted) {
            return;
        }
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
                } else {
                    setRate(data.rate);
                    setResult(data.toAmount);
                }
                setRequestState(RequestState.Success);
            })
            .catch(() => {
                setRequestState(RequestState.Error);
            });
    }, []);

    const debouncedFetchRates = useMemo(
        () => debounce(fetchRates, 250),
        [fetchRates]
    );

    const handleSubmit = useCallback(() => {
        const newIsSubmitted = true;
        setIsSubmitted(newIsSubmitted);
        fetchRates(from, to, amount, newIsSubmitted);
    }, [amount, fetchRates, from, to]);

    const changeCurrency = useCallback(() => {
        setFrom(to);
        setTo(from);
        fetchRates(to, from, amount, isSubmitted);
    }, [to, from, fetchRates, amount, isSubmitted]);

    const handleToChange = useCallback((option: OptionType | null): void => {
        const newTo = option.value;
        setTo(newTo);
        fetchRates( from, newTo, amount, isSubmitted);
    }, [amount, fetchRates, from, isSubmitted]);

    const handleFromChange = useCallback((option: OptionType | null): void => {
        const newFrom = option.value;
        setFrom(newFrom);
        fetchRates(newFrom, to, amount, isSubmitted);
    }, [amount, fetchRates, isSubmitted, to]);

    const handleAmountChange = useCallback((event) => {
        const newAmount = (event.target as HTMLInputElement).value;
        setAmount(newAmount);
        debouncedFetchRates(from, to, newAmount, isSubmitted);
    }, [debouncedFetchRates, from, isSubmitted, to]);

    const handleResultChange = useCallback((event) => {
        const newResult = (event.target as HTMLInputElement).value;
        setResult(newResult);
        debouncedFetchRates(to, from, newResult, isSubmitted, true);
    }, [debouncedFetchRates, from, isSubmitted, to]);

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
