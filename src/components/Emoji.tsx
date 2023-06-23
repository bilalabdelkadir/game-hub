import AlienEx from "../assets/em2.png";
import Alien from "../assets/em1.png";
import Meh from "../assets/meh.png";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: Meh, alt: "Meh", boxSize: "25px" },
    4: { src: Alien, alt: "recomanded", boxSize: "30px" },
    5: { src: AlienEx, alt: "exceptional", boxSize: "65px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
