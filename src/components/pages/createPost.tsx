import React, { useEffect, useRef, useState } from "react";
import { app, analytics, db } from "../../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const createPost = () => {
  const navigate = useNavigate();
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  const dateRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<HTMLInputElement>(null);
  const postTextRef = useRef<HTMLInputElement>(null);
  const teaseRef = useRef<HTMLSelectElement>(null);
  const thumbnailRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);
  const [teaseLists, setTeaseList] = useState([]);

  const teaseCollectionRef = collection(db, "tease");

  const getTease = async () => {
    const data = await getDocs(teaseCollectionRef);
    setTeaseList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getTease();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    const data = {
      date: formattedDate,
      description: descriptionRef.current?.value,
      id: idRef.current?.value,
      postText: postTextRef.current?.value,
      tease: teaseRef.current?.value, // Utilisez la valeur sélectionnée du select
      thumbnail: thumbnailRef.current?.value,
      title: titleRef.current?.value,
    };
    try {
      await addDoc(collection(db, "posts"), data);
    } catch (e) {
      console.log(data);
    }
    navigate("/");
  };

  return (
    <div className="container">
      <form onSubmit={handleSave}>
        <div className="mb-3">
          <label htmlFor="dateInput" className="form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="dateInput"
            aria-describedby="datehelp"
            ref={dateRef}
            defaultValue={formattedDate}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descriptionInput" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="descriptionInput"
            aria-describedby="descriptionhelp"
            ref={descriptionRef}
            defaultValue=""
          />
        </div>
        <div className="mb-3">
          <label htmlFor="idInput" className="form-label">
            Id
          </label>
          <input
            type="number"
            className="form-control"
            id="idInput"
            aria-describedby="idhelp"
            ref={idRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="SummaryInput" className="form-label">
            Resumer
          </label>
          <input
            type="text"
            className="form-control"
            id="summaryInput"
            aria-describedby="summaryhelp"
            ref={summaryRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postTextInput" className="form-label">
            Texte de l'article
          </label>
          <input
            type="text"
            className="form-control"
            id="postTextInput"
            aria-describedby="postTexthelp"
            ref={postTextRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="teaseInput" className="form-label">
            Catégorie
          </label>
          <select
            className="form-control"
            id="teaseInput"
            aria-describedby="teasehelp"
            ref={teaseRef}
          >
            {teaseLists.map((tease) => (
              <option key={tease.id} value={tease.title}>
                {tease.title}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="thumbnailInput" className="form-label">
            URL de l'image
          </label>
          <input
            type="text"
            className="form-control"
            id="thumbnailInput"
            aria-describedby="thumbnailhelp"
            ref={thumbnailRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="titleInput" className="form-label">
            Titre
          </label>
          <input
            type="text"
            className="form-control"
            id="titleInput"
            aria-describedby="titlehelp"
            ref={titleRef}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default createPost;
