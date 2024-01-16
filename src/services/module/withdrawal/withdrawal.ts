import instance from '@services/config/axios';
import { useQuery } from '@tanstack/react-query';

export const QUERY_KEY = '/withdrawal';

export type WithdrawalResponse = NonNullable<unknown>;

export const getWithdrawal = async (
  memberId: number,
  reason: string,
): Promise<WithdrawalResponse> => {
  const res = await instance.post(`/members/${memberId}/withdrawal`, {
    reason,
  });
  return res.data.data;
};

export const useWithdrawalQuery = (memberId: number, reason: string) => {
  return useQuery({
    queryKey: [QUERY_KEY, memberId, reason],
    queryFn: () => getWithdrawal(memberId, reason),
  });
};
