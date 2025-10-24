import PrismaticBurst from '../components/PrismaticBurst';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="prismatic-container">
        <PrismaticBurst
          animationType="rotate"
          intensity={2}
          speed={0.5}
          distort={0}
          paused={false}
          offset={{ x: 0, y: 0 }}
          hoverDampness={0.25}
          rayCount={0}
          mixBlendMode="lighten"
          colors={['#000000ff', '#2d267cff', '#e9afafff']}
        />
      </div>
      
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <span className="logo-icon">✦</span>
            Zenkolab
          </div>
          <ul className="navbar-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#docs">Docs</a></li>
          </ul>
        </div>
      </nav>

      <div className="content">
        <div className="badge">
          <span className="badge-icon">✦</span>
          New Background
        </div>
        
        <div className="hero">
          <h1>A burst of dancing colors, beautifully unleashed</h1>
          
          <div className="cta-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
