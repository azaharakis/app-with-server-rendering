import '../shared/polyfills';
import reactDOM from 'react-dom';
import React from 'react';
import App from '../components/App';

const renderApp = (data) => reactDOM.render(<App data={data}/>, document.getElementById("wrapper"));

export default (() => {
    if (window.__hydrationData__) {
        renderApp(window.__hydrationData__);
    }
})();
