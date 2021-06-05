import React from "react";
import { Link } from "react-router-dom";

class Hobby extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hobby: { description: "" } };

    this.addHtmlEntities = this.addHtmlEntities.bind(this);
    this.deleteHobby = this.deleteHobby.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    const url = `/api/v1/show/${id}`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ hobby: response }))
      .catch(() => this.props.history.push("/hobbies"));
  }

  addHtmlEntities(str) {
    return String(str)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }

  deleteHobby() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const url = `/api/v1/destroy/${id}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(url, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(() => this.props.history.push("/hobbies"))
      .catch(error => console.log(error.message));
  }


  render() {
    const { hobby } = this.state;
    let descriptionList = "No descriptions available";

    if (hobby.description.length > 0) {
      descriptionList = hobby.description
        .split(",")
        .map((description, index) => (
          <li key={index} className="list-group-item">
            {description}
          </li>
        ));
    }
    const hobbyInstruction = this.addHtmlEntities(hobby.instruction);

    return (
      <div className="">
        <div className="hero position-relative d-flex align-items-center justify-content-center">
          <img
            src={hobby.image}
            alt={`${hobby.name} image`}
            className="img-fluid position-absolute"
          />
          <div className="overlay bg-dark position-absolute" />
          <h1 className="display-4 position-relative text-white">
            {hobby.name}
          </h1>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <ul className="list-group">
                <h5 className="mb-2">Description</h5>
                {descriptionList}
              </ul>
            </div>
            <div className="col-sm-12 col-lg-7">
              <h5 className="mb-2">Activity Instructions</h5>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${hobbyInstruction}`
                }}
              />
            </div>
            <div className="col-sm-12 col-lg-2">
              <button type="button" className="btn btn-danger" onClick={this.deleteHobby}>
                Delete Hobby
              </button>
            </div>
          </div>
          <Link to="/hobbies" className="btn btn-link">
            Back to hobbies
          </Link>
        </div>
      </div>
    );
  }


}

export default Hobby;
