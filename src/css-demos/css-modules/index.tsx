import styles from './styles.module.css';
import cn from 'classnames';

const CSSModules = () => {
  return (
    <div className={cn(styles.wrapper, styles.cssModules)}>
      <h1 className={styles.title}>CSS Modules</h1>
      <section className={styles.section}>
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

export default CSSModules;
