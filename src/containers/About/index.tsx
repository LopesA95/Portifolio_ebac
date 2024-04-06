import { Title } from '../../components/Title'
import { Paragraph } from '../../components/Paragraph'
import { GithubSecao } from './styles'

export const About = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragraph color="primary">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nihil
      odit fugiat ducimus harum quis, aliquam rerum soluta eum, at, dignissimos
      veritatis quaerat tempore magnam quasi natus placeat! Animi, quasi?
    </Paragraph>

    <GithubSecao>
      <img
        src="https://github-readme-stats.vercel.app/api?username=lopesa95&show_icons=true&theme=vision-friendly-dark"
        alt="andersonlopes's stats"
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=lopesa95&layout=compact&theme=vision-friendly-dark"
        alt="andersonlopes's most languages"
      />
    </GithubSecao>
  </section>
)
