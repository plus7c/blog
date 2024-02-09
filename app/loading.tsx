import styles from '../styles/loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;