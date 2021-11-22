import { useState } from 'react';
import { Wrapper, ColorPickerLabel, Title, Paragraph, Section } from './styles';

const StyledComponents = () => {
  const [color, setColor] = useState('#bada55');
  return (
    <Wrapper>
      <Title color={color}>Styled Components</Title>
      <Section color={color}>
        <Paragraph>Styled components is unique in that it lets us use props directly in the style rules.</Paragraph>
        <ColorPickerLabel htmlFor="headlineColor">
          <span>Pick a title color</span>
          <input
            id="headlineColor"
            name="headlineColor"
            type="color"
            onChange={e => setColor(e.currentTarget.value)}
            value={color}
          />
        </ColorPickerLabel>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium enim nostrum sit quaerat ducimus
          blanditiis quasi? Voluptate vero eum tenetur, sit iste rerum aut saepe, ratione, tempora esse labore? Non.
        </Paragraph>
        <img src="http://www.fillmurray.com/400/300" alt="Bill Murray" />
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium enim nostrum sit quaerat ducimus
          blanditiis quasi? Voluptate vero eum tenetur, sit iste rerum aut saepe, ratione, tempora esse labore? Non.
        </Paragraph>
      </Section>
    </Wrapper>
  );
};

export default StyledComponents;
