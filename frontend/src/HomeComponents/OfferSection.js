import AdaptiveLearningContainer from "./AdaptiveLearningContainer";
import "./OfferSection.css";

const OfferSection = () => {
  return (
    <div className="polygon-parent">
      <img className="frame-child" alt="" src="/polygon-4.svg" />
      <div className="frame">
        <div className="what-we-offer-wrapper">
          <div className="what-we-offer">What we Offer</div>
        </div>
      </div>
      <img className="frame-icon" alt="" src="/frame.svg" />
      <div className="frame1">
        <AdaptiveLearningContainer
          learningModuleTitle={<a className="link"href="/learn">Adaptive Learning</a>}
          learningModuleDescription="Structured form of learning through captivating stories"
          showFrameDiv
        />
        <AdaptiveLearningContainer
          learningModuleTitle={<a className="link" href="/play/storymode">Gamified Skill test</a>}
          learningModuleDescription="Thought-provoking activities that promotes concept clarity "
          showFrameDiv={false}
          propLeft="462px"
          propBackgroundColor="#a69782"
          propLeft1="83px"
          propWidth="182px"
        />
        <div className="frame-group">
          <div className="various-training-courses-for-c-container">
            <img
              className="various-training-courses-for-c1"
              alt=""
              src="/various-training-courses-for-children@2x.png"
            />
          </div>
          <div className="quiz"><a className="link" href="/play/quiz">Quiz</a></div>
          <div className="to-enhance-the-container">
            <p className="to-enhance-the">{`To enhance the logical concepts `}</p>
            <p className="to-enhance-the">{`for good to go `}</p>
          </div>
        </div>
        <img
          className="game-design-and-game-developme"
          alt=""
          src="/game-design-and-game-development@2x.png"
        />
        <img
          className="boy-is-tired-of-doing-homework"
          alt=""
          src="/boy-is-tired-of-doing-homework@2x.png"
        />
      </div>
    </div>
  );
};

export default OfferSection;
