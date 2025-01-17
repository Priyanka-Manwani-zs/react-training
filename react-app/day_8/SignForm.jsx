import React, { useRef, useState } from "react";
import useWindow from "../day_9/UseWindow";
import useIsMounted from "../day_9/UseIsMounted";

function SignForm() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [NameErr, setNameErr] = useState();
  const [EmailErr, setEmalErr] = useState();
  const [err, setErr] = useState();
  const { height, width } = useWindow();
  const ref = useRef(null);

  const { isMounted } = useIsMounted(ref.current);
  // console.log(isMounted);
  const [showpara, setShowpara] = useState(false);

  console.log("height", height);
  console.log("width", width);

  setTimeout(() => {
    setShowpara(true);
  }, 5000);

  function isAlpha(str) {
    const regex = /^[A-Za-z]+$/;
    return regex.test(str);
  }

  // function isEmpty() {
  //   if (name == undefined || email == undefined) {
  //     setValid(false);
  //   } else {
  //     setValid(true);
  //   }
  // }
  function handlesubmit(e) {
    e.preventDefault();
    if (name.tri) {
      setNameErr("name field is required");
      setErr(NameErr);
    }
    if (email === undefined) {
      setEmalErr("email feild is required");
      setErr(EmailErr);
    }

    console.log("name,", name);
    console.log("email,", email);

    let validName = isAlpha(name);
    console.log(validName);

    if (!validName) {
      setNameErr("invalid name");
    } else {
      setErr("valid name");
    }
  }

  // console.log(typeof name);
  // let n = 1;
  // console.log(typeof n);

  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          id=""
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          id=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handlesubmit}>submit</button>

        <p>Height of the screen: {height}</p>
        <p>width of the screen: {width}</p>
        {/* {isMounted ?? <p></p>} */}
      </form>
      {showpara && <p ref={ref}>helloess</p>}

      {isMounted ? <p>above p tag is mounted</p> : <p>not mounted</p>}
    </div>
  );
}

export default SignForm;
