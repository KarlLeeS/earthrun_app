import React from 'react';
import { ScrollView ,Image} from 'react-native';
import styled from "styled-components"; 
import constants from '../../constants';
import Post from "../../components/Post"

const Container = styled.View`
    width:${constants.width};
    min-height:${constants.height};
    background-color:white;
    /* margin-top:10px; */
`;

const Section = styled.View`
    /* padding:15px 0; */
    border-bottom-color:#ececec;
    border-bottom-width:1px;
    border-top-color:#f8f8f8; 
    border-top-width:5px;
    padding:20px;
`;

const SectionFirst = styled(Section)`
    width:100%;
    border-top-color:#f8f8f8; 
    border-top-width:0px;
`;

const SectionLast = styled(Section)`
    width:100%;
    border-bottom-width:0px;
`;

const Title = styled.Text`
    font-size:16px;
    font-weight:bold;
    margin: 14px 0px;
`;
const List = styled.View`
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:flex-start;
`;
const Item = styled.TouchableOpacity`
    padding: 5px 15px;
    border-radius:25;
    margin-right:10px;
    margin-bottom:10px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:${props=>props.backgroundColor};

`;
const ItemText =styled.Text`
    color:${props=>props.color};
`;

const Brand = styled.View`
    display:flex;
    width:100%;
    flex-direction:row; 
    height:${constants.height/12};
    /* justify-content:center; */
    /* background-color:red; */
    align-items:center;
`;

const ImageWrapper = styled.View`
    width:${constants.width/6};
    height:${constants.height/12};
    display:flex;
    justify-content:center;
    align-items:center;
    
`;

const Description = styled.View`
    width:${constants.width-constants.width/6-40};
    /* background-color:skyblue; */
    height:${constants.height/12};
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    z-index:10;
`;
const DescriptionWrapper = styled.View`
    width:80%;
    display:flex;
    /* background-color:red; */
    height:${constants.height/12};
    justify-content:center;
    padding:10px;
    flex-grow:1;
`;
const MainText = styled.Text`
    font-weight:bold;
    /* font-size:18px; */
`;
const SubText = styled.Text`
    margin-top:5px;
    width:100%;
    font-size:10px;
`;
const Link = styled.TouchableOpacity`
    width:20%;
    height:${constants.height/12};
    display:flex;
    justify-content:center;
    align-items:center;
    /* background-color:green; */
    align-self:flex-start;
    flex-grow:1;
`;

const Icon = styled.Text`
    /* width:10%; */
    font-size:16px;
`;

const Posts = styled.View`
  flex-direction:row; 
  justify-content:flex-start;
  flex-wrap:wrap;
`;



const ProductBrand = (props) => {

    const color = "#fff";
    const backgroundColor = "#00cf85";
    const onSubmit= ()=>{
        console.log("이 키워드로 검색");
    }

    // const beforeSearch= true;
    const beforeSearch= false;
    return (
        <Container>
        <ScrollView>
            {
                beforeSearch
                ?
                    (
                        <>
                        <SectionFirst>
                            <Title>최근 검색한 상품</Title>
                            <List>
                                <Item backgroundColor={backgroundColor} onPress={onSubmit}>
                                    <ItemText color={color} >
                                        마요네즈
                                    </ItemText>
                                </Item>
                                
                                <Item backgroundColor={backgroundColor}>
                                    <ItemText color={color} >
                                        라면
                                    </ItemText>
                                </Item>
                                
                                <Item backgroundColor={backgroundColor}>
                                    <ItemText color={color} >
                                        마요네즈
                                    </ItemText>
                                </Item>
                                
                                <Item backgroundColor={backgroundColor}>
                                    <ItemText color={color} >
                                        라면
                                    </ItemText>
                                </Item>
                            </List>
                        </SectionFirst>
                        <SectionLast>
                            <Title>인기 상품</Title>
                            <List>
                                <Item backgroundColor={backgroundColor}>
                                    <ItemText color={color} >
                                        채담카레
                                    </ItemText>
                                </Item>
                                
                                <Item backgroundColor={backgroundColor}>
                                    <ItemText color={color} >
                                        풀무원 정면
                                    </ItemText>
                                </Item>
                                
                                <Item backgroundColor={backgroundColor}>
                                    <ItemText color={color} >
                                        채담카레
                                    </ItemText>
                                </Item>
                                
                                <Item backgroundColor={backgroundColor}>
                                    <ItemText color={color} >
                                        풀무원 정면
                                    </ItemText>
                                </Item>
                            </List>
                        </SectionLast>
                        </>
                    )
                :
                    (
                        <>
                            <SectionFirst>
                                <Title>브랜드</Title>
                                <Brand>
                                    <ImageWrapper>
                                        <Image 
                                        resizeMode={"cover"}
                                        style={{
                                            width:constants.width/6,             
                                            height:constants.height/12, 
                                            borderRadius: 100,
                                            borderColor:"#dbdbdb",
                                            borderWidth:1
                                        }}
                                        source={require("../../assets/certi8.png")}
                                        />
                                    </ImageWrapper>
                                    
                                    <Description>
                                        <DescriptionWrapper>
                                            <MainText>더브레드블루</MainText>
                                            <SubText numberOfLines={2}>더브레드블루는 사랑입니다.더브레드블루는 사랑입니다.더브레드블루는 사랑입니다더브레드블루는 사랑입니다.더브레드블루는 사랑입니다.더브레드블루는 사랑입니다.</SubText>
                                        </DescriptionWrapper>
                                        <Link>
                                            <Icon>이동</Icon>
                                        </Link>
                                        
                                    </Description>
                                </Brand>
                            </SectionFirst>
                            
                            
                            <SectionLast>
                                <Title>상품 87건</Title>
                                
                                <Posts>
                                    <Post 
                                    id={1}
                                    brand={{name:"브랜드"}}
                                    files={[{url:"https://cdn.pixabay.com/photo/2020/12/19/03/27/person-5843476_960_720.jpg"}]}
                                    weight={1000}
                                    reviewCount={10}
                                    rating={4.8}
                                    price={123}
                                    name={"제품"}
                                    index={1}
                                    fromSearchScreen={true}
                                    />
                                    <Post id={1} brand={{name:"브랜드"}}files={[{url:"https://cdn.pixabay.com/photo/2020/12/19/03/27/person-5843476_960_720.jpg"}]}weight={1000}reviewCount={10}rating={2.3}price={123}name={"제품"}index={1}fromSearchScreen={true}/>
                                    <Post id={1} brand={{name:"브랜드"}}files={[{url:"https://cdn.pixabay.com/photo/2020/12/19/03/27/person-5843476_960_720.jpg"}]}weight={1000}reviewCount={10}rating={2.3}price={123}name={"제품"}index={1}fromSearchScreen={true}/>
                                    <Post id={1} brand={{name:"브랜드"}}files={[{url:"https://cdn.pixabay.com/photo/2020/12/19/03/27/person-5843476_960_720.jpg"}]}weight={1000}reviewCount={10}rating={2.3}price={123}name={"제품"}index={1}fromSearchScreen={true}/>
                                    <Post id={1} brand={{name:"브랜드"}}files={[{url:"https://cdn.pixabay.com/photo/2020/12/19/03/27/person-5843476_960_720.jpg"}]}weight={1000}reviewCount={10}rating={2.3}price={123}name={"제품"}index={1}fromSearchScreen={true}/>
                                    <Post id={1} brand={{name:"브랜드"}}files={[{url:"https://cdn.pixabay.com/photo/2020/12/19/03/27/person-5843476_960_720.jpg"}]}weight={1000}reviewCount={10}rating={2.3}price={123}name={"제품"}index={1}fromSearchScreen={true}/>
                                    <Post id={1} brand={{name:"브랜드"}}files={[{url:"https://cdn.pixabay.com/photo/2020/12/19/03/27/person-5843476_960_720.jpg"}]}weight={1000}reviewCount={10}rating={2.3}price={123}name={"제품"}index={1}fromSearchScreen={true}/>
                                    <Post id={1} brand={{name:"브랜드"}}files={[{url:"https://cdn.pixabay.com/photo/2020/12/19/03/27/person-5843476_960_720.jpg"}]}weight={1000}reviewCount={10}rating={2.3}price={123}name={"제품"}index={1}fromSearchScreen={true}/>
                                {/* {
                                    data.MainSearchBar.map((e,i)=>(
                                    <Post key={e.id} fromMainScreenNormalList={true} {...e} />
                                    ))
                                } */}
                            </Posts>
                            </SectionLast>

                            
                        </>
                    )
            }
            </ScrollView>   
        </Container>
);

}

export default ProductBrand;
