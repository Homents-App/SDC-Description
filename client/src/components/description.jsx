import React from 'react';

var Description= ({description_text}) => {


  return (
    <div className="description">
      <div className="description-txt">Description</div>
      <div className="txt-box">{description_text}</div>
     </div>
  )
}

export default Description;