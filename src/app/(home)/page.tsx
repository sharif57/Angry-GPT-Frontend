import Banner from "@/components/Banner";
import BookStore from "@/components/BookStore";
import HowWork from "@/components/HowWork";
import OurFeature from "@/components/OurFeature";

export default function Home() {
  return (
    <div>
      <Banner />
      <OurFeature></OurFeature>
      <HowWork></HowWork>
      <BookStore></BookStore>
    </div>
  );
}
