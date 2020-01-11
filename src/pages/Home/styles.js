import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #root {
  min-height: 100%;

}

body {
  background: #4465A3;
  -webkit-font-smoothing: antialiased !important;
}

body, input, button {
  color: #222;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
}

`;

export const Container = styled.div`
 max-width: 700px;
 border-radius: 4px;
 background: #FFF;
 padding: 30px;
 margin: 50px auto;

 display: flex;
 flex-direction: column;
align-items: center;

  img {
    width: 150px;
  }

  p {
    font-size: 12px;
    color: #666
    
  }

`;

export const Loading = styled.div`
  margin: 80px auto;
  color: white;
  font-size: 32px;


`;



export const List = styled.div`
  list-style: none;
  margin-bottom: 15px;


li {
  margin-top: 10px;
  background: white;
  padding: 15px 10px;
  border-radius: 4px;

  display: flex;

  flex-direction: row;
  align-items: center;
   
    & + li {
    border-top: 1px solid #eee;
  }
}

a {
  font-family: 'Roboto', sans-serif;
  color: #333;
  font-size: 16px;
  text-decoration: none;
  
  &:hover {
    color: #4465A3;

  }

}

img {
  width: 60px;
  border-radius: 50%;
}

div {
  flex: 1;
  margin-left: 15px;

  p {
    margin-top: 5px;
    color: #666;
    font-family: 'Roboto', sans-serif;
  }

}



`;

export const Span = styled.span`
  background: ${props => props.background};
  font-family: 'Roboto', sans-serif;
  color: #333;
  border-radius: 2px;
  font-size: 12px;
  font-weight: 600;
  height: 20px;
  padding: 3px 4px;
  margin-left: 10px;
`;

export const Pagination = styled.div`

  display: inline-block;
 a {
   color: black;
   float:left;
   padding: 8px 16px;
   text-decoration: none;
   font-family: 'Roboto', sans-serif;
  
  &:active {
    background-color: #4465A3;
    color: white;
  }

}


`;
