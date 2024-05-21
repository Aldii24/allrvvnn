import Navbar from "../Navbar/page";

const AppShell = (props) => {
  const { children } = props;

  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default AppShell;
