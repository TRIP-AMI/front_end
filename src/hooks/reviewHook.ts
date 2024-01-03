import { useState } from 'react';
import reviewApi, {
  ReviewListResponse as ReviewItemType,
} from '@/services/module/review/review';

const useReview = () => {
  const [reviews, setReviews] = useState<ReviewItemType[]>([]);

  const getReviews = async () => {
    try {
      const data = await reviewApi.getReviewList();
      setReviews(data);
    } catch (error) {
      console.error('배너 목록 호출에 실패하였습니다.', error);
    }
  };

  return { reviews, setReviews, getReviews };
};

export default useReview;
