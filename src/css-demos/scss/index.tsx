import { useState } from 'react';
import './styles.scss';

const VanillaSCSS = () => {
  const [color, setColor] = useState('#5d66df');
  return (
    <div className="wrapper scss">
      <h1 style={{ color: color }} className="title">
        Vanilla SCSS
      </h1>
      <section style={{ borderColor: color }} className="section">
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

export default VanillaSCSS;
