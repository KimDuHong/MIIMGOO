import styled from "styled-components";

const CardBox = styled.div`
  width: 11rem;
  height: 16.1875rem;
  border-radius: 0.5rem;
  border: 1px solid var(--typho-black-1);
  background: linear-gradient(180deg, #ff7a00 0%, rgba(255, 122, 0, 0) 100%);
  box-shadow: 3px 3px 4px 0px rgba(0, 0, 0, 0.4);
`;

const UpperCardComponent = () => {
  return <CardBox>test</CardBox>;
};

export default UpperCardComponent;
