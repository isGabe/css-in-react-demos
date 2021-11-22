import { useState } from 'react';
import './styles.css';

const VanillaCSS = () => {
  const [color, setColor] = useState('#333');
  // We can set the color as a CSS custom property like this:
  const style = { '--color': color } as React.CSSProperties;
  return (
    <div className="wrapper css" style={style}>
      <h1 className="title">Vanilla CSS</h1>

      <section className="section">
        <label htmlFor="headlineColor" className="colorPicker">
          <span>Pick a title color</span>
          <input
            id="headlineColor"
            name="headlineColor"
            type="color"
            onChange={e => setColor(e.currentTarget.value)}
            value={color}
          />
        </label>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium enim nostrum sit quaerat ducimus
          blanditiis quasi? Voluptate vero eum tenetur, sit iste rerum aut saepe, ratione, tempora esse labore? Non.
        </p>

        <img src="http://www.fillmurray.com/400/300" alt="Bill Murray" />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium enim nostrum sit quaerat ducimus
          blanditiis quasi? Voluptate vero eum tenetur, sit iste rerum aut saepe, ratione, tempora esse labore? Non.
        </p>
      </section>
    </div>
  );
};

export default VanillaCSS;
