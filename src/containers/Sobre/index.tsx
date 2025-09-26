import Titulo from '../../components/Titulo'
import Paragrado from '../../components/Paragrafo'
import { GitHubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre min</Titulo>
    <Paragrado tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure hic
      architecto maxime, sunt dolores accusantium omnis eius. Voluptates, ipsum
      voluptate? Officiis architecto voluptatem, soluta culpa provident amet
      tenetur aperiam officia.
    </Paragrado>
    <GitHubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=matrixfullX&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img
        className={'img2'}
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=matrixfullX&layout=compact&langs_count=7&theme=dracula"
      />
    </GitHubSecao>
  </section>
)

export default Sobre
