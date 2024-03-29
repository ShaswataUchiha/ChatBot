import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { Context } from "../../context/ContextAPI";
import { CiLocationArrow1 } from "react-icons/ci";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Kevin</p>
        <img src={assets.sukuna}></img>
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, I am Kevin</span>
              </p>
              <p className="t2">How can i help you today,</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} />
              </div>
              <div className="card">
                <p>Briefly summarize this concept : urabn planning</p>
                <img src={assets.bulb_icon} />
              </div>
              <div className="card">
                <p>Brainsrom team bonding activites for our work retreat</p>
                <img src={assets.message_icon} />
              </div>
              <div className="card">
                <p>Improve the readabilty of he follwing code</p>
                <img src={assets.code_icon} />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
                <img src={assets.sukuna}/>
                <p >{recentPrompt} ...</p>
            </div> 
            <div className="result-data">
                <img src={assets.gemini_icon}/>
                {loading ? 
                    <div className="loader">
                        <hr/>
                        <hr/>
                        <hr/>
                    </div>
                 :
                    <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                }
            </div> 
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            
            <input onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter your prompt"
            />
            <div>
              <CiLocationArrow1 onClick={() => onSent()} className="sent-icon"/>
            </div>
          </div>
          <p className="bottom-info"></p>
        </div>
      </div>
    </div>
  );
};

export default Main;
