import * as React from 'react';
import { Text } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// eslint-disable-next-line import/no-unresolved
import Module1 from 'module1/Root';
import { foo } from './foo';
import DataComponent from './DataComponent';

const queryClient = new QueryClient();

export default function App() {
  const [fooText, setFooText] = React.useState<string>('');

  React.useEffect(() => {
    (async () => {
      try {
        const fooText = await foo();
        setFooText(fooText);
      } catch {
        setFooText('Failed to get foo text');
      }
    })();
  }, []);

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Text>App 1</Text>
      <React.Suspense fallback={<Text>Loading module1...</Text>}>
        <Module1 />
      </React.Suspense>
      <DataComponent/>
      <Text>{fooText}</Text>
      </QueryClientProvider>
    </>
  );
}
