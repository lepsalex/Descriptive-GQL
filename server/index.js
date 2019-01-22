const { ApolloServer, gql } = require("apollo-server");

const descriptions = {
  cases: "Cases are lorem ipsum dolor sit amet",
  demographic: "Demographics can lorem ipsum dolor sit amet",
  age_at_index:
    "The patient's age (in years) on the reference or anchor date date used during date obfuscation.",
  cause_of_death: "Text term to identify the cause of death for a patient",
  created_datetime:
    "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n",
  days_to_birth:
    "Number of days between the date used for index and the date from a person's date of birth represented as a calculated negative number of days.",
  ethnicity:
    "An individual's self-described social and cultural grouping, specifically whether an individual describes themselves as Hispanic or Latino. The provided values are based on the categories defined by the U.S. Office of Management and Business and used by the U.S. Census Bureau.",
  diagnoses: "Diagnoses is very lorem ipsum dolor sit amet",
  age_at_diagnosis:
    "Age at the time of diagnosis expressed in number of days since birth.",
  ajcc_clinical_m:
    "Extent of the distant metastasis for the cancer based on evidence obtained from clinical assessment parameters determined prior to treatment.",
  ajcc_clinical_n:
    "Extent of the regional lymph node involvement for the cancer based on evidence obtained from clinical assessment parameters determined prior to treatment.",
  ajcc_clinical_stage:
    "Stage group determined from clinical information on the tumor (T), regional node (N) and metastases (M) and by grouping cases with similar prognosis for cancer.",
  ajcc_clinical_t:
    "Extent of the primary cancer based on evidence obtained from clinical assessment parameters determined prior to treatment."
};

// The GraphQL schema
const typeDefs = gql`
  
  """${descriptions.cases}"""
  type Cases {
    """${descriptions.demographic}"""
    demographic: Demographic
    """${descriptions.diagnoses}"""
    diagnoses: Diagnoses
  }

  """${descriptions.demographic}"""
  type Demographic {
    """${descriptions.age_at_index}"""
    age_at_index: Int
    """${descriptions.cause_of_death}"""
    cause_of_death: String
    """${descriptions.created_datetime}"""
    created_datetime: String
    """${descriptions.days_to_birth}"""
    days_to_birth: Int
    """${descriptions.ethnicity}"""
    ethnicity: String
  }

  """${descriptions.diagnoses}"""
  type Diagnoses {
     """${descriptions.age_at_diagnosis}"""
    age_at_diagnosis: Int
     """${descriptions.ajcc_clinical_m}"""
    ajcc_clinical_m: String
     """${descriptions.ajcc_clinical_n}"""
    ajcc_clinical_n: String
     """${descriptions.ajcc_clinical_stage}"""
    ajcc_clinical_stage: String
     """${descriptions.ajcc_clinical_t}"""
    ajcc_clinical_t: String
  }

  type Query {
    """${descriptions.cases}"""
    cases: [Cases]
  }
`;

/**
 *  A introspective query will look like this:
 * 
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
 */

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    cases: () => "Data Data Data"
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen({ port: process.env.PORT || 8080 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
