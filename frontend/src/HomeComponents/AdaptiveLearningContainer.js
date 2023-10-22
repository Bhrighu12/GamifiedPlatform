import { useMemo } from "react";
import "./AdaptiveLearningContainer.css";

const AdaptiveLearningContainer = ({
  learningModuleTitle,
  learningModuleDescription,
  showFrameDiv,
  propLeft,
  propBackgroundColor,
  propLeft1,
  propWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const frameDiv1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const structuredFormOfStyle = useMemo(() => {
    return {
      left: propLeft1,
      width: propWidth,
    };
  }, [propLeft1, propWidth]);

  return (
    <div className="frame-parent" style={frameDivStyle}>
      {showFrameDiv && (
        <div
          className="various-training-courses-for-c-wrapper"
          style={frameDiv1Style}
        >
          <img
            className="various-training-courses-for-c"
            alt=""
            src="/various-training-courses-for-children@2x.png"
          />
        </div>
      )}
      <div className="adaptive-learning">{learningModuleTitle}</div>
      <div className="structured-form-of" style={structuredFormOfStyle}>
        {learningModuleDescription}
      </div>
    </div>
  );
};

export default AdaptiveLearningContainer;
