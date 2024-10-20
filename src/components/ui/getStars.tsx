import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const getStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <>
      {/* Full Stars */}
      {Array.from({ length: fullStars }).map((_, index) => (
        <FaStar key={index} className="text-yellow-500" />
      ))}

      {/* Half Star */}
      {hasHalfStar && <FaStarHalfAlt className="text-yellow-500" />}

      {/* Empty Stars */}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <FaRegStar key={index} className="text-yellow-500" />
      ))}
    </>
  );
};

export default getStars;
