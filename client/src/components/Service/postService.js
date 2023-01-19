import axios from "axios";


class Post{

    update(formData){
        const url = "http://localhost:3001/update-post";
        const config = {
            headers:{
                'content-type':'multipart/form-data',
            }
        };
        return axios.post(url, formData, config)
    }
}

export default new Post();