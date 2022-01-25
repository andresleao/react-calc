import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Table = styled.table`
  border: solid 3px #666261;
  background-color: #8e8685;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.45);
`;

export const Calculadora = styled.div`
  background-color: #cecece;
  height: 30rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.45);
`;

export const Display = styled.input`
  width: 20%;
  height: 3rem;
  border: solid 3px #000;
  border-radius: 0.5rem;
  margin-top: 1rem;
  font-size: 2rem;
  padding: 0 1rem;
`;
