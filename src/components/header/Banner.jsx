const Banner = () => {
  return (
    <div>
      <div
        className="hero"
        
      >
        <img src="https://i.ibb.co/1652VZX/pexels-chan-walrus-958545.jpg" className="rounded-lg" alt="" />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Greetings...</h1>
            <p className="mb-5">
            A restaurant is a commercial establishment that prepares and serves food to paying customers. Restaurants are a popular social hub for dining, and they can range from small, casual establishments to large, fine-dining restaurants
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
