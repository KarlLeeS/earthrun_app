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
    likes{
        id
    }
    isFollowing
    isSelf
    followingCount
    followersCount
    reviews{
        id
    }
    recentlyPost{
        id
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

