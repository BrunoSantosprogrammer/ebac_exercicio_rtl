import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    })

    test('Deve adicionar 2 comentários', () => {
        const { debug } = render(<PostComment />)
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value:'Realmente, ele é muito legal!!!'
            }
        })
        fireEvent.click(screen.getByTestId('btn-adicionar'))

        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'Tenho uma miniatura do superman'
            }
        })
        fireEvent.click(screen.getByTestId('btn-adicionar'))
        debug()

        expect(screen.getByText('Realmente, ele é muito legal!!!')).toBeInTheDocument()
        expect(screen.getByText('Tenho uma miniatura do superman')).toBeInTheDocument()
    })
});