import React, { useRef } from "react";
import { app, analytics, db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const footer = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const handleSave = async (e) => {
    e.preventDefault();
    console.log(emailRef);
    const data = {
      email: emailRef.current?.value,
    };
    try {
      await addDoc(collection(db, "email"), data);
    } catch (e) {
      console.log(emailRef);
    }
  };
  return (
    <footer className="bg-light text-center text-lg-start mt-3">
      <div className="inspo text-center p-4">
        <h6>
          Ce site est grandement inspirée de&nbsp;
          <a href="https://lecrabeinfo.net/" target="_blank">
            https://lecrabeinfo.net/
          </a>
        </h6>
      </div>
      <div className="text-center p-3">
        <form onSubmit={handleSave}>
          <label>Entrer votre e-mail</label>
          <input type="email" ref={emailRef} />
          <button type="submit">Save</button>
        </form>
      </div>
    </footer>
  );
};
export default footer;
