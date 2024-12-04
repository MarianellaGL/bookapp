import {
  ButtonMoleculeStyled,
  ContainerButton,
  ChildrenCointainer,
} from "./ButtonMolecule.styled";

const ButtonMolecule = ({ children }) => {
  const isOpen = false;
  return (
    <ContainerButton>
      <ButtonMoleculeStyled isOpen={isOpen} variant="secondary">
        <ChildrenCointainer>{children}</ChildrenCointainer>
      </ButtonMoleculeStyled>
    </ContainerButton>
  );
};

export default ButtonMolecule;
