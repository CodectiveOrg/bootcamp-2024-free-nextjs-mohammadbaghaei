import { ReactElement } from "react";
import Image from "next/image";

import GlobalSearchBox from "@/components/globalSearchBox/globalSearchBox";

import Styles from "./not-found.module.css";

import NotFoundLogo from "@/assets/illustrations/404.svg";

export default function NotFound(): ReactElement {
  return (
    <div className={Styles["not-found"]}>
      <div className={Styles.visuals}>
        <Image src={NotFoundLogo} draggable="false" alt="" />
      </div>
      <div className={Styles.writings}>
        <h1>گشتم نبود...</h1>
        <p>
          چیزی که دنبالش بودین پیدا نشد ولی میتونید از کادر زیر مشابه اون رو
          پیدا کنید.
        </p>
      </div>
      <div className={Styles.search}>
        <GlobalSearchBox />
      </div>
    </div>
  );
}
