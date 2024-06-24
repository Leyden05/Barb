import ContactFormLarge from "../components/ContactLarge";
import Nav from "../components/Nav";
import BarbContact from "../components/BarbContact";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <BarbContact />
      <h2 class="text-white text-4xl text-center">Contact me</h2>
      <div class="flex flex-col md:flex-row gap-8 md:gap-32 w-full justify-center">
        <ContactFormLarge />
        <div class="mt-8 md:mt-32 max-w-7xl flex flex-col items-center text-white font-light text-lg">
          <h2 class="text-white font-medium text-lg">Grant Pittman @ pittManagement</h2>
          <a href="mailto:grantcpittman@gmail.com" class="hover:text-gray-300">grantcpittman@gmail.com</a>
          <a href="tel:3615490469" class="hover:text-gray-300">361-549-0469</a>
        </div>
      </div>
    </main>
  );
}
