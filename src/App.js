import "./App.css";

import DiscountBar from "./components/DiscountBar/DiscountBar";
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";
import YogaProgram from "./components/YogaProgram/YogaProgram";
import SuccessStories from "./components/SuccessStories/SuccessStories";
import YogaAdvertisiment from "./components/YogaAdvertisement/YogaAdvertisement";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";

function App() {
  return (
    <div className="app-container">
      <DiscountBar discountTimeInMiliseconds={1800000} />
      <HeaderContainer />
      <YogaProgram
        orderedPlans={"52 147"}
        hasMainHeadline={true}
        headlineText={"Get access to your yoga program now!"}
      />
      <SuccessStories />
      <YogaAdvertisiment />
      <FrequentlyAskedQuestions />
      <YogaProgram
        hasMainHeadline={false}
        headlineText={"Start your yoga program today!"}
      />
    </div>
  );
}

export default App;
