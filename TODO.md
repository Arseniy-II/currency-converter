Features:
1. Typescript
2. Webpack
3. React
4. Eslint
5. Sonarqube?
6. Jest for unit testing
7. React hooks + simple state management + simple request response logic

How to do that
- [X] Setup basic react typescript template as init commit and Configure Eslint, typescript, webpack
- [X] Create develop branch
- [X] 1 feature: Add css modules and Create simple input numeric input and test for it
- [X] 2 feature: Add pre-commit and pre-push hooks
- [X] 3 feature: Add CI/CD and sonarqube? so it will run lint and unit tests before allowing merging PR
- [X] 4 feature: Create flag select component with styles
- [X] 5 feature: Create parent component with select components, number input components, and submit button with hardcoded exchange rate
- [X] 6 feature: Add request for currency rates, update currency rate with each input change
- [X] 7 feature: Add debouncing for currency update
- [X] 8 feature: Add info block
- [X] 9 feature: provide custom countries list to avoid dublications
- [ ] 10 feature: fix all TODO first
- [ ] 11 feature: [CurrencyConverterComponent](./src/Components/CurrencyConverterComponent/index.tsx) update fetch mechanics by canceling previous request when sending new request
- [ ] 12 feature: improve [CurrencyConverterComponent](./src/Components/CurrencyConverterComponent/index.tsx) [try catch logic](https://www.youtube.com/shorts/ITogH7lJTyE)
- [ ] 13 feature: [CurrencyConverterComponent](./src/Components/CurrencyConverterComponent/index.tsx) write tests
- [ ] 14 feature: add sonarqube analytics
- [ ] feature (optional): Deploy it somewhere
- [ ] feature (optional): Try to configure jest without babel.config using [webpack only](https://jestjs.io/ru/docs/webpack) though it will be challenging considering typescript and css modules
- [ ] feature (optional): Remove data-testid from production build
- [ ] feature (optional): improve linter (specifically for scss files) 
- [ ] feature (optional): Refactor?
- [ ] feature (optional): Add prettier?
- [ ] feature (optional): Add commit message check and feature branch naming check
- [ ] feature (optional): Add squash commit when mere branches in git and check is it possible to convert feature branch name to proper commit message on PR
- [ ] feature (optional): Remove magic strings in tests: `getByTestId`
- [ ] feature (optional): When Webstorm 2022.2.2 is out update eslint npm package to the latest
