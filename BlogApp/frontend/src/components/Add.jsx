
import { Box, Button, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const location = useLocation();  
  const [inputs, setInputs] = useState({ title: "", content: "", img_url: "" });

  useEffect(() => {
    
    if (location.state !== null) {
      const { title, content, img_url } = location.state.val;
      setInputs({ title, content, img_url });
    }
  }, [location.state]);

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const submit = () => {
    if (location.state !== null) {
      console.log(location.state.val.id)
      axios
        .put(`http://localhost:3001/blog/${location.state.val._id}`, inputs)
        .then((res) => {
          alert("data updated");
          navigate("/"); 
        })
        .catch((err) => console.log(err));
    } else {
    
      axios
        .post("http://localhost:3001/add", inputs)
        .then((res) => {
          alert(res.data.message);
          navigate("/");  
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="90vh">
      <Box component="form" display="flex" flexDirection="column" gap={2} width={600}>
        <TextField
          variant="outlined"
          placeholder="Title"
          name="title"
          value={inputs.title}
          onChange={inputHandler}
          fullWidth
        />
        <TextField
          variant="outlined"
          placeholder="Content"
          name="content"
          value={inputs.content}
          onChange={inputHandler}
          multiline
          rows={4}
          fullWidth
        />
        <TextField
          variant="outlined"
          placeholder="Image URL"
          name="img_url"
          value={inputs.img_url}
          onChange={inputHandler}
          fullWidth
        />
        <Button variant="contained" color="secondary" onClick={submit}>
          {location.state ? "Update" : "Submit"} 
        </Button>
      </Box>
    </Box>
  );
};

export default Add;
