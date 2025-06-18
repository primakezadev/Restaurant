import Offers from "@/component/Offer";
import Slider from "@/component/Slider";
import Featured from "@/component/Featured";

export default function Home() {
  return (
  <div className="flex flex-col items-center justify-center w-full">
      <Slider />
      <Featured />
      <Offers />
    </div>
  );
}
