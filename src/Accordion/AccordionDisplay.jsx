import "./accordion.css";
import Accordion from "./Accordion.jsx";
// import Test2 from "./day_11/test2";
// import Counter from "./day_8/count";
// import SignForm from "./day_8/SignForm";
// import DelayCounter from "./usememo /usememo1";
// import Memo from "./usememo /usememo2";
// import Counter from "./components/Counter";

// import Buttons from "./day_8/Buttons";
// import Text from "./components/Text";
// import Test from "./day_10/Test";

function AccordionDisplay() {
  // // return <Buttons />;
  // // return <Counter />;
  // // return <SignForm />;
  // return <Test2 />;
  // // return <DelayCounter />;
  // // return <Memo />;

  // return;
  const arr = [
    {
      title: "HTML",
      content: `The HyperText Markup Language or HTML is the
    standard markup language for documents designed to
    be displayed in a web browser.`,
    },
    {
      title: "CSS",
      content: `Cascading Style Sheets is a style sheet language
    used for describing the presentation of a document
    written in a markup language such as HTML or XML.`,
    },
    {
      title: "JS",
      content: `JavaScript, often abbreviated as JS, is a
    programming language that is one of the core
    technolog`,
    },
  ];

  return (
    <>
      <div className="acc-maindiv">
        {arr.map((ele, key) => (
          <Accordion title={ele.title} content={ele.content} />
        ))}
      </div>
    </>
  );
}

export default AccordionDisplay;
