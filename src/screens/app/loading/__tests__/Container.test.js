import React from 'react';
import { shallow } from 'enzyme';
import { Container } from '../Container';
import View from '../View';

describe("Loader", () => {
    const test = shallow(
        <Container fetchingData={true} />
    );

    it("renders a loader when fetchingData", () => {
        expect(test.contains(<View />)).toBeTruthy();
    });

    it("renders null when not fetchingData", () => {
        test.setProps({fetchingData: false});
        expect(test.type()).toBe(null);
    });
});
