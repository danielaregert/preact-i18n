import Header from '../components/Header';

const MainLayout = ({ children }) => (
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-1">
      {children}
    </main>
   
  </div>
);

export default MainLayout;