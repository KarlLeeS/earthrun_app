import { gql } from "apollo-boost";

export const POST_FRAGMENT = gql`
  fragment PostParts on Post{
    id
    brand
    name
    weight
    price
    preferences{
        name
    }
    reviewCount
    files{
        url
    }
    rating
    weeklyHits
    createdAt
  }
`;




export const REVIEW_FRAGMENT= gql`
  fragment ReviewParts on Review{
    id
    user{
      id
      avatar
      username
    }
    rating
    text
    updatedAt
  }
`;

// export const USER_FRAGMENT = gql`
//   fragment UserParts on User {
//     id
//     avatar
//     username
//     email
//     preference{
//         id
//         name
//     }
//     bio
//     likes{
//         post{
//           id
//           name
//         }
//     }
//     isFollowing
//     isSelf
//     followingCount
//     followersCount
//     reviews{
//       ...ReviewParts
//     }
//     recentlyPost{
//       ...PostParts
//     }
//     uploadedPost{
//       ...PostParts
//     }
//     badges{
//         id
//         name
//     }
//   }
//   ${POST_FRAGMENT}
//   ${REVIEW_FRAGMENT}
// `;


export const USER_FRAGMENT = gql`
  fragment UserParts on User {
    id
    avatar
    username
    email
    preference{
        id
        name
    }
    bio
    reviews{
      id
    }
    isFollowing
    isSelf
    followingCount
    typeStart
    followersCount
    recentlyPost{
      id
      files{
        url
      }
      brand
      name
      weight
      price
      rating
      reviewCount
    }
    uploadedPost{
      id
    }
    badges{
        id
        name
    }
  }
`;

