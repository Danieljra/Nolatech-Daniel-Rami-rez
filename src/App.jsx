import { Nav } from "./components";
import {
  Live,
  DateAndTime,
  AboutUs,
  Services,
  Subscribe,
  LatestVideos,
  JoinUs,
  SuperQuality,
  Carousel,
  Footer,
} from "./sections";

const App = () => {
  return (
    <main className='relative'>
        <Live />
      <section className='bg-hero z-0 w-full  h-[600px]   bg-fixed bg-cover'>
        <Nav />
      </section>
      <section >
        <DateAndTime />
      </section>
      <section className='padding'>
        <AboutUs />
      </section>
      <section className='padding'>
        <Services />
      </section>
      <section className='bg-[#3FFA53]'>
        <Subscribe />
      </section>
      <section>
        <LatestVideos/>
      </section>
      <section  className='bg-joinUs z-0 w-full  h-[800px] bg-fixed bg-cover flex flex-col  items-end'>
        <JoinUs/>
      </section>
      <section className=" bg-superQuality   w-full  h-[600px]  bg-cover flex flex-row ">
        <SuperQuality />
      </section>
      <section className=" bg-green-700   w-full  h-[600px]  bg-cover flex flex-col justify-center  items-center p-5 ">
        <Carousel />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default App;