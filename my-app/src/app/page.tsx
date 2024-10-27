import Link from 'next/link';
import styles from  "../../services/styles/Home.module.css"

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to My Next.js App</h1>
      <nav>
        <ul className={styles.navList}>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/services">Services</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;

