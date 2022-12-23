import { render, screen } from '@testing-library/react'
import Menu from './index'

test('Render home page link', () => {
    render(<Menu/>);
    const linkHomepage = screen.getByText('Inicial')
    expect(linkHomepage).toBeInTheDocument()
})

test('Render link list', () => {
    render(<Menu/>);
    const linkList = screen.getAllByRole('link')
    expect(linkList).toHaveLength(4)
})

test('does not render link to extract', () => {
    render(<Menu/>);
    const linkExtract = screen.queryByText('Extrato')
    expect(linkExtract).not.toBeInTheDocument()
})

test('Render a list link with link class', () => {
    render(<Menu/>);
    const links = screen.getAllByRole('link')
    links.forEach(link => expect(link).toHaveClass('link'))
    expect(links).toMatchSnapshot()
})