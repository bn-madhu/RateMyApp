declare module "@madhubn/ratemyapp" {
  import * as React from "react";

  export interface StarRatingProps {
    totalStars?: number;
    rating?: number;
    onRatingChange?: (rating: number) => void;
    readOnly?: boolean;
    size?: number;
    color?: string;
    className?: string;
  }

  export const StarRating: React.FC<StarRatingProps>;
}