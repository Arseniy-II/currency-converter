import '@testing-library/jest-dom';
import getFlagOptionsForSelect from './getFlagOptionsForSelect';

test('Should contain list of only available in country-flag-icons AND country-to-currency', async () => {
    const countries = ['US', 'XX'];
    const flagOptionsForSelect = getFlagOptionsForSelect(countries);
    expect(flagOptionsForSelect.length).toBe(1);
});
