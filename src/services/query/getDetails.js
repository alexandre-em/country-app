import { gql } from '@apollo/client'

const GET_DETAILS = gql`
    query GetFlag($name: String!) {
        Country(filter: {
            name: $name
        }) {
            name,
            flag{
                svgFile
            },
            _id
            ,
            capital,
            area,
            population,
            nativeName,
            demonym,
            timezones{
                name
            },
            borders{
                name
            },
            subregion{
                name
            },
            officialLanguages{
                name
            },
            currencies{
                name,
                symbol
            },
            regionalBlocs{
                name
            }
        }
    }
`
export default GET_DETAILS