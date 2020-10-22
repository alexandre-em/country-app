import { gql } from '@apollo/client'

export const GET_COUNTRY = gql`
    query getCountry ($first: Int, $offset: Int){
        Country(first: $first, offset: $offset){
            name,
            _id,
            flag{
                svgFile
            }
        }
    }
`