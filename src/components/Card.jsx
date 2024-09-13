

import styles from '../styles/CardStyles.module.scss'; 
export const Card = ({ title, children }) => {
  return (
    <div className={styles.card}>
      {title && <h2 className={styles.cardTitle}>{title}</h2>}
      <div className={styles.cardContent}>{children}</div>
    </div>
  );
};


