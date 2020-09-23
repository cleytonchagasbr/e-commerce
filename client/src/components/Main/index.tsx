import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript and NextJS'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Logo" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Ilustration src="/img/hero-illustration.svg" alt="Personagem" />
  </S.Wrapper>
)

export default Main
