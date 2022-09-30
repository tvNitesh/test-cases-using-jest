import { render, screen } from '@testing-library/react';
import Login from '../Login';

describe("Login Component ", () =>{
    it('should show login form', () => {
        render(<Login />)
        const input = screen.getByLabelText('Username')
        // console.log(input)
        expect(input).toBeInTheDocument();
    
      });
    
    ///test cases on the behalf of id 
    
    it("test cases on the behalf of id",()=>{
        render(<Login />);
        const element = screen.getByTestId('div-id');
        expect(element).toBeInTheDocument();
    
    
    })
})
