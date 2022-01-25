import styled from 'styled-components';

export const Btn = styled.button`
  width: 4rem;
  height: 4rem;
  border: solid 2px #000;
  cursor: pointer;
  font-weight: bold;
  border-radius: 0.2rem;
  transition: all 0.3s;
  font-size: 1.2rem;

  &:hover {
    background-color: #fff;
    transform: translateY(-1px);
  }
`;
