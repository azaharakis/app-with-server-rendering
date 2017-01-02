import '../shared/polyfills';
import reactDOM from 'react-dom';
import createAppFromRedux from '../shared/createAppFromRedux';
import { default as App } from '../screens/app';

const renderApp = (data) => {
    reactDOM.render(createAppFromRedux(App, data), document.getElementById("wrapper"));
};

export default (() => {
    if (window.__hydrationData__) {
        renderApp(window.__hydrationData__);
    }
})();
