import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import "./App.css";
import { images } from "./data";

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
    <div className="text-center">
      {/* header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0px 200px",
        }}
      >
        <img
          style={{ width: "100px", height: "100px" }}
          src={images.Logo}
          alt="Logo"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ paddingTop: "25px", textAlign: "right" }}>
            <p
              style={{
                color: "gray",
                fontFamily: "sans-serif",
                fontSize: "13px",
                margin: "0px",
              }}
            >
              Handicrafted by
            </p>
            <p style={{ fontSize: "14px", margin: "0px" }}>Jim HLS</p>
          </div>
          <img
            style={{ width: "85px", height: "85px" }}
            src={images.Avatar}
            alt="avatar"
          />
        </div>
      </div>

      {/* Nav */}
      <div
        style={{
          backgroundColor: "#29b363",
          padding: "50px 0",
          color: "white",
        }}
      >
        <p
          style={{
            fontSize: "30px",
            fontWeight: "500",
          }}
        >
          A joke a day keeps the doctor away
        </p>
        <p style={{ fontSize: "12px", fontWeight: "500" }}>
          If you joke wrong way, your teeth have to pay. (Serious)
        </p>
      </div>

      {/* Main */}
      <div>
        <div>
          {/* <p style={{ fontWeight: "700px" }}>{content.title}</p> */}
          <p className="text-base py-12 px-[23rem] text-[#5f5f5f] text-left">
            {content.desc}
          </p>

          <hr className="text-center w-2/5" />

          <div className="flex justify-center gap-5 pt-12 pb-20">
            <button
              onClick={() => handleFunny()}
              className="bg-[#2c7edb] text-white "
              style={{
                border: "none",
                padding: "10px 50px",
                boxShadow: "0 2px #0c5fbc",
              }}
            >
              This is Funny!
            </button>
            <button
              onClick={() => handleNoFunny()}
              className="bg-[#29b363] text-white "
              style={{
                border: "none",
                padding: "10px 50px",
                boxShadow: "0 2px #099042",
              }}
            >
              This is not funny.
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <hr />
      <div className="px-80 py-6 text-sm text-gray-500">
        <p className="m-1">
          This website is created as part of Hlsolutions program. The materials
          contained on this website are provided for general
        </p>
        <p className="m-1">
          information only and do not constitute any form of advice. HLS assumes
          no responsibility for the accuracy of any particularstatement and
        </p>
        <p className="m-1">
          accepts no liability for any loss or damage which may arise from
          reliance on the information contained on this site.
        </p>
        <p className="text-xs font-medium ">Copyright 2021 HLS</p>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
