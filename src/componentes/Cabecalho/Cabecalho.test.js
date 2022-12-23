import { render, screen } from '@testing-library/react'
import Cabecalho from './index';

test("Render user name logged", () => {
    render(<Cabecalho/>)
    const userName = screen.getByText('Rickson Rocha')
    expect(userName).toBeInTheDocument()
})