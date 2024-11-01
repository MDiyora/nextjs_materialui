import Register from "@/components/Register";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Register />
      </main>
    </div>
  );
}
