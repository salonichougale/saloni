import Header from "../components/Header/Header";

const HomePage = () => {
  return(
    <div className="container">
        <Header/>
        <div className="header">
        <div className="card">
          <img src="/images/vck2.png" class="banner"/> 
          <h1 className="centerText">
          Welcome To Vivekanand <br/>
          College!<br/>
          <h5 className="subtitle">Your journey to excellence starts here.</h5>
          </h1>
         <p className="card1">*Vivekanand College* is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.
        </p>
        <p className="card1">At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.
        </p>
        <h2 className="card1">Why Choose Vivekanand College?
        </h2>
        <ul className="card1" type="disk">
          <li>*Legacy of Excellence:* Decades of commitment to quality education.
          </li>
          <li>*Experienced Faculty:* Learn from renowned experts and passionate educators.
          </li>
          <li>*Modern Facilities:* Well-equipped labs, expansive library, and comfortable campus.
          </li>
          <li>*Holistic Development:* Focus on co-curricular activities, sports, and community service.
          </li>
          <li>*Strong Placements:* Excellent career opportunities with leading companies
          </li>
          </ul>
          <h2 className="card1">Campus Life & Facilities</h2>
          <div className="row" gap='20px'>
          <div className="column">
          <img src="/images/student.jpeg" alt="student" width="100%" height="180"/>
          </div>
          <div className="column">
          <img src="/images/vckclg.jpg" alt="vckclg" width="120%" height="180"/>
          </div>
          </div>
          <p className="card1">Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.
          </p>
          <p className="style">Ready to explore our courses?
          </p>
          <a className="but2" href="/cources">Enroll Here!!</a>
          </div>
          </div>
          </div>
    
    
    
  
  )
}
  export default HomePage;