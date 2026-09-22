import type { ReactNode } from "react";

export function ExpoSection(props: { title: string; description: string; children: ReactNode }) {
  return (
    <section className="expo-section">
      <div className="expo-section-header">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      {props.children}
    </section>
  );
}
