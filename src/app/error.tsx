"use client";

import { ReactElement } from "react";
import Image from "next/image";

import Styles from "./error.module.css";

import ErrorImage from "@/assets/illustrations/error.png";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props): ReactElement {
  return (
    <div className={Styles["error"]}>
      <div className={Styles.writings}>
        <div className={Styles["status-code"]}>بدبخت شدیم!</div>
        <h1>یک خطای غیر منتظره رخ داده</h1>
        <p>با عرض پوزش، لطفا با تیم پشتیبانی تماس بگیرید.</p>
      </div>
      <div className={Styles.visuals}>
        <Image draggable="false" src={ErrorImage} alt="" />
      </div>
      <div className={Styles.actions}>
        <button onClick={reset} type="button">
          تلاش مجدد
        </button>
      </div>
      <div className={Styles.trace}>
        <details>
          <summary>لاگ خطا</summary>
          <pre dir="ltr">{error.stack}</pre>
        </details>
      </div>
    </div>
  );
}
