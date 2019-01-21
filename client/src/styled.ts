import styled from "styled-components";

export const AppContainer = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  max-width: 664px;
  padding: 0 32px;
  height: 80vh;
  margin-top: 10vh;
  overflow-y: scroll;
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
`;

export const Parent = styled.div`
  padding: 16px;
  background: #f5f5f5;
  margin-bottom: 16px;
`;

export const Child = styled.div`
  padding: 16px 16px 16px 32px;
  margin-bottom: 16px;
  background: #e8e8e8;

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