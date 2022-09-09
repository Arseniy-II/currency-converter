import React from 'react'
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import NumberInputComponent from './index';

test('renders label', async () => {
    const label = 'test-label';

    render(<NumberInputComponent label={label} />);
    expect(screen.getByTestId('label').textContent).toBe(label);
})

test('renders suffix', async () => {
    const suffix = 'suffix-test';

    render(<NumberInputComponent label='test-label' suffix={suffix}/>);
    expect(screen.getByTestId('suffix').textContent).toBe(suffix);
})