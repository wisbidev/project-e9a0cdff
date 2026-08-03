"use client";

import { mockMenuData } from "@/lib/mock/menu-section-with-three-drinks";
import styles from "./MenuSection.module.css";

export default function MenuSection() {
  const { drinks } = mockMenuData;

  return (
    <section className={styles.menu} id="menu" aria-label="Menu">
      <div className={styles.menuInner}>
        <h2 className={styles.heading}>Menu</h2>
        <div className={styles.list} role="list">
          {drinks.map((drink) => (
            <div
              key={drink.name}
              className={styles.drink}
              role="listitem"
            >
              <span className={styles.name}>{drink.name}</span>
              <span className={styles.dots} aria-hidden="true" />
              <span className={styles.price}>{drink.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
