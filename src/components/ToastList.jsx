

import {NotificationItem} from './NotivicationItem';
import styles from '../styles/ToastStyle.module.scss';

export function ToastList({ toasts }) {
  return (
    <div className={styles.toastContainer}>
      {toasts.map((toast) => (
        <NotificationItem key={toast.id} toast={toast} />
      ))}
    </div>
  );
}
