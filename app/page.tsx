// 'use client'
// import { useEffect } from "react";
import ExploreWrapper from "@/components/blok/explore/ExploreWrapper";
import styles from "./page.module.css";
import axiosInterceptorInstance from "@/utils/service";
export default function Home() {
  // useEffect(() => {
  //   getData()
  // }, [])
  // const getData = async () => {
  //   try {
  //     const response = await axiosInterceptorInstance.get('1'); // Replace with your API endpoint
  //     // Handle the response data here
  //     console.log(response.data);
  //   } catch (error) {
  //     // Handle the error here
  //     console.log(error);
  //   }
  // };
  return (
    <main className={styles.main}>
      <div className="text-white"><ExploreWrapper/></div>
      {/* <div onClick={getData}>tgyhujiol</div> */}
    </main>
  );
}
