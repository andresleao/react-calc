import * as S from './styled';

function CalcButton({ simbolo, handleClick }) {
  return <S.Btn onClick={handleClick}>{simbolo}</S.Btn>;
}

export default CalcButton;
