import Footer from "@/components/layout/footer";
import Carousel from "@/components/carousel";
import { ThreeItemGrid } from "@/components/grid/three-items";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <>
      <ThreeItemGrid />
      <Suspense>
        <Carousel />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
