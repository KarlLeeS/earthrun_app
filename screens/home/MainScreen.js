
import React, { useState } from "react";
import {TouchableOpacity} from "react-native"; 
import styled from "styled-components";
import Post from "../../components/Post";
import constants from "../../constants";
import NavIcon from "../../components/NavIcon";

const View = styled.View`
  margin : 20px;
  text-align:center;
`;

const Container = styled.View`
  backgroundColor : #fff;
`;

const Text = styled.Text`
  font-weight:900;
`;

const Posts = styled.View`
  flex-direction:row; 
  justify-content:space-evenly;
  flex-wrap:wrap;
`;

const FilteringTools = styled.View`
  flex-direction:row;
  justify-content:space-between;
  margin: 15px 20px 10px 20px;
`;

const LeftFilter = styled.TouchableOpacity`
  flex-direction:row; 
  align-items:center;

`;

const RightFilter = styled.TouchableOpacity`

`;

const LeftFilterText = styled.Text`
  font-size:12px;
  margin-left:10px;
  font-size:14px;
`;

const MainScreen = ({item})=>{
  // const [] = useState("");
  // const [] = useState("");
  // const [] = useState("");

  return (
    <>
    <Container>
      <FilteringTools>
        <LeftFilter>
          <NavIcon name={'md-color-filter'} color={"#000"} size={30}/>
          <LeftFilterText>인기상품순</LeftFilterText>
        </LeftFilter>
        <RightFilter>
          <NavIcon name={'md-color-filter'} color={"#000"} size={30}/>
        </RightFilter>
      </FilteringTools>
      <Posts>
        <Post />
        <Post />
      </Posts>
    </Container>
    {/* <RightFilter /> */}
    </>
  );
// 이곳에서 왼쪽과 오른쪽 필터링 값에 대한 useState가 있어야함.
// 그리고 그 필터에 대한 컴포넌트는 각각 만들어서 prop으로 set이랑 value를 전달해주면될듯
        // BYLOWPRICE
        // BYHIGHPRICE
        // BYRATING
        // BYCLICK
        // BYREVIEWCOUNT
        // BYLATEST
    const [LFilter,SetLeftFilter] = useState("BYRATING");
    const [RFilter_Preference,SetRFilter_Preference] = useState([]);
    const [RFilter_Certification,SetRFilter_Certification] = useState([]);

    const OnChange =()=>{
      
    }


}

export default MainScreen;