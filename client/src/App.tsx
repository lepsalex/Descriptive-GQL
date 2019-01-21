import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { IData } from "./types";
import { AppContainer, Parent, Child, Name, Description, Type } from "./styled";

const fmtName = (name: string) => name.replace(/_/g, " ");

const search = (q: string, data: IData) => {
  if (q.length < 3) return data;

  const filter = new RegExp(q, "gi");

  const filteredChildren: IData = {
    __type: {
      ...data.__type,
      fields: data.__type.fields.map(parent => {
        return {
          ...parent,
          type: {
            ...parent.type,
            fields: parent.type.fields.filter(child => {
              child.name.search(filter) !== -1 ||
                child.description.search(filter) !== -1;
            })
          }
        };
      })
    }
  };

  return filteredChildren.__type.fields.filter(
    parent => parent.type.fields.length > 0
  );
};

const CaseFilters: React.ComponentType<ISearchProps> = ({search}) => (
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
          <Name>{fmtName(parent.name)}</Name>
          <Description>{parent.description}</Description>
          {parent.type.fields.map(child => (
            <Child key={child.name}>
              <Name>{fmtName(child.name)}</Name>
              <Description>{child.description}</Description>
              <Type>Type: {child.type.name}</Type>
            </Child>
          ))}
        </Parent>
      ));
    }}
  </Query>
);

interface ISearchProps { search: string };

const makeSearchable = (WrappedComponent: React.ComponentType<ISearchProps>) => {
  return class extends React.Component<{}, ISearchProps> {
    constructor(props: {}) {
      super(props);
      this.state = {
        search: ""
      };

      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event: React.FormEvent<HTMLInputElement>) {
      this.setState({search: event.currentTarget.value});
    }

    render() {
      return (
        <div>
          <div>
            <input type="text" value={this.state.search} onChange={this.handleChange} />
          </div>
          <WrappedComponent search={this.state.search} />
        </div>
      );
    }
  };
};

const SearchableCaseFilters = makeSearchable(CaseFilters);

class App extends Component {
  render() {
    return (
      <AppContainer>
        <SearchableCaseFilters />
      </AppContainer>
    );
  }
}

export default App;
