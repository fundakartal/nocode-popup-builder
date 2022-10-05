import Container from '../../components/container';
import styles from './Stats.module.scss';

const Stats = () => {
  return (
    <div className={styles.stats}>
      <Container>
        <div className={styles.statsContainer}>
          <p className={styles.statsText}>
            <span className={styles.statsTextSpan}>3x</span>
            Increase Conversion Rate
          </p>
          <p className={styles.statsText}>
            <span className={styles.statsTextSpan}>120%</span>
            Increase Conversion Rate
          </p>
          <p className={styles.statsText}>
            <span className={styles.statsTextSpan}>390%</span>
            Increase Conversion Rate
          </p>
          <p className={styles.statsInfo}>
            Popupsmart meets all your business needs.
          </p>
        </div>
      </Container>
    </div>
  );
};
export default Stats;
