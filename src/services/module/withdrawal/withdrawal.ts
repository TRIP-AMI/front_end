import instance from '@services/config/axios';
// import { useMutation } from '@tanstack/react-query';

export type WithdrawalResponse = NonNullable<unknown>;

export type WithdrawalRequest = {
  memberId: number;
  reason: string;
};

export const postWithdrawal = async ({
  memberId,
  reason,
}: WithdrawalRequest): Promise<WithdrawalResponse> => {
  const res = await instance.post(`/members/${memberId}/withdrawal`, {
    reason,
  });
  return res.data.data;
};

// TODO useMutation 동작을 잘 못함
// export const useWithdrawalQuery = ({ memberId, reason }: WithdrawalRequest) => {
//   return useMutation({
//     mutationFn: async () => postWithdrawal({ memberId, reason }),
//     onSuccess: () => {
//       console.log('success');
//     },
//     onError: () => {
//       console.log('error');
//     },
//     onSettled: () => {
//       console.log('settled');
//     },
//   });
// };
