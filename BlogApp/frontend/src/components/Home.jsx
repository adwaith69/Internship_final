
import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, CardMedia, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get") 
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  }, []);

 
  const deleteBlog = (id) => {
    axios
      .delete(`http://localhost:3001/blog/${id}`) 
      .then((res) => {
        alert(res.data.message);
        setBlogs(blogs.filter((blog) => blog._id !== id));  
      })
      .catch((err) => console.log(err));
  };

  const editBlog = (blog) => {
    navigate("/add", { state: { val: blog } });  
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", padding: "20px" }}>
      {blogs.map((blog) => (
        <Card key={blog._id} sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="140" image={blog.img_url} alt={blog.title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {blog.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {blog.content}
            </Typography>
            <Button variant="contained" color="secondary" onClick={() => deleteBlog(blog._id)}>
              DELETE
            </Button>
            <Button variant="contained" color="primary" onClick={() => editBlog(blog)}>
              UPDATE
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Home;
