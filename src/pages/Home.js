import PrismaticBurst from '../components/PrismaticBurst';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="prismatic-container">
        <PrismaticBurst
          animationType="rotate"
          intensity={1}
          speed={0.8}
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
          <a href="/" className="navbar-logo">
            <span className="logo-icon">✦</span>
            Zenkolab
          </a>
          <ul className="navbar-menu">
            <li><a href="#features">Features</a></li>
          </ul>
          <div className="navbar-auth">
            <button className="btn-signin">Sign in</button>
            <button className="btn-signup">Sign up</button>
          </div>
        </div>
      </nav>

      <div className="content">
        <div className="hero">
          <h1>Un oeil sur demain,<span className="highlight">dès aujourd'hui.</span></h1>
          
          <p className="hero-subtitle">
            Explore our cutting-edge dashboard, delivering high-quality solutions tailored to your needs.<br />
            Elevate your experience with top-tier features and services.
          </p>
          
          <div className="email-section">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="email-input"
            />
            <button className="btn btn-primary">Start now</button>
          </div>
          
          <p className="terms-text">
            By clicking "Start now" you agree to our <a href="#terms">Terms & Conditions</a>.
          </p>
        </div>

        <div className="image-placeholder">
          {/* Add your image here - replace with an img tag or image component */}
        </div>
      </div>
    </div>
  );
};

export default Home;
