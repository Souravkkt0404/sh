import { useState } from "react";
import Testimonialcards1 from "./Testimonialcards1";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Our Client Reviews</h2>
            </div>
          </div>
        </div>
      </div>
      
      <Testimonialcards1 />
      
    </>
  );
}

export default ControlledCarousel;
