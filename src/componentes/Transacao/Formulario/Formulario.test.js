import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Formulario from './index'

test('Render a input', () => {
    render(<Formulario/>)
    const input = screen.getByPlaceholderText('Digite um valor')
    expect(input).toBeInTheDocument()
})

test('Render a input type number', () => {
    render(<Formulario/>)
    const inputNumber = screen.getByPlaceholderText('Digite um valor')
    expect(inputNumber).toHaveAttribute('type', 'number')
})

test('Render a input type text', () => {
    render(<Formulario/>)
    const inputNumber = screen.getByPlaceholderText('Digite um valor')
    userEvent.type(inputNumber, '50')
    expect(inputNumber).toHaveValue(50)
})