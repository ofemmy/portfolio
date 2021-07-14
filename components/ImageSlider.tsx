import Slider from "react-slick";
import Image from "next/image";
interface ImageSliderProps {
  images: string[];
  alt: string;
}
export default function ImageSlider({ images }: ImageSliderProps) {
  const imgs = images.map((img) => require(`../public/${img}`));
  console.log(imgs[0].default.blurDataURL);
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,

    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <Slider {...settings}>
      {imgs.map((image) => (
        <Image
          src={image}
          alt="Mueller 4 clean website cover"
          key={image.default.src}
        />
      ))}
    </Slider>
  );
}
