"use client";
import TextField from "@mui/material/TextField";

export default function contact() {
    return (
        <>
            <h1 className="cnt">Contact Here ...</h1>

            <form className="contact" >
                <div className="cnt1">
                    <TextField
                        name="name"
                        label="Name"
                        placeholder="Enter Your Name"
                    />

                    <TextField
                        name="email"
                        label="Email"
                        className="em"
                        placeholder="Enter Your Email"

                    />

                    <TextField
                        name="subject"
                        label="Subject"
                        placeholder="Enter Your Subject"

                    />
                </div>

                <div className="cnt2">
                    <textarea
                        className="msg-box"
                        name="message"
                        placeholder="Type Your Message..."

                    ></textarea>

                    <button id="cnt-btn" type="submit">
                        Send Message <i className="fa-solid fa-arrow-down fa-rotate-270"></i>
                    </button>
                </div>
            </form>
        </>
    );
}