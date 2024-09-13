import styles from '../styles/ButtonStyles.module.scss';
import { useToast } from '../hooks/useToast';

export const ToastButton = () => {
  const { addToast } = useToast();

  return (
    <div style={{ display: 'flex', gap: '10px', margin: '20px' }}>
      <button className={styles.toastButton} onClick={() => addToast('Succesbesked!', 'success')}>Vis Succes Besked</button>
      <button className={styles.toastButton} onClick={() => addToast('Fejlbesked!', 'error')}>Vis Fejl Besked</button>
      <button className={styles.toastButton} onClick={() => addToast('Advarselsbesked!', 'warning')}>Vis Advarsel Besked</button>
    </div>
  );
};

