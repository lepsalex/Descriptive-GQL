import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import "./App.css";

const CaseFilters = () => (
  <Query
    query={gql`
      {
        __type(name: "Cases") {
          name
          description
          fields {
            name
            description
            type {
              name
              fields {
                name
                description
                type {
                  name
                }
              }
            }
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      console.log(data);

      return <p>test</p>;
    }}
  </Query>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <CaseFilters />
      </div>
    );
  }
}

export default App;
