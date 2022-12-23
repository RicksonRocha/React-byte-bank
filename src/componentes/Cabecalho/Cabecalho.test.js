import { render, screen } from '@testing-library/react'
import Cabecalho from './index';

test("Renderizar nome do user logado", () => {
    render(<Cabecalho/>)
    const userName = screen.getByText('Rickson Rocha')
    expect(userName).toBeInTheDocument()
})