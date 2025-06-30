import Header from "../components/Header/Header";

const AddmissionPage = () => {
  return(
    <div className="container">
      <Header/>
      <div className="header">
      <div className="card">
        <div className="card1">
     <h1 className="centerText1">Admissions at Vivekanand College</h1>
     <p>Welcome to the Admissions page of Vivekanand College! We are delighted you're considering joining our vibrant academic community. Our admission process is designed to be straightforward and accessible.
     </p>
     <p>Please review the eligibility criteria and key dates below for the upcoming academic year. For any queries, feel free to contact our admissions office.
     </p>
     <h2>Eligibility Criteria for Undergraduate Programs
     </h2>
     <table border="1">
     <tbody>
      <th>Program</th>
      <th>Minimum Qualification</th>
      <th>Required Subjects</th>
      <th>Minimum Marks(%)</th>
     </tbody>
     <tbody>
      <td>B.Sc. Computer Science</td>
      <td>10+2 (or equivalent)</td>
      <td>Physics, Chemistry, Maths</td>
      <td>50%</td>
     </tbody>
     <tbody>
      <td>B.Com. Accounting & Finance</td>
      <td>10+2 (or equivalent)</td>
      <td>Commerce Stream</td>
      <td>45%</td>
     </tbody>
     <tbody>
      <td>B.A. English Literature</td>
      <td>10+2 (or equivalent)</td>
      <td>Any Stream</td>
      <td>40%</td>
     </tbody>
      </table>
     <h2>Application Process</h2>
     <ul type="number">
      <li>Online Application: Fill out the application form available on our portal.</li>
      <li>Document Submission: Upload scanned copies of required documents (mark sheets, ID proof, etc.).</li>
      <li>Entrance Exam (if applicable):Appear for the college's entrance examination.</li>
      <li>Merit List & Interview: Check the merit list and attend the interview if shortlisted.</li>
      <li>Fee Payment: Complete the admission by paying the required fees.</li>
     </ul>
     <p>For detailed information on postgraduate program</p>
    </div>
   </div>
   </div>
   </div>

  )
}
  export default AddmissionPage;