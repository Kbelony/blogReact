import React, { useEffect, useRef, useState } from "react";
import { app, analytics, db } from "../../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function deletePost() {
  const [postLists, setPostList] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(-1); // Index de la carte survolée

  const postCollectionRef = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(postCollectionRef);
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getPosts();
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  const handleDelete = async (postId) => {
    try {
      await deleteDoc(doc(db, "posts", postId));
      console.log("Document deleted successfully");
      // Mettez à jour la liste des cartes après la suppression
      getPosts();
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <div className="container delete-post">
      <div className="row mt-4">
        {postLists.map((post, index) => (
          <div
            className="col-md-4"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card">
              <img
                src={post.thumbnail}
                className="card-img-top"
                alt="Post img thumbnail"
                style={{
                  opacity: hoveredIndex === index ? 0.7 : 1, // Opacité réduite lors du survol
                }}
              />
              {hoveredIndex === index && (
                <div className="card-overlay">
                  <div
                    className="delete-icon"
                    onClick={() => handleDelete(post.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default deletePost;
