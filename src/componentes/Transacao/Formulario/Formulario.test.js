import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Formulario from './index'

describe('Render a input', () => {

    test('in document', () => {
        render(<Formulario/>)
        const input = screen.getByPlaceholderText('Digite um valor')
        expect(input).toBeInTheDocument()
    })
    
    test('type number', () => {
        render(<Formulario/>)
        const inputNumber = screen.getByPlaceholderText('Digite um valor')
        expect(inputNumber).toHaveAttribute('type', 'number')
    })
    
    test('type text', () => {
        render(<Formulario/>)
        const inputNumber = screen.getByPlaceholderText('Digite um valor')
        userEvent.type(inputNumber, '50')
        expect(inputNumber).toHaveValue(50)
    }) 
})

test('onSubmit() when click in realizar transação', () => {
    const realizarTransacao = jest.fn()
    render(<Formulario realizarTransacao={realizarTransacao}/>)
    const button = screen.getByRole('button')
    userEvent.click(button)
    expect(realizarTransacao).toHaveBeenCalledTimes(1)
})