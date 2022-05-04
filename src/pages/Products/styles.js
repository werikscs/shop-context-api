import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;

  width: 100%;

  margin-top: 70px;

  ul {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 16px;

    padding: 16px;

    width: 100%;
    max-width: 1366px;
  }
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  max-width: 320px;
  width: 100%;
  height: 100%;
  max-height: 350px;

  padding: 8px;

  background-color: var(--color-gray);

  border-radius: 8px;

  figure {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-height: 150px;

    padding: 8px;

    border-radius: 8px;

    background-color: var(--color-white);

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  h2 {
    width: 100%;
    min-height: fit-content;

    margin-bottom: auto;

    font-size: 0.9rem;

    text-align: justify;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 32px;

    width: 100%;

    span {
      font-weight: 600;
      font-size: 1.2rem;
    }

    button {
      width: 100%;

      padding: 10px;

      font-size: 1rem;
      font-weight: 600;

      border-radius: 8px;

      color: var(--color-white);
      background-color: var(--color-blue-navy);

      :hover {
        color: var(--color-black);
        background-color: var(--color-white);
        outline: 1px solid var(--color-blue-navy);
      }
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 16px;
  }
`;
