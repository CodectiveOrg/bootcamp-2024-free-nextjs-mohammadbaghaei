import { ReactElement } from "react";

import GlobalSearchBox from "@/components/globalSearchBox/globalSearchBox";
import Doctorino from "@/assets/logo/doctorino";

import styles from "./page.module.css";

export default function Home(): ReactElement {
  throw  new Error("sdkdgjgdfj");
  return (
    <div className={styles.home}>
      <h1>
        <Doctorino />
        دکترینو
      </h1>
      <GlobalSearchBox />
      <div className={styles.history}>
        <div className={styles.title}>آخرین جستجوهای شما</div>
        <ul>
          <li>ارتوپد</li>
          <li>قلب و عروق</li>
        </ul>
      </div>
    </div>
  );
}
