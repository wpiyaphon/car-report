import { Button } from '@/components/ui/button';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Button variant="outline">Click me</Button>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}
