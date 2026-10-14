function PhotoControls({ onNext, onPrevious, onColor, onBlackAndWhite }) {
  return (
    <div>
      <button onClick={onPrevious}>Previous</button> &nbsp;
      <button onClick={onNext}>Next</button> &nbsp;
      <button onClick={onColor}>Color</button> &nbsp;
      <button onClick={onBlackAndWhite}>Black & White</button>
    </div>
  );
}

export default PhotoControls;
