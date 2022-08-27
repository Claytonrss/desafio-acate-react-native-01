import { gql } from '@apollo/client'

const INFO_PERSON = gql`
  query {
    characters(page: 2, filter: { name: "rick" }) {
      info {
        count
      }
      results {
        id
        name
        gender
        image
      }
    }
  }
`

export default INFO_PERSON
