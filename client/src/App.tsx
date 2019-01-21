import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { IData } from "./types";
import { AppContainer, Parent, Child, Name, Description, Type } from "./styled";

const CaseFilters = () => (
  <Query<IData>
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
      if (!data) return <p>Error - No Data! :(</p>;
      return (data as IData).__type.fields.map(parent => (
        <Parent key={parent.name}>
          <Name>{parent.name}</Name>
          <Description>{parent.description}</Description>
          {parent.type.fields.map(child => (
            <Child key={child.name}>
              <Name>{child.name}</Name>
              <Description>{child.description}</Description>
              <Type>Type: {child.type.name}</Type>
            </Child>
          ))}
        </Parent>
      ));
    }}
  </Query>
);

class App extends Component {
  render() {
    return (
      <AppContainer>
        <CaseFilters />
      </AppContainer>
    );
  }
}

export default App;
