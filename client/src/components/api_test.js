import React, {Component} from "react";
import axios from "axios";

class ApiTest extends Component {
    async componentDidMount() {

        const user = {
            name: "Jim Corn",
            email: "jCorn@email.com",
            phone: "(212)945-3323"
        };

        const resp = await axios.post('/api/test', user);

        console.log("Post Response", resp);

        const getResp = await axios.get("/api/test");

        console.log("Get Api Results", getResp);
    }
    render () {
        return (
            <div>
                <h1 className="text-center text-danger">Api Test</h1>
            </div>
        );
    }
}

export default ApiTest;
