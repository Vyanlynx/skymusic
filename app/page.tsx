// 'use client'
import ExploreWrapper from "@/components/blok/explore/ExploreWrapper";
import styles from "./page.module.css";
export default function Home() {

  return (
    <main className={styles.main}>
      <div className="text-white">
        <ExploreWrapper />
      
      </div>
    </main>
  );
}
