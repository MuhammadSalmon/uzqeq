import HeroSlider from "@/components/Hero";
import WeDo from "@/components/WeDo";
import Welcome from "@/components/Welcom";
import WorkHistory from "@/components/WorkHistory";

export default function Home() {
  return (
    <div className="w-full">
     <HeroSlider/>
      <Welcome />
      <WeDo />
      <WorkHistory />
    </div>
  );
}
