import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from './Counter';

describe('Counter Tests', () => {
    // Buton tanımlama 
    let count, increaseBtn, decreaseBtn;

    beforeAll(() => {
        console.log('Tüm testlerden önce sadece 1 kere çalışır.');
    })

    afterAll(() => {
        console.log('Tüm testlerden sonra sadece 1 kere çalışır.');
    })

    afterEach(() => {
        console.log('Her testten sonra tek tek çalışır.');
    })

    // works one by one before all tests
    beforeEach(() => {
        // You have to render the component
        render(<Counter />);
        // Get the value of the Count Button.
        count = screen.getByText('0');
        // Get the value of the Increase Button.
        increaseBtn = screen.getByText('Increase');
        // Get the value of the Decrease Button.
        decreaseBtn = screen.getByText('Decrease');
    })

    // it or test
    test('increase btn', () => {
        // button is click
        userEvent.click(increaseBtn);
        // count is have text content 
        expect(count).toHaveTextContent('1');
    });

    // it or test
    test('Decrease btn', () => {
        userEvent.click(decreaseBtn);
        expect(count).toHaveTextContent('-1');
    });


})

