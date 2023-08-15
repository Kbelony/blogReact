import React, { useEffect, useRef, useState } from "react";
import { app, analytics, db } from "../../firebase";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUpLong } from "@fortawesome/free-solid-svg-icons";

function ReadPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const postDoc = await getDoc(doc(db, "posts", id));
      setPost(postDoc.data());
    };

    fetchPost();
  }, [id]);

  return post ? (
    <div className="row">
      <div className="col-sm-12 col-md-12 col-lg-9">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active">{post.tease}</li>
              <li className="breadcrumb-item active" aria-current="page">
                &nbsp;{post.title}
              </li>
            </ol>
          </nav>
          <h1 className="title-post">{post.title}</h1>
          <div className="meta">
            <div className="row">
              <div className="col-1">
                <img
                  src="https://picsum.photos/200"
                  alt="Logo writer"
                  srcset=""
                  className="rounded-circle"
                />
                <p>John.D</p>
              </div>
              <div className="col-11">
                <p>Le {post.date}</p>
                <p>Mis à jour le {post.date}</p>
                <p>{Math.floor(Math.random() * 401) + 50} vues</p>
              </div>
            </div>
          </div>
          <div className="thumbnail-post">
            <img
              src={post.thumbnail}
              alt="Post img thumbnail"
              srcset=""
              className="mx-auto d-block "
            />
          </div>

          <div className="row">
            <div className="singular-entry-body">
              <p>{post.description}</p>
              <br />
              <div className="navigation-bar ">
                <div className="summary-bar-item-body mx-auto d-block">
                  <h5>Sommaire</h5>
                  <div className="summary-bar-item-link">
                    <div
                      dangerouslySetInnerHTML={{ __html: post.summary }}
                    ></div>
                  </div>
                </div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: post.postText }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-0 col-md-0 col-lg-3">
        <div className="navigation-bar sticky-top mx-auto d-block">
          <div className="navigation-bar-item-body">
            <h5>Navigation</h5>
            <div className="navigation-bar-item-link">
              <div dangerouslySetInnerHTML={{ __html: post.summary }}></div>
            </div>
            <div className="navigation-bar-item-meta">
              <p>
                <FontAwesomeIcon icon={faHeart} />
                {Math.floor(Math.random() * 25) + 0} like
              </p>
              <a href="#top">
                <FontAwesomeIcon icon={faUpLong} />
                Retourner en haut
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default ReadPost;
