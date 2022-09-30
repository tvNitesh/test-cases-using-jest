import { render, screen } from '@testing-library/react';
import ButtonDiv from '../Button';


describe("button component  test-cases", () =>{
    it('button test cases',async()=>{
        render(<ButtonDiv/>);
        // const containButton = await screen.getByRole('button')
        // console.log(containButton);
        // expect(containButton).toBeInTheDocument();
        // expect(containButton).toBeInTheDOM()
        
    })

    it('p test cases',async()=>{
        render(<ButtonDiv/>);
        const containButton = await screen.getAllByRole('button', { hidden: true })
        console.log(containButton);
        // expect(containButton).toBeInTheDocument();
        // expect(containButton).toBeInTheDOM()
        
    })


})