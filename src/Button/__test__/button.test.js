import { render, screen } from '@testing-library/react';
import Button from '../Button';


describe("button test-cases", () =>{
    it('button test cases',async()=>{
        render(<Button/>);
        const containButton = await screen.findAllByRole('button');
        // console.log(containButton);
        expect(containButton).toBeInTheDocument();
        
    })
})