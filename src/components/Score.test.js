import { render, screen } from '@testing-library/react';
import * as redux from 'react-redux'
import Score from './Score';

const spy = jest.spyOn(redux, 'useSelector')
spy.mockReturnValue({ username:'test' })
describe('Given a score component', () => {
    describe('When its rendered', () => {
        beforeEach(() => {
            render(<Score />);
        })  
        test('Then score title should be in the doc', () => {
            const scoreTitle = screen.getByText('SCORE');
            expect(scoreTitle).toBeInTheDocument();
        })
        test('Then player score should be in the doc', () => {
            const playerScore = screen.getByTestId('playerScore');
            expect(playerScore).toBeInTheDocument();
        })
        test('Then computer score should be in the doc', () => {
            const computerScore = screen.getByTestId('computerScore');
            expect(computerScore).toBeInTheDocument();
        })
    })
})