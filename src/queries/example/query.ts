import { TExampleResponse } from '@/types/example';
import { useQuery } from '@tanstack/react-query';
import { fetchExample } from '../../api/example';
import { EXAMPLE } from '../key';

export const useGetExample = () =>
  useQuery<TExampleResponse>({
    queryKey: [EXAMPLE],
    queryFn: fetchExample,
  });
