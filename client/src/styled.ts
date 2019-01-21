import styled from "styled-components";

const { lightGrey, darkGrey } = {
  lightGrey: "#f5f5f5",
  darkGrey: "#e8e8e8"
};

export const AppContainer = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  max-width: 664px;
  padding: 0 32px;
  height: 80vh;
  margin-top: 10vh;
  overflow-y: auto;
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
`;

export const Parent = styled.div`
  padding: 16px;
  background: ${lightGrey};
  margin-bottom: 16px;
`;

export const Child = styled.div`
  padding: 16px 16px 16px 32px;
  margin-bottom: 16px;
  background: ${darkGrey};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Name = styled.div`
  font-weight: 700;
  text-transform: capitalize;
  margin-bottom: 8px;
`;

export const Description = styled.div`
  font-style: italic;
  margin-bottom: 16px;
`;

export const Type = styled(Description)`
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 0;
`;

export const SearchComponent = styled.div`
  position: relative;
  background: ${lightGrey};
  padding: 16px;
  margin-bottom: 16px;

  label {
    font-weight: 700;
    margin-right: 16px;
    width: 60px;
  }

  input {
    width: calc(100% - 92px);
  }
`;
