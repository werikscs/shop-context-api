import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: calc(100vh - 70px);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: fixed;
  top: 70px;

  background-color: var(--color-gray);

  div {
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: space-between;

    padding: 16px;

    border-top: 1px solid var(--color-blue-navy);
  }

  h4 {
    margin: 16px;
    text-align: center;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
    max-width: 320px;
    height: 450px;

    position: sticky;
    right: 16px;
    top: 86px;

    margin-top: 86px;

    border-radius: 8px;
  }
`;

export const Ul = styled.ul`
  width: 100%;
  height: fit-content;
  max-height: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px;

  overflow-y: auto;

  padding: 16px;
`;

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  width: 100%;

  padding: 8px;

  background-color: var(--color-white);

  border: 1px solid var(--color-blue-navy);

  border-radius: 8px;

  figure {
    width: 50px;
    height: 50px;

    text-align: center;

    img {
      width: 50px;
      height: 50px;
      object-fit: contain;
    }
  }

  h2 {
    width: 100%;

    margin: auto 0;

    margin-bottom: auto;

    font-size: 0.9rem;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  span {
    font-size: 0.9rem;
  }

  button {
    color: red;
    background-color: transparent;

    margin-top: -3px;

    font-size: 1.25rem;
  }

  @media screen and (min-width: 1024px) {
  }
`;
