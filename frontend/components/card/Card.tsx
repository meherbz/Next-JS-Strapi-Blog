import conditional_renderer from ".../conditional_render";
import Image from "next/image";
import { getCategory } from "@/fetch";
import { getStrapiMedia } from "@/lib/strapi";
import Button from "../button/Button";
import styles from "./card.module.sass";
import getCategoryColor from "./getcategorycolor";
export default async function card(props) {
  const cats = await getCategory("");
  const matchedCategory = cats.find((cat) => cat.name == props.label);
  const img = getStrapiMedia(matchedCategory.FeaturedImage.url);
  return (
    <div className={`${styles.card_wrap} ${props.className || ""}`}>
      <div className={styles.card}>
        <div className={styles.card_imageWrap}>
          <div className={styles.card_image}>
            <Image src={img} alt="tech" fill={true} unoptimized />
          </div>
        </div>
        <div className={styles.card_content}>
          <conditional_renderer condition={props.label}>
            <div
              className={`${styles.card_label} h6 mb-10 c-${getCategoryColor(props.label)}`}
            >
              {props.label}
            </div>
          </conditional_renderer>
          <conditional_renderer condition={props.title}>
            <div className={`${styles.card_title} h3 mb-20`}>{props.title}</div>
          </conditional_renderer>
          <conditional_renderer condition={props.summary}>
            <p className={`${styles.card_summary} fw-600`}>{props.summary}</p>
          </conditional_renderer>
          <conditional_renderer condition={props.href}>
            <Button href={props.href}>Read More</Button>
          </conditional_renderer>
        </div>
      </div>
    </div>
  );
}
