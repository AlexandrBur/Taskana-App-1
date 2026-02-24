import Content from '../../components/content/Content';
import Header from '../../components/header/Header';
import IncomingTasks from '../../pages/incomingTasks/IncomingTasks';

const AppLayout = () => {
  return (
    <>
      <Header />
      <Content>
        <IncomingTasks />
      </Content>
    </>
  );
};

export default AppLayout;
