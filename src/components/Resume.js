import resume from '../images/resume.pdf'

const Resume = () => {
  return(
    <div className="resume">
      <h1>Resume</h1>
      <em>Click image to download...</em>
      <hr className="line"/>
      <a href={resume} download>
        <img alt="Resume" src="https://i.imgur.com/oqJk1Zg.jpg"/>
      </a>
    </div>
  )
}

export default Resume
