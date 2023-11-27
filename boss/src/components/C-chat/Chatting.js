import React from "react";
import "./chatting.css";
import { useState } from "react";

function Chatting() {
    // Define a state variable to store the input field contents
    const [inputValue, setInputValue] = useState("");
    // Define a state variable to store the list of entered contents
    const [enteredContents, setEnteredContents] = useState([]);

    // Function to handle input field changes
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    // Function to handle the button click event
    const handleButtonClick = () => {
        // Add the current input field value to the list of entered contents
        setEnteredContents([...enteredContents, inputValue]);
        // Clear the input field
        setInputValue("");
    };
    return (
        <div className="main-chatting">
            {/* starting */}
            <div className="component">
                {/* chat field */}
                <div className="c-field">
                    {/* profile box = main area */}
                    <div className="profile-box">
                        {/* this code for admin image */}
                        <img
                            className="image-c"
                            src="https://img.icons8.com/?size=1x&id=Ku3cLD42vk_a&format=png"
                            alt=""
                            srcset=""
                        />
                        {/* this code for admin name  */}
                        <h2>Customer Help Service</h2>
                    </div>
                    {/* chat box 1 */}
                    <div className="chatmainfield">
                        {/* chat align only for alignment */}
                        <div className="chatalign">
                            {/* image receiver pov */}
                            <img
                                className="imagechat1"
                                src="https://img.icons8.com/?size=1x&id=Ku3cLD42vk_a&format=png"
                                alt=""
                            />
                            {/* receiver pov : chatbox */}
                            <div className="chatbox1">
                                {/* content */}
                                <p>chat field</p>
                            </div>
                        </div>
                        {/* chat box 1 end */}

                        {/* chat box 2 */}
                        {/* chat align only for alignment */}
                        <div className="chatalign">
                            {/* image sender pov */}

                            <img
                                className="imagechat2"
                                src="https://img.icons8.com/?size=1x&id=Ku3cLD42vk_a&format=png"
                                alt=""
                            />

                            {/* javascript code for value printing */}

                            {enteredContents.map((content, index) => (
                                <div className="chatbox2" key={index}>
                                    <p>{content}</p>
                                </div>
                            ))}
                            {/* javascript code end */}
                        </div>
                    </div>

                    {/* typing place codes */}

                    {/* typing field is a main place for type-area */}
                    <div className="type-field">
                        {/* type-area is a main place for input , payment , send options */}
                        <div className="type-area">
                            {/* payment button */}
                            <div className="payment">
                                <img src="src/app images/icons8-payment-50.png" alt="" srcset="" />
                            </div>
                            {/* input field */}

                            {/* javascript code for getting value from input */}
                            <input
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                placeholder="Type Something Here"
                            />
                            {/* send button */}
                            {/* javascript code for sendding input contents in chatbox */}
                            <button onClick={handleButtonClick}>
                                <img src="src/app images/icons8-send-50.png" alt="icon"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chatting;
