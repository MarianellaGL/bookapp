import { styled } from "styled-components";

const variants = {
  primary: {
    backgroundColor: "#2196f3",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#1976d2",
    },
  },
  secondary: {
    backgroundColor: "#f50057",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#c51162",
    },
  },
};

export const ButtonMoleculeStyled = styled.button`
  display: flex;
  width: 100%;
  justify-content: center;
  border-radius: 12px;
  background-color: ${(props) =>
    props.variant === "primary"
      ? variants.primary.backgroundColor
      : variants.secondary.backgroundColor};
  height: 40px;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChildrenCointainer = styled.div`
  align-self: center;
`;
