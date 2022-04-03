import { render, screen } from '@testing-library/react';
import * as redux from 'react-redux'
import Header from './Header';

const spy = jest.spyOn(redux, 'useSelector')
spy.mockReturnValue({ username:'test' })
describe('Given a header component', () => {
    describe('When its rendered', () => {
        beforeEach(() => {
            render(<Header />);
        })        
        test('Then logo should be in the doc', () => {
            const logo = screen.getByAltText('logo');
            expect(logo).toBeInTheDocument();
        })
        test('Then subtitle should be in the doc', () => {
            const subtitle = screen.getByTestId('subtitle');
            expect(subtitle).toBeInTheDocument();
        })
        test('Then result should be in the doc', () => {
            const result = screen.getByTestId('result');
            expect(result).toBeInTheDocument();
        })
        test('Then score should be in the doc', () => {
            const score = screen.getByTestId('scoreContainer');
            expect(score).toBeInTheDocument();
        })
    })
})