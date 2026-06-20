import { Header, Content } from '@/components';
import { IncomingTasks } from '@/pages';

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Content>
        <IncomingTasks />
      </Content>
    </>
  );
};
