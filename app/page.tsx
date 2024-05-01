// 'use client'
import styles from "./page.module.css";
import dynamic from 'next/dynamic'
const ExploreWrapper = dynamic(() => import("@/components/blok/explore/ExploreWrapper"))

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="text-white">
        <ExploreWrapper />
      </div>
    </main>
  );
}
