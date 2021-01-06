import { useQuery } from "@apollo/client";
import {gql} from "apollo-boost";
import React  from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";
import { useMainTabPosts, useMainTabPostsLoading, usesetMainTabPosts, usesetMainTabPostsLoading, useUser } from "../../AuthContext";
import Loader from "../../components/Loader";
import Post from "../../components/Post";
import {  POST_FRAGMENT,GET_HOTEST } from "../../fragments";
import Slider from "../detail/slider"
import constants from "../../constants";

const Container = styled.View`
  background-color:white;
`;

const Sliders = styled(Slider)`
  width:${constants.width/2}; 
  height:${constants.height/2}; 
`

const RecommendContainer = styled.View`
  background-color:white;
  padding-left:15px;
  padding-top:15px;
  padding : 15px 0px 0px 15px;
`;

const Grid =styled.View`
  flex-direction:column; 
`;


const MainTab = ()=>{
  console.log("Rendering HomeNavigation/TabNavigation/RecommendNavigation");
  const posts = useMainTabPosts();
  const setposts = usesetMainTabPosts();
  const loading = useMainTabPostsLoading();
  const setLoading = usesetMainTabPostsLoading();
  const user = useUser(); 
  
  const {loading:done, data,refetch,error} = useQuery(GET_HOTEST,{ 
    fetchPolicy:"network-only",
    variables:{ userPrefer:user?.preference.name },
    onCompleted:()=>{ 
      setposts(data.RecommendHotest);
      setLoading(false);
    },
    onError:()=>{ console.log(error); }
  }); 

  return loading
    ?
      <Loader />
    :
      posts&&posts[0]?.files&&
      <Container>
        <Sliders files={posts[0].files} height={5} />
        <RecommendContainer>
          <ScrollView>
            <Grid>
              {
                posts.map(e=>(
                  <Post key={e.id} fromRecommendBottom={true} {...e} />
                ))
              }
            </Grid>
          </ScrollView>
      </RecommendContainer>

    </Container>
}

export default MainTab;

