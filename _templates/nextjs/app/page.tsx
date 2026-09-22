import { CoreControl } from "./core-control";
import { ExpoHeader } from "./expo/Header";
import { PrimitivesAnchor } from "./expo/PrimitivesAnchor";
import { ButtonsSection } from "./expo/sections/ButtonsSection";

export default function HomePage() {
  return (
    <>
      <main className="expo-page">
        <div className="expo-wrap">
          <ExpoHeader />
          <PrimitivesAnchor />
          <ButtonsSection />
        </div>
      </main>
      <CoreControl />
    </>
  );
}
