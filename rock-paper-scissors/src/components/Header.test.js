/**
 * Given a Header component
 * When its rendered
 * Marvel logo it should be in the doc
 */

import Header from "./Header";
import {render, screen, fireEvent } from '../utils/test-utils';

describe('Given a Header component', () =>{
    describe('When its rendered', () =>{
        render(<Header />)
        test('Marvel logo it should be in the doc', () =>{
            const logo = screen.getByAltText('logo');
            expect(logo).toBeInTheDocument();
        })
    })
})