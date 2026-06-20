import { AppLayout } from '@/layouts';
import { ThemeProvider } from '@/contexts/theme';

export const App = () => {
  return (
    <ThemeProvider>
      <AppLayout />
    </ThemeProvider>
  );
};
