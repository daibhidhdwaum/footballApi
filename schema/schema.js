const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
} = require("graphql");
const _ = require("lodash");

const team = [
  {
    id: 1,
    name: "Liverpool Football Club",
    founded: 1892,
    country: "England",
    city: "Liverpool",
    league: "Premier League",
  },
  {
    id: 2,
    name: "Arsenal Football Club",
    founded: 1888,
    country: "England",
    city: "London",
    league: "Premier League",
  },
];

const TeamType = new GraphQLObjectType({
  name: "Team",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    founded: { type: GraphQLInt },
    country: { type: GraphQLString },
    city: { type: GraphQLString },
    league: { type: GraphQLString },
  },
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: TeamType,
      args: {
        id: { type: GraphQLString },
        resolve(parentValue, args) {
          return _.find(team, { id: args.id });
        },
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
