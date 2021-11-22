import { useState } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';

const SCSSModules = () => {
  const [color, setColor] = useState('#1e96ae');
  return (
    <div className={cn(styles.wrapper, styles.scssModules)}>
      <h1 style={{ color: color }} className={styles.title}>
        SCSS Modules
      </h1>
      <section style={{ borderColor: color }}>
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

export default SCSSModules;
