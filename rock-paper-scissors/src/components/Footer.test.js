import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Given a footer component', () => {
    describe('When its rendered', () => {
        beforeEach(() => {
            render(<Footer />);
        })
        test('Then footer should be in the doc', () => {
            const footer = screen.getByText("Made with ❤️ by David SantiaGO!");

            expect(footer).toBeInTheDocument();
        })
    })
})