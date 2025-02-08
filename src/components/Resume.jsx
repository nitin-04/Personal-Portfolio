import { FaDownload } from "react-icons/fa6";


const Resume = () => {

    return (
        <button className='button'>
            <a href="https://drive.google.com/file/d/1yjtXs0jze7pObiWrvZtcOPQ85Fvd-VHN/view" target='_blank' download="Nitin's Resume" >
                <h3 className="cv">Download CV</h3>
                <span className="button__icon">
                    <FaDownload />
                </span>
            </a>

        </button>
    );
};

export default Resume;