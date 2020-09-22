import { screen, render } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should Render Header', () => {
    render(<Main />)

    expect(screen.getByRole('heading', { name: /react avançado/i }))
      .toBeInTheDocument
  })
})
