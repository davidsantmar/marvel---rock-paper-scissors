import { render, screen, fireEvent } from '@testing-library/react';
import * as redux from 'react-redux'
import Arena from './Arena';

const spySelector = jest.spyOn(redux, 'useSelector');
const spyDispatch = jest.spyOn(redux, 'useDispatch');
spySelector.mockReturnValue({ username:'test' });
spyDispatch.mockReturnValue({ username:'test' });
describe('Given an arena component', () => {
    describe('When its rendered', () => {
        beforeEach(() => {
            render(<Arena />);
        }) 
        test('Then playerContainer should be in the doc', () => {
            const playerContainer = screen.getByTestId('playerContainer');
            expect(playerContainer).toBeInTheDocument();
        })
        test('Then paper subtitle should be in the doc', () => {
            const paperSubtitle = screen.getByText('PAPER');
            expect(paperSubtitle).toBeInTheDocument();
        })
        test('Then rock subtitle should be in the doc', () => {
            const rockSubtitle = screen.getByText('ROCK');
            expect(rockSubtitle).toBeInTheDocument();
        })
        test('Then scissors subtitle should be in the doc', () => {
            const scissorsSubtitle = screen.getByText('SCISSORS');
            expect(scissorsSubtitle).toBeInTheDocument();
        })
        test('Then computerContainer should be in the doc', () => {
            const computerContainer = screen.getByTestId('computerContainer');
            expect(computerContainer).toBeInTheDocument();
        })
        test('Then computer subtitle should be in the doc', () => {
            const computerSubtitle = screen.getByTestId('computerSubtitle');
            expect(computerSubtitle).toBeInTheDocument();
        })
    })
})