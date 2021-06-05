import React from "react";
import { Link } from "react-router-dom";

class Hobbies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hobbies: []
    };
  }

  componentDidMount() {
      const url = "/api/v1/hobbies/index";
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({ hobbies: response }))
        .catch(() => this.props.history.push("/"));
  }

  render() {
    const { hobbies } = this.state;
    const allHobbies = hobbies.map((hobby, index) => (
      <div key={index} className="col-md-6 col-lg-4">
        <div className="card mb-4">
          <img
            src={hobby.image}
            className="card-img-top"
            alt={`${hobby.name} image`}
          />
          <div className="card-body">
            <h5 className="card-title">{hobby.name}</h5>
            <Link to={`/hobby/${hobby.id}`} className="btn custom-button">
              View Hobby
            </Link>
          </div>
        </div>
      </div>
    ));
    const noHobby = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No hobbies yet. Why not <Link to="/new_hobby">create one</Link>
        </h4>
      </div>
    );

    return (
      <>
        <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="display-4">Hobbies for every occasion</h1>
            <p className="lead text-muted">
              We’ve pulled together our most popular hobbies, our latest
              additions, and our editor’s picks, so there’s sure to be something
              tempting for you to try.
            </p>
          </div>
        </section>
        <div className="py-5">
          <main className="container">
            <div className="text-right mb-3">
              <Link to="/hobby" className="btn custom-button">
                Create New Hobby
              </Link>
            </div>
            <div className="row">
              {hobbies.length > 0 ? allHobbies : noHobby}
            </div>
            <Link to="/" className="btn btn-link">
              Home
            </Link>
          </main>
        </div>
      </>
    );
  }


}
export default Hobbies;
