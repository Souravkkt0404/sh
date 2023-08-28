import { Link } from 'react-router-dom';

function AlignmentExample() {
  return (
    <>
      <div className="top-bar">
        <div className='Top_bar_display'>
          <div className="text "><h3>All Days: 09:00 AM to 09:00 PM. 24 X 7 Telephonic Support </h3></div>
          {/* <div className="text"><h3>Saturday: 09:00 AM to 09:00 PM</h3></div>
          <div className="text"><h3>Sunday: 09:00 AM to 09:00 PM</h3></div> */}
          <div className="text center ">
            <Link to="tel:7090721111" >
              <h3><i className="fa fa-phone-alt"></i>{" "}7090721111</h3>
            </Link>
          </div>
          <div className="text center">
            <Link to="mailto:info@shoolinconsultancy.in">
              <h3><i className="fa fa-envelope"></i>{" "}info@shoolinconsultancy.in</h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AlignmentExample;