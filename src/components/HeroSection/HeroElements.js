import styled from 'styled-components'


export const HeroContainer = styled.div`
        background: #0c0c0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 30px;
        margin-bottom: -275px;
        margin-left: -200px;
        height: 1200px;
        position: relative;
        z-index: 1;     
`

export const HeroHeader = styled.div`
   margin-left: 150px;
   margin-right: 100px;
   margin-top: 10px;
   padding-top: 0px;
   position: relative;
   color: #61dafb;
   font-size: 1.7em;
   font-family: Arial Rounded MT Bold;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   width: 100%;
   height: 100%;
   overflow:hidden;
   background: transparent;
`

export const HeroBg = styled.div`
   position: relative;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   width: 100%;
   height: 100%;
   margin-left: -100px;
   overflow:hidden;
`

export const VideoBg = styled.video`
   width: 100%;
   height: 75%;
   -o-object-fit: cover;
   object-fit: cover;
   background: #232a34;  
   
`