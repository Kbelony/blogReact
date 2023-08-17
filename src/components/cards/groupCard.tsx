import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Sidebar from "./sidebar";
// import FilterDropdown from "../filterPost";
import Breadcrumbs from "../breadcrumbs";
import { Link } from "react-router-dom";

function GroupCard() {
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

  const postCollectionRef = collection(db, "posts");
  const [selectedTease, setSelectedTease] = useState("");

  // const [teaseLists, setTeaseList] = useState<{ id: string }[]>([]);
  // const teaseCollectionRef = collection(db, "tease");

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

  // const getTease = async () => {
  //   const data = await getDocs(teaseCollectionRef);
  //   setTeaseList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  // };

  useEffect(() => {
    getPosts();
    // getTease();
  }, []);

  // const handleTeaseClick = (title: string) => {
  //   setSelectedTease(title);
  // };

  const filteredPosts = postLists.filter(
    (post) => selectedTease === "" || post.tease === selectedTease
  );

  return (
    <div className="row">
      <div className="col-sm-12 col-md-12 col-lg-9">
        <Breadcrumbs />
        {/* <FilterDropdown
          teaseLists={teaseLists}
          handleTeaseClick={handleTeaseClick}
        /> */}
        <div className="row row-cols-1 row-cols-md-1 g-4">
          {filteredPosts.map((post) => (
            <div className="col" key={post.id}>
              <Link to={`/read/${post.id}`}>
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-3">
                      <img
                        src={post.thumbnail}
                        className="img-fluid img-card-group"
                        alt="Post img thumbnail"
                      ></img>
                    </div>
                    <div className="col-md-9">
                      <div className="card-body">
                        <p className="tease-category">{post.tease}</p>
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.description}</p>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            Last updated {post.date}
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="col-sm-0 col-md-0 col-lg-3">
        <Sidebar setSelectedTease={setSelectedTease} />
      </div>
    </div>
  );
}

export default GroupCard;
