import React from "react";
import Button from "../Button/Button";
import DoubleButton from "../Button/DoubleButton";


const CardWithImage = ({
  cardImage,
  cardTitle,
  cardText,
  cardTextClassName,
  cardParaTestId,
  cardButtonTestId,
  buttonName,
  role,
  firstButton_Name,
  secondButton_Name,
  icon,
  firstCardColor,
  secondCardColor,
  pageRenderPath,
  width,
  height,
  imageClassName,
  cardTitleStyle,
  modalContent
}) => {
  return (
    <div className="card h-100 shadow mb-5 bg-body rounded-4 border-0">

      <img src={cardImage} className={imageClassName} alt="Card Image" data-testid='imgTesting' width={width} height={height} />
      <div className="card-body">
        <h5 className={`card-title ${cardTitleStyle}`} data-testid='cardHeadingTestId'>{cardTitle}</h5>
        <p className={`card-text ${cardTextClassName}`} data-testid={cardParaTestId}>{cardText}{cardTitle === 'Learning' || cardTitle ===  'Community' ? <span className="btn btn-link p-0" data-bs-toggle="modal" data-bs-target="#learnMore">Read More</span> : null}</p>
      </div>


      <div className="modal fade col-md-4" id="learnMore" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Read More</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body h-100 mb-4 mx-2">
              {modalContent}
            </div>
          </div>
        </div>
      </div>


      <div className="card-footer border-0">
        {role === 'learningAndCommunity' ?
          <DoubleButton firstButtonName={firstButton_Name} secondButtonName={secondButton_Name} cardIcon={icon} firstCardColorclassName={firstCardColor} secondCardColorclassName={secondCardColor} />
          : <Button
            className="rounded w-100 mb-2 sign-up-buttons"
            title={buttonName}
            buttonType="button"
            functionOnchange={pageRenderPath}
            testId={cardButtonTestId}
          />}
      </div>
    </div>
  );
};

export default CardWithImage;