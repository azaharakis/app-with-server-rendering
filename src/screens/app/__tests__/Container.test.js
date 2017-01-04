import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../Container';
import Loader from '../loading';

describe("App", () => {
    // In the context of an App screen it has a child of a sub-route (screen) this could be any component, lets just create one
    const Screen = ({ data }) => (
        <div>{data}</div>
    );
    // Lets simulate some API data
    const apiData = { data: 'Some API Data' };
    // Shallow Mount the component to a test variable so we may apply assertions on it ( we shallow mount as we don't care about the
    // Output of the child components
    const test = shallow(
        <App apiData={apiData}>
            <Screen />
        </App>
    );

    it("renders the apps children with API data", () => {
        expect(test.contains([
            <Loader />,
            <Screen data="Some API Data" />
        ])).toBe(true);
    });

    it("won't re-render fetchingData is true", () => {
        const newProps = {
            apiData: {
                fetchingData: true,
                data: 'Change me'
            }
        };

        // Calling setProps will assign the Component with the next set of props and trigger a re-render.
        test.setProps(newProps);
        expect(test.contains([<Screen data="Some API Data" />])).toBe(true);
    });
});
