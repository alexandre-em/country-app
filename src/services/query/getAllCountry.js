import { gql } from '@apollo/client'

export const GET_COUNTRY = gql`
    {
        Country(first: 10){
            name,
            flag{
                svgFile
            }
        }
    }
`