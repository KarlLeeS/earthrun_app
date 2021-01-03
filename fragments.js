import { gql } from "apollo-boost";


// 


export const POST_FRAGMENT = gql`
  fragment PostParts on Post{
    id
    brand{
      name
      description
    }
    name
    weight
    price
    isLiked
    preference{
        name
    },
    foodtypes{
      name
    }, 
    reviewCount
    files{
        url
    }
    rating
    weeklyHits
    totalHits
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
    post{
      id
      rating
      reviewCount
    }
    rating
    text
    updatedAt
  }
`;

export const FULL_POST = gql`
  fragment PostParts on Post{
    id
    brand{
      name
    }
    name
    weight
    description
    price
    isLiked
    preference{
        name
    }
    foodtypes{
      name
    }
    reviewCount
    files{
        url
    }
    rating
    weeklyHits
    createdAt
    preferences{
      id
      name
    }
    certification{
      id
      name
    }
    categories{
      id 
      name
    }
    rawMaterialURL
    rawMaterials{
      id 
      name
      text
    }
    reviews{
      ...ReviewParts     
    }
    offline
    online
  }
  ${REVIEW_FRAGMENT}
`;

export const FULL_POST_TEST = gql`
  fragment PostPartsTEST on Post{
    id
    brand
    isLiked
    name
    weight
    description
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
    preferences{
      id
      name
    }
    certification{
      id
      name
    }
    categories{
      id 
      name
    }
    rawMaterialURL
    rawMaterials{
      id 
      name
      text
    }
    reviews{
      ...ReviewParts     
    }
    offline
    online
  }
  ${REVIEW_FRAGMENT}
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
    foodtypes{
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
      brand{
        name
      }
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ME = gql`
    {
        me{
            ...UserParts
        }
    }
    ${USER_FRAGMENT}
`


export const GET_ME = gql`
  query RecommendForMe(
    $userPrefer: String!
  ){
    RecommendForMe(
      userPrefer:$userPrefer
    ){
      ...PostParts
    }
  }
  ${POST_FRAGMENT}
`; 

export const GET_NEW = gql`
  query RecommendNewest(
        $userPrefer: String!
      ){
        RecommendNewest(
          userPrefer:$userPrefer
        ){
          ...PostParts
        }
      }
      ${POST_FRAGMENT}
`; 

export const GET_FRIENDS = gql`
  query RecommendFriendsLike{
    RecommendFriendsLike{
        ...PostParts
      }
    }
    ${POST_FRAGMENT}
`; 


export const GET_HOTEST = gql`
  query RecommendHotest(
      $userPrefer: String!
    ){
      RecommendHotest(
        userPrefer:$userPrefer
      ){
        ...PostParts
      }
    }
    ${POST_FRAGMENT}
`; 


export const GET_MAIN_TOP_TAB= gql`
  query MainTopTab(
      $certification:[String]
      $preferences:[String]
      $orderingoption:String
      $categories:String!
  ){
    MainTopTab(
      certification:$certification
      preferences:$preferences
      orderingoption:$orderingoption
      categories:$categories
    ){
      ...PostParts
    }
  }
  ${POST_FRAGMENT}
`;
