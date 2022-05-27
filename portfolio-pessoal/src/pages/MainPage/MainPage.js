import { Header } from "../../components/Header/Header";
import MyPhoto from "../../assets/MyPhoto.jpg";
import { MainPageContainer } from "./MainPageStyles";

export const MainPage = () => {
  return (
    <Header>
      <MainPageContainer>
        <h1>Leonardo Cabral</h1>
        <h2>Desenvolvedor Front end</h2>
        <section className="presentation">
          <section className="info">
            <div className="aboutMe">
              <h5>Resumo pessoal</h5>
              <p>
                Sempre gostei muito de matemática, de lógica, de aprender , de
                resolver problemas e usar a criatividade no dia a dia. Não tinha
                certeza sobre em que área seguiria carreira até ter o meu
                primeiro contrato com a programação, pois foi amor à primeira
                vista. Atualmente meu objetivo é conquistar a primeira vaga como
                desenvolvedor front end e me desenvolver o máximo possível.
              </p>
            </div>
            <div className="contact">
              <h5>Contato</h5>
              <p>leonardoleocabral@outlook.com</p>
            </div>

            <div className="competencias">
              <h5>Principais competências:</h5>
              <p>
                React | Javascript | HTML5 | CSS3 | Redux | Context API |
                styled-components | API REST
              </p>
            </div>
          </section>

          <section className="photoContainer">
            <img src={MyPhoto} alt="foto minha" />
          </section>

          <section className="infoPart2">
            <div className="historicoAcademico">
              <h5>histórico acadêmico</h5>
              <h6>Kenzie academy Brasil</h6>
              <p>Curso de 1000 horas</p>
              <p>Área: Front end</p>
            </div>

            <div className="interesses">
              <h5>Interesses</h5>
              <ul>
                <li>Games</li>
                <li>Filmes e livros de aventura</li>
                <li>Coelhos</li>
                <li>Sinuca</li>
              </ul>
            </div>
          </section>
        </section>
      </MainPageContainer>
    </Header>
  );
};
