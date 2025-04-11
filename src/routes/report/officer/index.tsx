import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/report/officer/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/report/officer/"!</div>;
}
