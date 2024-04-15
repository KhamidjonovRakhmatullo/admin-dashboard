import styled from "styled-components";

export const HomeContainer =styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px 50px 0px 50px;
margin: 0px;
background-color: #FAFAFA;

`

export const HomeTitleWrapper =styled.div`
display: flex;
flex-direction: column;
align-items: start;
width: 100%;
max-width: 2000px;

`

 
export const Title =styled.h1`
color: #006DAB;
font-family: Montserrat;
font-size: 50px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin: 0px;
`

export const Text =styled.p`
color: #006DAB;
font-family: Montserrat;
font-size: 25px;
font-style: normal;
font-weight: 300;
line-height: normal;
margin: 0px;
`

export const HomeBoxWrapper =styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
justify-content: space-between;
align-items: start;
width: 100%;
max-width: 2000px;
/* border: 1px solid red; */
padding: 40px 0px 30px 0px;
@media only screen and (max-width: 1320px){
    grid-template-columns: auto auto;
    gap: 30px;
    justify-content: space-around;
}
@media only screen and (max-width: 750px){
    grid-template-columns: auto ;
    gap: 20px;
    justify-content: space-around;
}
`

export const HomeBox =styled.div`
/* border: 2px solid red; */
box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
max-width: 300px;
flex: 1;
`

export const HomeBoxText =styled.p`
/* color: #212529; */
font-family: Montserrat;
font-size: 25px;
font-style: normal;
font-weight: 300;
line-height: normal;
margin: 0px;
`

export const ChartWrapper =styled.div`
display: flex;
justify-content: space-between;
width: 100%;
margin-top: 30px;
max-width: 2000px;
@media only screen and (max-width: 1320px){
    display: grid;
    grid-template-columns: repeat(1, 4fr);
    gap: 50px;
}
`

export const ChartTitle =styled.h1`
margin-top: 10px;
color: #006DAB;
`

export const LineChartWrapper =styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 6px;
border-radius: 6px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
padding: 0px 30px;
`

export const BarChartWrapper =styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 6px;
border-radius: 6px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
padding: 0px 30px;
`

export const TableChartWrapper =styled.div`
display: flex;
flex-direction: column;
gap: 6px;
width: 100%;
padding: 20px 20px;
margin: 50px 50px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
border-radius: 6px;
background-color: white;
max-width: 2000px;

`