import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 40px;
  margin-bottom: 40px;
  border-bottom: solid 1px #ddd;

  // You can nest plain CSS selectors inside of Styled components
  img {
    border: solid 2px #ccc;
  }
`;

export const ColorPickerLabel = styled.label`
  span {
    display: inline-block;
    margin-right: 10px;
  }
`;

export const Title = styled.h1`
  color: ${props => props.color};
  font-size: 2rem;
`;

export const Paragraph = styled.p``;

export const Section = styled.section`
  border-color: ${props => props.color};
`;
