import { SetStateAction, useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DeletePost() {
  const [postLists, setPostList] = useState<
    {
      id: string;
      thumbnail: string;
      description: string;
      tease: string;
      title: string; // Nouvelle propriété
      date: string; // Nouvelle propriété
    }[]
  >([]);
  const [hoveredIndex, setHoveredIndex] = useState(-1); // Index de la carte survolée
  const postCollectionRef = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(postCollectionRef);
    setPostList(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        thumbnail: doc.data().thumbnail,
        description: doc.data().description,
        tease: doc.data().tease,
        title: doc.data().title,
        date: doc.data().date,
      }))
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  const handleMouseEnter = (index: SetStateAction<number>) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  const handleDelete = async (postId: string) => {
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
                    onClick={() => post && handleDelete(post.id)}
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

export default DeletePost;
