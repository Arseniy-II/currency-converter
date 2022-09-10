import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import CurrencySelectComponent from './index';

test('renders label', async () => {
    const label = 'test-label';

    render(<CurrencySelectComponent label={label} />);
    expect(screen.getByTestId('label').textContent).toBe(label);
});
