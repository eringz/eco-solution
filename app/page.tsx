
"use client";

import { EmblaOptionsType } from 'embla-carousel'
import { Card, CardContent } from "@/components/ui/card"
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
 } from "@/components/ui/carousel";
 import Autoplay from "embla-carousel-autoplay";
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const carouselOptions: EmblaOptionsType = {
    loop: true,
    direction: 'ltr' // This makes it appear to slide to the right
}


const images = [
  { src: "https://scene7.samsclub.com/is/image/samsclub/20241101-hppov-gifting-d_v2?wid=1152", alt: "Sample image 1" },
  { src: "https://scene7.samsclub.com/is/image/samsclub/20241101-hppov-gifting-d_v2?wid=1152", alt: "Sample image 2" },
  { src: "https://scene7.samsclub.com/is/image/samsclub/20241101-hppov-gifting-d_v2?wid=1152", alt: "Sample image 3" },
  { src: "https://scene7.samsclub.com/is/image/samsclub/20240819-hppov-delivery-d?wid=1152", alt: "Sample image 4" },
  { src: "https://scene7.samsclub.com/is/image/samsclub/20241101-mm-meals-d?wid=1152", alt: "Sample image 5" },
]


const Home = () => {
  return (
    <main className="container mx-9">
      <section className="flex">
        <div className="flex-1 bg-blue-300">
        <Carousel>
          <CarouselContent>
            {images.map((image, index) => (
              <div>
                <Image
                  src={image.src}
                />
              </div>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        </div>
        <div className='flex'>
          <div>
            <div>Free Shipping</div>
            <div>Exlusive vouchers</div>
          </div>
          <div>
            Try our app
          </div>
        </div>
      </section>
      <section>
        
      </section>
      <section>Trending Products || Trnding Categories</section>
      <section>Top Picks</section>
      <section>Latest Finds</section>
      <section>Flash Deals</section>
    </main>
  )
}

export default Home