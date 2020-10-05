import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
    // baseline test 
    it('renders', () => {
        render(<Contact />);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Contact />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('Check h1', () => {
    it('checks h1 text', () => {
        // Arrange 
        const { getByTestId } = render(<Contact />);
        // Assert
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
    })
})

describe('Check submit button', () => {
    it('checks submit button text', () => {
        // Arrange 
        const { getByTestId } = render(<Contact />);
        // Assert
        expect(getByTestId('buttontag')).toHaveTextContent('Submit');
    })
})