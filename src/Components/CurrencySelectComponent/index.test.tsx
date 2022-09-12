import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import CurrencySelectComponent from './index';

test('renders label', async () => {
    const label = 'test-label';
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const handleChange = () => {};

    render(<CurrencySelectComponent label={label} value="EUR" onChange={handleChange}/>);
    expect(screen.getByTestId('label').textContent).toBe(label);
});
