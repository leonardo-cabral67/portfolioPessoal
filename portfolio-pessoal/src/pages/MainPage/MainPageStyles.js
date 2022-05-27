import styled from "styled-components";

export const MainPageContainer = styled.div`
  min-height: 100vh;
  width: 80%;
  margin: 0 auto;

  h1,
  h2 {
    width: 100%;
    margin: 0 auto;
    /* text-align: start; */
  }
  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 18px;
    margin-bottom: 40px;
  }

  h5 {
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    color: #a7a7a7;
    margin-bottom: 8px;
  }

  p,
  li {
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 0.1ch;
  }

  .presentation {
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 22px;
  }

  .info {
    text-align: start;
  }

  .info,
  .infoPart2 {
    margin-top: 30px;
  }

  .info div,
  .infoPart2 div {
    margin-bottom: 60px;
  }

  .info h5 {
    font-size: 14px;
    min-width: 100px;
  }

  .info p {
    margin: 0 auto;
  }

  .infoPart2 {
    justify-self: end;
    text-align: end;
  }

  .infoPart2 h6 {
    font-size: 10px;
  }

  .genericInfo {
  }

  img {
    margin: 0 auto;
    width: 350px;
    height: 400px;
    object-fit: cover;
    padding: 10px;
    border: 1px solid #d3d3d3;
    border-radius: 130px;
    box-shadow: 0 1px 5px #d3d3d3;
  }

  @media (min-width: 367px) and (max-width: 860px) {
    .presentation {
      display: flex;
      flex-direction: column;
    }

    img {
      width: 300px;
      height: 300px;
    }
  }
`;
