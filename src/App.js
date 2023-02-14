import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  const [state, setstate] = useState([]);
  let [content, setContent] = useState({
    title: "",
    desc: "",
    funny: "",
  });
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:6969/api/getAllStory`).then((res) => {
      setstate(res.data.data);
      setContent({
        title: res.data.data[count].name,
        desc: res.data.data[count].Des,
      });
    });
  }, []);
  const handleFunny = () => {
    const arrLength = state.length;
    if (count === arrLength - 1) {
      toast.success("That's all the jokes for today! Come back another day!");
    } else {
      setContent({
        title: state[count + 1].name,
        desc: state[count + 1].Des,
        funny: 0,
      });
      setCount(count + 1);
    }
  };
  const handleNoFunny = () => {
    const arrLength = state.length;
    if (count === arrLength - 1) {
      toast.success("That's all the jokes for today! Come back another day!");
    } else {
      setContent({
        title: state[count + 1].name,
        desc: state[count + 1].Des,
        funny: 1,
      });
      setCount(count + 1);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      {/* header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0px 200px",
        }}
      >
        <p style={{ fontSize: "35px", fontWeight: "700" }}>LOGO</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div>
            <p>Handicrafted by</p>
            <p>Jim HLS</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <div
        style={{ backgroundColor: "green", padding: "50px 0", color: "white" }}
      >
        <p style={{ fontSize: "30px", fontWeight: "700" }}>
          A joke a day keeps the doctor away
        </p>
        <p style={{ fontSize: "14px" }}>
          If you joke wrong way, your teeth have to pay. (Serious)
        </p>
      </div>

      {/* Main */}
      <div>
        <div>
          <div
            style={{
              padding: "50px 300px",
              color: "red",
            }}
          >
            <p style={{ fontWeight: "700px" }}>{content.title}</p>
            <p>{content.desc}</p>
          </div>
          <hr style={{ width: "40%" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              padding: "50px 0",
            }}
          >
            <button
              onClick={() => handleFunny()}
              style={{
                backgroundColor: "blue",
                color: "white",
                border: "none",
                padding: "15px 50px",
              }}
            >
              This is Funny!
            </button>
            <button
              onClick={() => handleNoFunny()}
              style={{
                backgroundColor: "green",
                color: "white",
                border: "none",
                padding: "15px 50px",
              }}
            >
              This is not funny.
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <hr />
      <div style={{ padding: "50px 300px", color: "gray", fontSize: "14px" }}>
        <p>
          This website is created as part of Hlsolutions program. The materials
          contained on this website are provided for general information only
          and do not constitute any form of advice. HLS assumes no
          responsibility for the accuracy of any particular statement and
          accepts no liability for any loss or damage which may arise from
          reliance on the information contained on this site.
        </p>
        <p>Copyright 2021 HLS</p>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
