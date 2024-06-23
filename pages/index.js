import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout/Layout';
// import Resepsi from '../public/assets/icons/resepsi.svg';
import Ring from '../public/assets/icons/ring.svg';

import Location from '../public/assets/icons/location.svg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wedding Invitation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* Header Mobile */}
        <section
          id="beranda"
          className="flex lg:hidden bg-cover bg-center  w-full h-screen  items-start py-14"
          style={{ backgroundImage: 'https://placehold.co/1000x1000' }}
        >
          <div className="flex flex-col  w-full relative">
            <div className="absolute h-full w-full bg-dark-450 bg-blur-2px"></div>
            <div className="flex flex-col w-full text-dustyBlue2 text-center h-auto  px-8 py-3.5 z-10">
              <p className="font-habibi ">The Wedding of</p>
              <h4 className="font-great-vibes text-5xl mb-4 mt-6">
                Dave &nbsp; & &nbsp; Vianca
              </h4>
              <p className="font-habibi ">18 May 2024</p>
            </div>
          </div>
        </section>
        {/* End Header Mobile */}
        <section
          id="beranda-dekstop"
          className="hidden lg:grid  py-14 lg:py-0 mb:pb-6 grid-flow-col grid-cols-2 gap-4 row-span-4 h-screen"
        >
          <div className="flex flex-col text-white px-8 pb-20 pt-28 justify-end">
            <div className="flex flex-col text-center my-auto">
              <p>
                “In in irure Lorem culpa do ea. Dolore laboris qui minim ullamco
                incididunt velit ullamco culpa deserunt officia dolor minim. Non
                amet veniam consectetur commodo deserunt pariatur labore dolore.
                Est voluptate est ea exercitation mollit do voluptate irure.
                Aute consectetur officia incididunt nostrud in aliquip aliqua
                velit enim. Dolore laborum voluptate quis tempor non eiusmod
                consequat ullamco ullamco sint reprehenderit. Sit duis cupidatat
                labore esse. Eu ex in anim commodo culpa commodo Lorem ea
                laborum ea magna veniam. Id magna dolor consequat sint commodo
                et. Magna velit id elit enim sunt ex proident. Quis deserunt
                sunt commodo excepteur laborum laborum consequat irure officia
                laboris. Dolore minim occaecat exercitation exercitation cillum
                ex minim. Adipisicing nulla occaecat ullamco duis.”
              </p>
              <p>( Lorem)</p>
            </div>
            <div className="flex flex-col ">
              <p className="font-habibi">The Wedding of</p>
              <h4 className="font-great-vibes text-5xl mb-4 mt-6">
                Dave &nbsp; & &nbsp; Vianca
              </h4>
              <p className="font-habibi ml-auto">18 May 2025</p>
            </div>
          </div>
          <div className="flex w-full relative">
            <Image
              src="https://placehold.co/1000x1000"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              quality={100}
              loading="lazy"
            />
          </div>
        </section>
        <section
          id="resepsi"
          className="bg-[799fad] py-14 mb:pb-6 grid grid-flow-row gap-4 row-span-4 h-screen"
        >
          <div className="flex flex-col  w-full relative lg:h-full">
            <div className="absolute h-full w-full bg-dark-450 bg-blur-2px lg:hidden"></div>
            <div className="flex flex-col w-full text-white text-center h-auto  px-8 py-3.5 z-10 lg:my-auto">
              <p className="font-habibi">The Wedding of</p>
              <h4 className="font-great-vibes text-5xl lg:text-7xl mb-4 mt-6 ">
                Dave &nbsp; & &nbsp; Vianca
              </h4>
              <p className="font-habibi ">18 May 2025</p>
              <p className="text-xs md:text-base lg:text-lg">
                Sunday - 3:30 PM
              </p>
            </div>
          </div>
          {/* <div className="flex w-full px-8 text-white font-habibi text-sm md:text-base lg:text-xl">
            <div className="flex flex-col w-1/2 text-center px-2 break-words">
              <p>Putra dari</p>
              <p>Bapak Badril Munir</p>
              <p>Ibu Sartinah</p>
            </div>
            <div className="flex flex-col w-1/2 text-center px-2 break-words ">
              <p>Putra dari</p>
              <p>Bapak Badril Munir</p>
              <p>Ibu Sartinah</p>
            </div>
          </div> */}
          <div className="flex flex-col mx-auto h-40 lg:h-full items-center justify-center w-full px-8">
            <div className="flex flex-col md:flex-row w-full">
              <div className="flex w-full my-2 md:justify-center">
                <Ring className="h-12 md:h-16 w-12 md:w-16  mr-6 my-auto" />
                <div className="flex flex-col text-white font-habibi gap-2 h-full">
                  <p className="text-base md:text-lg lg:text-3xl">Church </p>
                  <p className="text-xs md:text-base lg:text-lg">
                    The Parish of Our Lady of Mount Carmel - Barasoain Church
                  </p>
                  <p className="text-sm">
                    Paseo del Congreso Street corner Don Antonio Bautista
                    Street, Brgy. San Gabriel, Malolos
                  </p>
                </div>
              </div>

              <div className="flex w-full my-2 md:justify-center">
                <img
                  src="/assets/icons/resepsi.svg"
                  className="h-12 md:h-16 w-12 md:w-16  mr-6 my-auto"
                />
                <div className="flex flex-col text-white font-habibi gap-2 h-full">
                  <p className="text-base md:text-lg lg:text-3xl">Reception </p>
                  <p className="text-xs md:text-base lg:text-lg">
                    Lian Gwen Pavilion
                  </p>
                  <p className="text-sm">
                    593 Diversion Rd Santa Isabel, Malolos
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mx-auto h-32 lg:h-full items-start lg:items-end justify-start w-full px-8">
            <a
              href="https://maps.app.goo.gl/HhtKbypqvwvhhz6MA"
              className="mt-6 px-6 md:px-12 py-2 md:py-3 flex justify-center items-center border-white border rounded-l-full rounded-r-full mx-auto text-white font-habibi text-sm md:text-base"
            >
              <Location className="h-8 md:h-10 w-8 md:w-10 mr-4" />
              Google Maps
            </a>
          </div>
        </section>
        <section id="gallery" class="pt-8 md:pt-0 lg:pt-32 pb-24 lg:pb-8">
          <h1 className="text-center text-5xl font-great-vibes my-auto mx-auto text-white mb-8 ">
            Gallery
          </h1>
          <div className="grid grid-flow-row gap-4 grid-rows-7 lg:grid-rows-5 grid-cols-2 lg:grid-cols-3 h-screen px-4 lg:px-8">
            <div className="flex row-span-3 ">
              <Image
                src="https://placehold.co/1000x1000"
                alt="Picture of the author"
                width={500}
                height={500}
                objectFit="cover"
                quality={100}
                loading="lazy"
              />
            </div>
            <div className="flex  row-start-3 col-start-2 row-span-3 lg:row-span-5 bg-white">
              <Image
                src="https://placehold.co/1000x1000"
                alt="Picture of the author"
                width={500}
                height={500}
                objectFit="cover"
                quality={100}
                loading="lazy"
              />
            </div>
            <div className="flex row-span-1 col-start-2 lg:col-start-3 row-start-2  lg:row-span-2">
              <Image
                src="https://placehold.co/1000x1000"
                alt="Picture of the author"
                width={500}
                height={500}
                objectFit="cover"
                quality={100}
                loading="lazy"
              />
            </div>
            <div className="flex row-span-1 lg:row-span-3">
              <Image
                src="https://placehold.co/1000x1000"
                alt="Picture of the author"
                width={500}
                height={500}
                objectFit="cover"
                quality={100}
                loading="lazy"
              />
            </div>
            <div className="flex row-span-2 lg:row-span-2 col-span-2 lg:col-span-1 w-full relative">
              <Image
                src="https://placehold.co/1000x1000"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
                quality={100}
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
