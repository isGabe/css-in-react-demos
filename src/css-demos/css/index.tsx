import { useState } from 'react';
import './styles.css';

const VanillaCSS = () => {
  const [color, setColor] = useState('#bada55');
  return (
    <div className="wrapper css">
      <h1 className="title" style={{ color: color }}>
        Vanilla CSS
      </h1>

      <section className="section" style={{ borderColor: color }}>
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
