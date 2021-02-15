import resume from '../images/resumeImg.jpg'
import resumePdf from '../images/resumePdf.pdf'

const Resume = () => {
  return(
    <div className="resume">
      <h1>Resume</h1>
      <em>Click image to download...</em>
      <hr className="line"/>
      <a href={resumePdf} download>
        <img src={resume}/>
      </a>
    </div>
  )
}

export default Resume
