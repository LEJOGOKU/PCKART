import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          facere doloremque veritatis odit similique sequi. Odit amet fuga nam
          quam quasi facilis sed doloremque saepe sint perspiciatis explicabo
          totam vero quas provident ipsam, veritatis nostrum velit quos
          recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo
          earum unde eligendi autem praesentium, doloremque distinctio nesciunt
          porro tempore quis eaque labore voluptatibus ea necessitatibus
          exercitationem tempora molestias. Ad consequuntur veniam sequi ullam
          tempore vel tenetur soluta dolore sunt maxime aliquam corporis est,
          quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit
          delectus expedita a alias nam recusandae illo debitis repellat libero,
          quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam
          dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://img.freepik.com/free-photo/view-illuminated-neon-gaming-keyboard-setup-controller_23-2149529367.jpg?size=626&ext=jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Gaming PC's</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://img.freepik.com/free-photo/view-neon-illuminated-gaming-desk-setup-with-keyboard_23-2149529371.jpg?ga=GA1.1.327389780.1721363011&semt=ais_user" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Gaming Accesories</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://img.freepik.com/premium-photo/modern-gamer-chair-dark-background-gamer-concept-gamer-style_191066-5767.jpg?ga=GA1.1.327389780.1721363011&semt=ais_user" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Tables and Chairs</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://img.freepik.com/premium-photo/action-game-room-boys-with-arcade-machine-wall-mount-act-trending-background-room-decorative_1020495-180812.jpg?ga=GA1.1.327389780.1721363011&semt=ais_user" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Sealing Items</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage