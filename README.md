# Personal Document Assistant

This project is a React-based web application called **Document Assistant**. It allows users to upload documents and search within them.

## Project Structure

```
document-assistant/
├── .gitignore
├── package.json
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── components/
│   │   ├── DocumentAssistant.css
│   │   ├── DocumentAssistant.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── reusable_components/
│   │   ├── FileUpload.tsx
│   │   ├── Loader.css
│   │   └── Loader.tsx
│   └── services/
│       └── azureServices.ts
└── tsconfig.json
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Components

### `DocumentAssistant`

The `DocumentAssistant` component is located in [src/components/DocumentAssistant.tsx](src/components/DocumentAssistant.tsx). It allows users to upload a document and search within it.

### `FileUpload`

The `FileUpload` component is located in [src/reusable_components/FileUpload.tsx](src/reusable_components/FileUpload.tsx). It provides a file upload interface with drag-and-drop support.

### `Loader`

The `Loader` component is located in [src/reusable_components/Loader.tsx](src/reusable_components/Loader.tsx). It displays a loading spinner with an overlay.

## Services

### `azureServices`

The `azureServices` module is located in [src/services/azureServices.ts](src/services/azureServices.ts). It contains functions to interact with Azure services for reading and summarizing documents.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

