import { TExampleRequest, TExampleResponse } from '@/types/example';
import axiosInstance from './axios';

export const fetchExample = async (): Promise<TExampleResponse> => {
  const { data } = await axiosInstance.get<TExampleResponse>('/example');
  if (data) {
    return data;
  }
  throw new Error('Data is undefined');
};

export const updateExample = async (req: TExampleRequest) => {
  await axiosInstance.put<null>(`/example/${req.id}`);
};
