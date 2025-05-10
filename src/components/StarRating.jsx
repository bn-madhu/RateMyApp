import React, { useState } from "react";

export const StarRating = ({
  totalStars = 5,
  rating = 0,
  onRatingChange = () => {},
  size = 24,
  color = "#facc15",
  className = ""
}) => {
  const [hovered, setHovered] = useState(null);

  const StarIcon = ({ filled }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill={filled ? color : "none"} viewBox="0 0 24 24" stroke={filled ? color : "#d1d5db"} strokeWidth={2} width={size} height={size} className="transition-colors duration-200">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.91c.969 0 1.371 1.24.588 1.81l-3.974 2.888a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.974-2.888a1 1 0 00-1.176 0l-3.974 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.083 10.1c-.783-.57-.38-1.81.588-1.81h4.91a1 1 0 00.95-.69l1.518-4.674z"
      />
    </svg>
  );

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {Array.from({ length: totalStars }).map((_, index) => (
        <div
          key={index}
          className={"cursor-pointer"}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => onRatingChange(index + 1)}
          >
          <StarIcon filled={hovered !== null ? index <= hovered : index < rating} />
        </div>
      ))}
    </div>
  );
};
