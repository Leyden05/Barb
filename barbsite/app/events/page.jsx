import Shows from '../components/Shows';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <main className="">
      <Nav/>
      <div class="flex w-full justify-center pt-32">
    <script charset="utf-8" src="https://widget.bandsintown.com/main.min.js"></script><a class="bit-widget-initializer" data-artist-name="Barb" data-display-local-dates="false" data-display-past-dates="false" data-auto-style="true" data-text-color="#000000" data-link-color="#00b4b3" data-background-color="rgba(0,0,0,0)" data-display-limit="15" data-display-start-time="false" data-link-text-color="#000000" data-display-lineup="false" data-display-play-my-city="true" data-separator-color="rgba(124,124,124,0.25)"></a>
    </div>
      <Shows/>
    </main>
  );
}