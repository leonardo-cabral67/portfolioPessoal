import { Header } from "../../components/Header/Header";
import { ProjetosContainer } from "./ProjetosStyles";
import KenzieHubUI from "../../assets/kenzieHubUI.png";
import TorreDeHanoiUI from "../../assets/torreDeHanoiUI.png";
import BuyAnIdeaUI from "../../assets/buyAnIdeaUI.png";

export const Projetos = () => {
  const myProjects = [
    {
      name: "Buy an idea",
      imgSrc: BuyAnIdeaUI,
      descript:
        "Buy an idea é um projeto em grupo.Consiste em uma aplicação que conecta o empreendedor inovador com o investidor.",
      repoLink: "https://github.com/pedrohtbl/capstone-buy-an-idea",
      projectLink: "https://capstone-buy-an-idea.vercel.app/",
    },
    {
      name: "Torre de Hanoi",
      imgSrc: TorreDeHanoiUI,
      descript:
        "Consiste no famoso jogo da torre de hanoi, em que se tem que levar os blocos na mesma ordem da primeira até a última torre, mas só se pode botar blocos menores em cima de maiores, envolve muita lógica. Experimente, tente jogar um pouco !",
      repoLink: "https://github.com/leonardo-cabral67/TorreDeHanoi",
      projectLink: "https://torre-de-hanoi-ashen.vercel.app/",
    },
    {
      name: "KenzieHUb",
      imgSrc: KenzieHubUI,
      descript:
        "Projeto em que é possível criar uma conta/logar-se e listar tecnologias que se está aprendendo e o nível em cada uma.",
      repoLink: "https://github.com/leonardo-cabral67/kenzieHub",
      projectLink: "https://kenzie-hub-leonardo-cabral67.vercel.app/",
    },
  ];
  return (
    <Header ProjectsPage>
      <ProjetosContainer>
        <h1>Meus projetos:</h1>
        {myProjects.map((project, index) => {
          const { name, imgSrc, descript, repoLink, projectLink } = project;

          return (
            <section className="projects" key={index}>
              <img src={imgSrc} alt="imagem do projeto" />
              <h3>{name}</h3>
              <p>{descript}</p>
              <a href={projectLink}>Link para o projeto</a>
              <a href={repoLink}>Link para o repositório</a>
            </section>
          );
        })}
      </ProjetosContainer>
    </Header>
  );
};
