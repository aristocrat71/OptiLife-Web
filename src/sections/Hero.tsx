import { DOWNLOAD_URL } from "../site";
import PopButton from "../components/PopButton";
import Icon from "../components/Icon";
import ScreenshotGallery from "../components/ScreenshotGallery";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-24 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl leading-[1.1] text-cream sm:text-5xl lg:text-6xl">
            Tired of your main quests ?{" "}
            <span className="text-yellow">
              Recharge your Life Energy with some side quests.
            </span>
          </h1>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
            <PopButton href={DOWNLOAD_URL} size="lg" id="hero-download">
              <Icon name="download" className="h-5 w-5" />
              Download OptiLife
            </PopButton>
            <PopButton href="#loop" variant="ghost" size="lg">
              See how it works
            </PopButton>
          </div>
        </div>

        <ScreenshotGallery />
      </div>
    </section>
  );
}
