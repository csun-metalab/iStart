export default {
  displayContent: state => state.isUserAbleToProceed,
  quizInputCount: state => state.quizInput.counter,
  userResponses: state => index=> state.quizInput.responses[index],
  surveyResultLinks: state => state.surveyResultLinks,
  surveyResultsEmailWasSubmitted: state => state.surveyResultsEmailWasSubmitted,
  slideNumber: state => state.slide_index,
  current_slide: state => index => state.importedJSONSlides[index],
  amountOfSlides: state => Object.keys(state.importedJSONSlides).length
}
