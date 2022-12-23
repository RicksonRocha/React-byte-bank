import { render, screen } from '@testing-library/react'
import Extrato from './index'

test('Render a list transactions', () => {
    const transactions = [
        { transaction: 'Depósito', valor: 100}
    ]

    render(<Extrato transacoes={transactions} />)
    const list = screen.getByRole('listitem')
    expect(list).toBeInTheDocument()
})