import { ButtonContainer } from "../Button/styles";

function Button({label, onClick}) {
  return (
    <ButtonContainer onClick={onClick}>
      {label}
    </ButtonContainer>
  );
}

export default Button;
