import { ReactElement } from "react";

import HugeiconsSearch01 from "@/icons/HugeiconsSearch01";

import styles from "./globalSearchBox.module.css";
import HugeiconsLocation04 from "@/icons/HugeiconsLocation04";

export default function GlobalSearchBox(): ReactElement {
  return (
    <div className={styles["global-search-box"]}>
      <div className={styles.search}>
        <HugeiconsSearch01 />
      </div>
      <input type="text" placeholder="نام پزشک، نوع تخصص و..." />
      <div className={styles.divider}></div>
      <div className={styles.cities}>
        <button>
          <HugeiconsLocation04 />
          همه شهرها
        </button>
      </div>
    </div>
  );
}
