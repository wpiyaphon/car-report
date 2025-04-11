import { updateExample } from '@/api/example';
import { useMutation } from '@tanstack/react-query';
import { EXAMPLE } from '../key';
import queryClient from '../query-client';
import { TExampleRequest } from '@/types/example';

export const useUpdateExampleMutation = () =>
  useMutation({
    mutationFn: (req: TExampleRequest) => updateExample(req),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [EXAMPLE] });
    },
  });
