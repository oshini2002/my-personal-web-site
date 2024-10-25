
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/my-image.jpg"
              alt="Al Siam Profile"
              className="shadow-dark"
            />
            <h1>Oshini Disanayaka</h1>
            <p>Undergraduate in University of Sri Jyawardhenapra BSc(hons)in IT</p>
            <div className="social-links">
              
              <a href="https://www.facebook.com/profile.php?id=100081331385224&mibextid=LQQJ4d" target="_blank">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://github.com/" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://www.instagram.com/invites/contact/?igsh=1wyvubvg6rqia&utm_content=q1zf5rs" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/oshini-disanayaka-b22551312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
