import Header from './ui/header';
import './App.css';
import Footer from './ui/footer';
import SidebarNav from './ui/sidebar-nav';
import MainContent from './ui/mainContent/index.js';

const App = () => {
  return (
    <main>
      <Header />
      <div className="container-fluid wrapper" style={{background:'#f8fafc'}}>
        <SidebarNav />
        <MainContent />

      </div>
      <Footer />
    </main>
  );
}

export default App;
