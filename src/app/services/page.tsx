import type { NextPage } from "next";

const Service: NextPage = () => {
  return (
    <>
        <section className="service section" id="services">
  <div className="container">
    <div className="row">
      <div className="section-title padd-15">
        <h2>My Projects</h2>
      </div>
    </div>
    <div className="row">
      {/* Service Item 1: Logo Design */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
        <img src="/imgs/food-ordering-system.png" alt="Food Ordering System" className="project-image" />

          <div className="icon"><i className="fa fa-paint-brush" /></div>
          <h4>Food Ordering System</h4>
          <p>At university, I developed a food ordering system using Java for both backend and frontend development. This system streamlined the process of ordering food online, with user-friendly interfaces and efficient order management. It highlighted my skills in Java programming, web development, and problem-solving. https://github.com/HarleeS/Food-ordering-project.git</p>
        </div>
      </div>
      
      {/* Service Item 1 End */}
      {/* Service Item 2: Web Design */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
        <img src="/imgs/about-sigiriya.jpg" alt="Food Ordering System" className="project-image" />

          <div className="icon"><i className="fa fa-laptop" /></div>
          <h4>Web Design</h4>
          <p>At university, I developed a website about Sigiriya using Next.js, HTML, and CSS. This project showcases the beauty and history of Sigiriya, a UNESCO World Heritage Site in Sri Lanka, with engaging visuals and informative content. It demonstrates my skills in web development, responsive design, and front-end frameworks  https://github.com/FHSS-USJ/assignment-01-oshini2002.git 
          </p>
        </div>
      </div>
      {/* Service Item 1 End */}
      {/* Service Item 2: Web Design */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
        <img src="/imgs/movie-explore.png" alt="Food Ordering System" className="project-image" />

          <div className="icon"><i className="fa fa-laptop" /></div>
          <h4>Web Design</h4>
          <p>At university, I developed a Movie Explorer web application using Next.js. This app allows users to search and explore movie details, showcasing my skills in dynamic web development, routing, and front-end design. It integrates interactive elements to create a seamless user experience in exploring various movies. https://github.com/FHSS-USJ/assignment-02-oshini2002.git and https://github.com/FHSS-USJ/assignment-02-oshini2002.git
          </p>
        </div>
      </div>
      
      
      
      {/* Service Item 5 End */}
      {/* Service Item 6: SEO Optimization */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
        <img src="/imgs/library-day.jpg" alt="Food Ordering System" className="project-image" />

          <div className="icon"><i className="fa fa-rocket" /></div>
          <h4>Library Day</h4>
          <p>During my school time,I took the lead in organizing Library Day, guiding my  group members through the planning and execution of the event. This experience helped me develop leadership, teamwork, and organizational skills.
          </p>
        </div>
      </div>
      {/* Service Item 6 End */}
    </div>
  </div>
</section>


    </>
  );
};

export default Service;
