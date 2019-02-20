import React from 'react';
import styled from 'styled-components';
import CameraLogo from '../../assets/igcameralogo.png';
import IGLogo from '../../assets/iglogo.png';
import IGSearchIcon from '../../assets/igsearchicon.png';
import IGCompassIcon from '../../assets/igcompassicon.png';
import IGHeartIcon from '../../assets/ighearticon.png';
import IGUserIcon from '../../assets/igusericon.png';

const Header = styled.header`
    width: 100%;
    height: 52px;
    // position: absolute;
    // z-index: 2;
    display: flex;
    justify-content: center;
    background: #ffffff;
    border-bottom: 1px solid #3333;
`;

const HeaderBox = styled.div`
    width: 970px;
    height: 52px;
    padding: 0 20px 0;
    display: flex;
    align-items: center;
`;

const LogoHeader = styled.div`
    width: 377.5px;
    height: 36px;
    padding: 14px 0 0;
    display: flex;
    vertical-align: baseline;
`;

const LogoImageCam = styled.img`
    width: 24px;
    height: 24px;
`;

const LogoImageLogo = styled.img`
    width: 103px;
    height: 29px;
`;

const Divider = styled.span`
    width: .5px;
    height: 24px;
    margin: 0 16px 0;
    background: #3333;
`;

const InputWrapper = styled.div`
    width: 215px;
    height: 24px;
    padding: 3px 10px 3px 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fafafa;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
`;

const SpanWrapper = styled.button`
    width: 200px;
    height: 28px;
    padding: 7px 7px 7px 0;
    position: absolute;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: 0;
    text-decoration: none;
    background-color: #fafafa;
    visbility: visible;
    ::focus {
        visbility: hidden;
    }
`;

const SearchSpan = styled.span`
    height: 14px;
    margin: 0 3px;
    align-items: baseline;
    color: #e3e3e3;
    font-size: 14px;
    text-color: #999;
`;

const SearchIcon = styled.img.attrs({
    alt: "Instagram search icon",
    src: `${IGSearchIcon}`
})`
    width: 10px;
    height: 10px;
    opacity: 0.3;
`;

const SearchInput = styled.input.attrs({
    type: "text",
    placeholder: "Search",
})`
    width: 177px;
    height: 20px;
    display: flex;
    border: none;
    background-color: #fafafa;
    text-color: none;
    ::focus {
        outline: 0;
        text-color: #999;
    }
`;

const IconsWrapper = styled.div`
    width: 377.5px;
    height: 24px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const IconInnerWrapper = styled.div`
    width: 132px;
    height: 24px;
    padding-left: 24px;
`;

const Icon1 = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 30px
`;

const Icon2 = styled.img`
    width: 24px;
    height: 24px;
`;

const Icon3 = styled.img`
    width: 24px;
    height: 24px;
    margin-left: 30px
`;

export default class SearchBarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true
        }
    }

    toggleHandler() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    
    render() {
        return(
            <Header>
                <HeaderBox>
                    <LogoHeader>
                        <LogoImageCam alt="Instagram camera logo" src={CameraLogo} />
                        <Divider />
                        <LogoImageLogo alt="Instagram logo" src={IGLogo} />
                    </LogoHeader>
                    <InputWrapper>
                        <SpanWrapper onClick={this.toggleHandler.bind(this)} >
                            <SearchSpan><SearchIcon /></SearchSpan>
                            <SearchSpan>Search</SearchSpan>
                        </SpanWrapper>
                        {!this.state.isHidden && <Child />}
                    </InputWrapper>
                    <IconsWrapper>
                        <IconInnerWrapper>
                            <Icon1 alt="Instagram compass icon" src={IGCompassIcon} />
                            <Icon2 alt="Instagram heart icon" src={IGHeartIcon} />
                            <Icon3 alt="Instagram user icon" src={IGUserIcon} />
                        </IconInnerWrapper>
                    </IconsWrapper>
                </HeaderBox>
            </Header>
        )
    }
}

const Child = props => {
    console.log('Yup. You clicked it.')
    return (<SearchInput onKeyDown={props.searchPosts} />)
}

// import React from 'react';
// import CameraLogo from '../../assets/igcameralogo.png';
// import IGLogo from '../../assets/iglogo.png';
// import styled from 'styled-components';

// const Header = styled.header`
//     border-bottom: 1px solid #3333;
//     height: 80px;
//     line-height: 70px;
//     display: flex;
//     justify-content: space-between;
//     background: #ffffff;
// `;

// const LogoHeader = styled.div`
//     width: 300px;
//     line-height: 75px;
// `;

// const LogoImage = styled.img`
//     height: 50%;
//     padding: 0px 15px;
// `;

// const Divider = styled.span`
//     width: 50px;
// `;

// const InputWrapper = styled.div`
//     width: 300px;
//     margin: auto;
//     display: flex;
// `;

// const SearchInput = styled.input`
//     height: 30px;
//     width: 300px;
//     text-align: center;
// `;

// const IconsWrapper = styled.div`
//     display: flex;
//     width: 300px;
// `;
// const SearchIcon = styled.i`
//     position: absolute;
//     display: inline;
//     top: 33px;
//     padding-left: 10px;
// `;
// const SocialDiv = styled.div`
//     width: 50px;
// `;
// const SearchBar = props => {
//     return (
//         <Header>
//             <LogoHeader>
//                 <LogoImage alt="instagram camera" src={CameraLogo} />
//                 <Divider>|</Divider>
//                 <LogoImage alt="instagram logo" src={IGLogo} />
//             </LogoHeader>
//             <InputWrapper>
//                 <SearchIcon className="fas fa-search" />
//                 <SearchInput
//                     type="text"
//                     placeholder="Search"
//                     onKeyDown={props.searchPosts}
//                 />
//             </InputWrapper>
//             <IconsWrapper>
//                 <SocialDiv>
//                     <i className="far fa-compass" />
//                 </SocialDiv>
//                 <SocialDiv>
//                     <i className="far fa-heart" />
//                 </SocialDiv>
//                 <SocialDiv>
//                     <i className="far fa-user-circle" />
//                 </SocialDiv>
//             </IconsWrapper>
//         </Header>
//     );
// };

// export default SearchBar;