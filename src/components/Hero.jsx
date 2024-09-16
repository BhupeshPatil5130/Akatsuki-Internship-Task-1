
import akatsukit from '../assets/images/akatsuki.png'
const Hero = () => {
  return (
    <div className="hero">
    <div className="container">
      <div className="left">
        <h1 className="h1">Welcome to <b>Akatsuki Coding Club</b> <br /></h1>
        <h2 className="h2">Join the Future of Tech!</h2>

        <p className="h3">
          Learn, Code, and Innovate with like-minded
          <abbr title="Developers, Designers, and Tech Enthusiasts"
            >a11y</abbr
          >
        </p>

        <div className="btn-group">
          <a href="#contact" className="btn btn-primary">Join Us</a>
          <a href="#about" className="btn btn-secondary">Learn More</a>
        </div>
      </div>

      <div className="right">
        <div className="pattern-bg"></div>
        <div className="img-box">
          <img
            src={akatsukit}
            alt="Julia Walker"
            className=""
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero
