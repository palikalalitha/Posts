This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />

### `npm run deploy`

Builds the app for production to the `build` folder.<br />

Deploys the build folder to S3 bucket from cloud9 environment

### Base Typos

```
export const BaseHKGroteskText = styled.span`
   font-family: 'HKGroteskRegular';
`

export const BaseHKGroteskBoldText = styled(BaseHKGroteskText)`
   font-weight: bold;
`

export const BaseHKGroteskSemiBoldText = styled(BaseHKGroteskText)`
   font-weight: 600;
`

export const BaseHKGroteskMediumText = styled(BaseHKGroteskText)`
   font-weight: 500;
`
```

## This Repo is configured with

- Tailwind setup
- Emotion setup
- Supports typescript with small configuration changes
- Test cases setup
- Mobx setup
- Lintstaged and Prettier setup with precommit hook
- Storybook setup
- React router setup
- Folder structure is optimised for small scale applications

## To be included in next version

- Eslint setup
- Include in precommit hook - eslint
- Remove tailwind.js and maintain tailwind.config.js separately
- Separate typescript and maintain it in a different branch - with tslint setup
- Update tailwind macro with twin macro
