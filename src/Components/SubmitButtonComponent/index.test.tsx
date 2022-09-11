import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import SubmitButtonComponent from './index';

test('renders text on submit button', async () => {
    const label = 'Submit button text';

    render(<SubmitButtonComponent text={label} />);
    expect(screen.getByTestId('submit-button').textContent).toBe(label);
});
