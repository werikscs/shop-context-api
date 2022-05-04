import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-width: 320px;

  padding: 0 16px;

  position: fixed;
  top: 0;
  z-index: 10;

  border-bottom: 1px solid var(--color-blue-navy);

  background-color: var(--color-gray);

  .sub-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: var(--max-width);
    height: 70px;

    h1 {
      font-size: 1.8rem;
    }

    div {
      display: flex;
      align-items: center;

      position: relative;

      span {
        position: absolute;
        left: -15px;
        z-index: 10;

        display: flex;
        justify-content: center;
        align-items: center;

        width: 20px;
        height: 20px;

        font-size: 0.9rem;
        font-weight: bold;

        border-radius: 50%;

        color: var(--color-black);
        background-color: var(--color-white);
        outline: 1px solid var(--color-blue-navy);
      }

      button {
        font-size: 0.9rem;
        font-weight: 600;

        color: var(--color-white);
        background-color: var(--color-blue-navy);

        border-radius: 8px;

        padding: 8px 12px;

        :hover {
          color: var(--color-black);
          background-color: var(--color-white);
          outline: 1px solid var(--color-blue-navy);
        }
      }
    }
  }
`;
