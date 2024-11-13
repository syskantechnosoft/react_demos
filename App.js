// App.js
import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((res) => res.json())
    //     .then((json) => {
    //       console.log("data is loading");
    //         this.setState({
    //             items: json,
    //             DataisLoaded: true,
    //         })
    //         console.log(json[0]);
    //     });
    axios({
      // Endpoint to send files
      url: "https://jsonplaceholder.typicode.com/users",
      method: "GET",
      // headers: {
      //   // Add any auth token here
      //   authorization: "your token comes here",
      // },

      // Attaching the form data
      // data: formData,
    })
      // Handle the response from backend here
      .then((res) => {
        console.log("response is:",res.data);
        this.setState({
                    items: res.data,
                    DataisLoaded: true,
                }) })

      // Catch errors if any
      .catch((err) => {console.log("Error in loading data") });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>
        </div>
      );

    return (
      <div className="App">
        <h1 className="geeks">GeeksforGeeks</h1>
        <h3>Fetch data from an api in react</h3>
        <div className="container">
          {items.map((item) => (
            <div className="item">
              <ol key={item.id}>
                <div>
                  <strong>
                    {"User_Name: "}
                  </strong>
                  {item.username},
                </div>
                <div>
                  Full_Name: {item.name},
                </div>
                <div>
                  User_Email: {item.email}
                </div>
                <div>
                  User_Phone: {item.phone}
                </div>
              </ol>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
