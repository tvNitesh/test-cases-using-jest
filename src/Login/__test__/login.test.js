import { fireEvent, render, screen } from '@testing-library/react';
import {Login, MyCustomButton} from '../Login';


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


//my-Custom-btn --fire-events

test('My custom btn calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(<MyCustomButton onClick={handleClick}>Click Me</MyCustomButton>)

    fireEvent.click(screen.getByText(/click me/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
