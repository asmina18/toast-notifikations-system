
import styles from '../styles/TextStyles.module.scss';

export const Text = ({ children }) => {
  return <p className={styles.text}>{children}</p>; 
};


