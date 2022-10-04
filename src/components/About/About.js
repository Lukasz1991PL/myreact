import { PageTitle } from '../PageTitle/PageTitle';
import styles from '../About/About.module.scss';
export const About = () => {
  return (
    <div className={styles.hero}>
      <PageTitle>About</PageTitle>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim dolore at
        pariatur voluptatem aliquam, nostrum, repellendus itaque atque nisi
        impedit, placeat corporis quidem totam suscipit voluptatum commodi
        perspiciatis molestias velit!
      </p>
    </div>
  );
};
