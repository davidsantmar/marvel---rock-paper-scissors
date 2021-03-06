import { render, screen } from '@testing-library/react';
import * as redux from 'react-redux'
import Result from './Result';

const spy = jest.spyOn(redux, 'useSelector')
spy.mockReturnValue({ username:'test' })
describe('Given a result component', () => {
    describe('When its rendered', () => {
        beforeEach(() => {
            render(<Result />);
        }) 
        test('Then result should be in the doc', () => {
            const result = screen.getByTestId('resultContainer');
            expect(result).toBeInTheDocument();
        })

    })
})