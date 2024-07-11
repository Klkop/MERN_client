import React from "react"
import {render,fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from "./button"
test('Render button with label',()=>{
    const {getByText} = render(<Button label="Click me" />)
     const buttonElement= getByText('Click me');
     expect(buttonElement).toBeInTheDocument();
})

test('Class button present',()=>{
    const {container}=render(<Button label= "Click me"/>)
    const buttonElement=container.querySelector('button')
    expect(buttonElement).toHaveClass('btn');

})

    


/*const mockFun=jest.fn()
test('fun',()=>{
    mockFun();
    mockFun();
    expect(mockFun).toHaveBeenCalledTimes(2)
})*/
