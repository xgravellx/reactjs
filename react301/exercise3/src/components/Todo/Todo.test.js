import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./Todo";

describe('Todo Tests', () => {
    let button, input;

    beforeEach(() => {
        render (<Todo />);

        button = screen.getByText('Add');
        input = screen.getByTitle('input');
    });

    // default element test
    test('Varsayılan olarak verilen 3 nesne render edilmeli', () => {
        const items = screen.getAllByText(/Item/i);
        expect(items.length).toEqual(3);
    });

    // input ve button ekranda mı?
    test('Input ve Button dokümanda olmalı', () => {
        // Button' un dokümanda olmasını bekliyorum
        expect(button).toBeInTheDocument()
        expect(input).toBeInTheDocument()
    })

    test('Input a string girilip butona basılınca listeye eklenmeli', () => {
        // Inputu doldur
        // Inputun içeriği için name değişkeni
        const name = 'Hazal';
        // oluşturulan name i inputa ekleme
        userEvent.type(input, name);

        // Buttona click
        userEvent.click(button);

        // assertion
        expect(screen.getByText(name)).toBeInTheDocument();
    })
})