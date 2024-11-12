import ContactFormLarge from "../components/ContactLarge";
import Nav from "../components/Nav";
import BarbContact from "../components/BarbContact";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <BarbContact />
      {/* <h2 class="text-white text-4xl text-center" data-aos="fade-up">Contact me</h2> */}
      <div class="flex flex-col md:flex-row gap-8 md:gap-32 w-full justify-center sm:px-0 px-8">
        <ContactFormLarge />
        <div class="mt-8 flex flex-col items-center text-white font-light text-lg bg-customBlue hover:bg-customBlueDark p-8 rounded-lg transition duration-300" data-aos="fade-up">
          <h2 class="text-white font-medium text-lg">Barb</h2>
          <a href="mailto:barbmusicinquiries@gmail.com" class="hover:text-gray-300">barbmusicinquiries@gmail.com</a>
          {/* <a href="tel:3615490469" class="hover:text-gray-300">361-549-0469</a> */}
        </div>
      </div>
    </main>
  );
}
