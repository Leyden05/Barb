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
        <div class="flex flex-col gap-2 md:gap-8 px-8">
          <div class="mt-8 flex flex-col items-center text-white font-light text-lg bg-customBlue p-8 rounded-lg transition duration-300" data-aos="fade-up">
            <h2 class="text-white font-medium text-lg">BOOKING & INQUIRIES:</h2>
            <a href="mailto:barbmusicinquiries@gmail.com" class="text-gray-300 underline">barbmusicinquiries@gmail.com</a>
            {/* <a href="tel:3615490469" class="text-gray-300">361-549-0469</a> */}
          </div>
          <div class="mt-8 flex flex-col items-center text-white font-light text-lg bg-customBlue p-8 rounded-lg transition duration-300" data-aos="fade-up">
            <h2 class="text-white font-medium text-lg">MGMT:</h2>
            <p class="text-gray-300">Grant Pittman @ <a href="https://pittmanagement.net/" target="_blank" class="underline">PittManagement</a></p>
            <a href="mailto:pittmgmt@gmail.com" class="text-gray-300 underline">pittmgmt@gmail.com</a>
            {/* <a href="tel:3615490469" class="text-gray-300">361-549-0469</a> */}
          </div>
        </div>
      </div>
    </main>
  );
}
