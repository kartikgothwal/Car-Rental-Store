export default function FaqsAccordian(props) {
    const MainSection = styled.section`
      // existing styles
    `;
  
    const [data, setData] = useState(question);
    const [activeQuestionId, setActiveQuestionId] = useState(null);
  
    const handleQuestionToggle = (questionId) => {
      setActiveQuestionId((prevId) => (prevId === questionId ? null : questionId));
    };
  
    return (
      // existing JSX code
      <div className="faq-content-div-box-content">
        {data.map((CurrElement) => {
          return (
            <MyfaqsAccordian
              key={CurrElement.id}
              isActive={activeQuestionId === CurrElement.id}
              onToggle={() => handleQuestionToggle(CurrElement.id)}
              {...CurrElement}
            />
          );
        })}
      </div>
      // remaining JSX code
    );
  }
  


  export default function MyfaqsAccordian(props) {
    const [show, setShow] = useState(false);
    const [BgColor, SetBgColor] = useState({
      backgroundColor: "white",
      color: "black",
    });
  
    useEffect(() => {
      if (props.isActive) {
        setShow(true);
        SetBgColor({
          backgroundColor: "var(--btn-background-color)",
          color: "white",
          transition: "0.5s ease",
        });
      } else {
        setShow(false);
        SetBgColor({
          backgroundColor: "white",
          color: "black",
          transition: " 0.5s ease",
        });
      }
    }, [props.isActive]);
  
    return (
      <>
        <div
          className="faq-content-div-box-hero"
          onClick={props.onToggle}
        >
          // remaining JSX code
        </div>
      </>
    );
  }
  


//   Certainly! Here's an explanation of the code in simpler terms:

// In the FaqsAccordian component:

// We create a state variable called activeQuestionId to keep track of the ID of the currently open question.
// When rendering the list of FAQ items, we pass two props to each MyfaqsAccordian component: isActive and onToggle.
// isActive is a boolean value indicating whether the current FAQ item is open or not, based on the activeQuestionId.
// onToggle is a function that will be called when a question is clicked. It handles toggling the open/close state of the question.
// In the MyfaqsAccordian component:

// We receive the isActive and onToggle props.
// The show state variable represents whether the current question is open or not. It is initially set to false.
// The BgColor state variable holds the background color and text color styles for the question. It is initially set to white background and black text.
// We use the useEffect hook to update the show state and the background color based on the isActive prop. If the question is active, we set show to true and update the background color to the desired values.
// When the question is clicked, the onToggle function is called. It updates the activeQuestionId in the parent component, which triggers a re-render and updates the isActive prop for all the FAQ items.
// In the JSX code, the onClick event is set to props.onToggle, so when the question is clicked, the onToggle function is executed.
// As a result, the show state and background color are updated accordingly, and the question's content (<p className="answers">) is displayed or hidden based on the show state.
// With these changes, only one question can be open at a time, and clicking on a new question will close the previously open question.