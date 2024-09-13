
import styles from '../styles/TitleStyles.module.scss'; 

export const Title = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>; 
};


