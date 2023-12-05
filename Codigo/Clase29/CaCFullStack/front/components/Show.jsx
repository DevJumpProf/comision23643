import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//llamar al endpoint (nuestra API en el local host 8000)
const API = "http://localhost:8000/post/";

const Show = () => {
  // estados
  const [posts, setPosts] = useState([]);

  //el procedimiento que trae todos los post
  const getAllPost = async () => {
    const res = await axios.get(API);
    setPosts(res.data);
    /*     console.log(res); */
    /* console.log(setPosts) 
 console.log(posts);  */
  };

  // procedimiento para borrar un posteo

  const deletePost = async (id) => {
    await axios.delete(`${API}${id}`);
    getAllPost();
  };

  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <small>Create Post</small>
        <div className="col">
          <Link to="/create" className="btn btn-primary mt-2 mb-2">
            <i className="fa-regular fa-plus"></i>
          </Link>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>{post.content}</td>
                  <td>
                    <Link to={`edit/${post.id}`} className="btn btn-info">
                      <i className="fa fa-edit"></i>
                    </Link>
                    <button onClick={()=>deletePost(post.id)} className="btn btn-danger">
                        <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Show;
