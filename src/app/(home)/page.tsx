import Banner from "@/components/Banner";
import BookStore from "@/components/BookStore";
import DownloadSection from "@/components/DownloadSection";
import HowWork from "@/components/HowWork";
import OurFeature from "@/components/OurFeature";

export default function Home() {
  return (
    <div>
      <Banner />
      <OurFeature></OurFeature>
      <HowWork></HowWork>
      <BookStore ></BookStore>
      <DownloadSection/>
    </div>
  );
}
