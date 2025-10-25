import PrismaticBurst from '../components/PrismaticBurst';
import CardNav from '../components/CardNav';
import LogoLoop from '../components/LogoLoop';
import logo from '../assets/logo.png';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import './Home.css';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

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
      
      <CardNav
        logo={logo}
        logoAlt="Zenkolab"
        items={[
          {
            label: 'Features',
            bgColor: '#0D0716',
            textColor: '#fff',
            links: [
              { label: 'Overview', ariaLabel: 'Features Overview' },
              { label: 'Integrations', ariaLabel: 'Features Integrations' }
            ]
          },
          {
            label: 'Pricing',
            bgColor: '#170D27',
            textColor: '#fff',
            links: [
              { label: 'Plans', ariaLabel: 'Pricing Plans' },
              { label: 'Enterprise', ariaLabel: 'Pricing Enterprise' }
            ]
          },
          {
            label: 'About',
            bgColor: '#271E37',
            textColor: '#fff',
            links: [
              { label: 'Company', ariaLabel: 'About Company' },
              { label: 'Careers', ariaLabel: 'About Careers' }
            ]
          }
        ]}
        baseColor="rgba(255,255,255,0.02)"
        menuColor="#fff"
        buttonBgColor="#fff"
        buttonTextColor="#000"
        ease="power3.out"
      />

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

        <div className="logo-loop-section">
          <p className="logo-loop-title">Built with modern technologies</p>
          <LogoLoop
            logos={techLogos}
            speed={30}
            direction="left"
            logoHeight={60}
            gap={60}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="rgb(0, 0, 0)"
            ariaLabel="Technology stack"
            className="logo-loop-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
