import Link from 'next/link';
import styles from '../../styles/Services.module.css';

const Services = () => {
  return (
    <div className={styles.container}>
      <h1>Our Services</h1>
      <ul>
        <li><Link href="/services/service1">Service 1</Link></li>
      </ul>
    </div>
  );
};

export default Services;
