import instance, { BASE_API_URL } from '@/services/config/axios';

export type ReviewItemType = {
  reviewId: number;
  reviewName: string;
  reviewImg: string;
  reviewContent: string;
};

export type ReviewListResponse = ReviewItemType[];

const getReviewList = (): Promise<ReviewListResponse> => {
  const url = `${BASE_API_URL}/review`;
  const method = 'GET';
  return instance({ url, method });
};

export default { getReviewList };
