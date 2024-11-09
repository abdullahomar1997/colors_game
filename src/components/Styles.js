import {motion} from 'framer-motion';
import styled from 'styled-components';

export const CircleContainer = styled.div`
  max-width: 100vw;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px; 
`;

export const Circle = styled(motion.div)`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 10px;
    cursor: pointer;
`;

export const Header = styled.div`
    display: flex;
    height: 8vh;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    /* background-color: red; */
`;

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
    height: 100vh;
    width: 100vw;
   margin: 0;
    // background-color: #121926;
    // background: linear-gradient(to bottom, #1a1a2e, #2d2d44, #4a4e69);
    // background: linear-gradient(to bottom, #151e23, #2d2d44, #4a4e69);
    // position: absolute;



background-color: #2A2A2A;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%232A2A2A' width='11' height='11'/%3E%3Crect fill='%23292929' x='10' width='11' height='11'/%3E%3Crect fill='%23292929' y='10' width='11' height='11'/%3E%3Crect fill='%23282828' x='20' width='11' height='11'/%3E%3Crect fill='%23282828' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%23272727' y='20' width='11' height='11'/%3E%3Crect fill='%23262626' x='30' width='11' height='11'/%3E%3Crect fill='%23262626' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%23252525' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%23252525' y='30' width='11' height='11'/%3E%3Crect fill='%23242424' x='40' width='11' height='11'/%3E%3Crect fill='%23232323' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%23232323' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%23222222' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23222222' y='40' width='11' height='11'/%3E%3Crect fill='%23212121' x='50' width='11' height='11'/%3E%3Crect fill='%23202020' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%23202020' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%231f1f1f' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%231f1f1f' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%231e1e1e' y='50' width='11' height='11'/%3E%3Crect fill='%231d1d1d' x='60' width='11' height='11'/%3E%3Crect fill='%231d1d1d' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%231c1c1c' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%231c1c1c' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%231b1b1b' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%231b1b1b' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%231a1a1a' x='70' width='11' height='11'/%3E%3Crect fill='%23191919' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23191919' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23181818' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23181818' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23171717' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23171717' x='80' width='11' height='11'/%3E%3Crect fill='%23161616' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23151515' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23151515' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23141414' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23131313' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23131313' x='90' width='11' height='11'/%3E%3Crect fill='%23121212' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23111111' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23111111' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23101010' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%230f0f0f' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%230e0e0e' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%230d0d0d' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%230c0c0c' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%230c0c0c' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%230b0b0b' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23090909' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23080808' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23070707' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23060606' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23050505' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23040404' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23030303' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23020202' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23010101' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23000000' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;

background-color: #242424;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23242424' width='11' height='11'/%3E%3Crect fill='%23242424' x='10' width='11' height='11'/%3E%3Crect fill='%23232323' y='10' width='11' height='11'/%3E%3Crect fill='%23232323' x='20' width='11' height='11'/%3E%3Crect fill='%23222222' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%23222222' y='20' width='11' height='11'/%3E%3Crect fill='%23212121' x='30' width='11' height='11'/%3E%3Crect fill='%23212121' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%23202020' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%23202020' y='30' width='11' height='11'/%3E%3Crect fill='%231f1f1f' x='40' width='11' height='11'/%3E%3Crect fill='%231f1f1f' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%231e1e1e' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%231e1e1e' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%231d1d1d' y='40' width='11' height='11'/%3E%3Crect fill='%231d1d1d' x='50' width='11' height='11'/%3E%3Crect fill='%231c1c1c' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%231c1c1c' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%231b1b1b' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%231b1b1b' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%231a1a1a' y='50' width='11' height='11'/%3E%3Crect fill='%231a1a1a' x='60' width='11' height='11'/%3E%3Crect fill='%23191919' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23191919' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23181818' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23181818' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23171717' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23171717' x='70' width='11' height='11'/%3E%3Crect fill='%23161616' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23161616' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23151515' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23151515' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23141414' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23141414' x='80' width='11' height='11'/%3E%3Crect fill='%23131313' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23131313' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23121212' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23121212' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23111111' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23101010' x='90' width='11' height='11'/%3E%3Crect fill='%23101010' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%230f0f0f' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%230e0e0e' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%230e0e0e' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%230d0d0d' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%230c0c0c' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%230b0b0b' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%230b0b0b' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%230a0a0a' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23090909' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23080808' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23070707' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23060606' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23050505' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23040404' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23040404' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23030303' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23020202' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23010101' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23000000' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;

background-color: #000000;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23000000' width='11' height='11'/%3E%3Crect fill='%23000000' x='10' width='11' height='11'/%3E%3Crect fill='%23000000' y='10' width='11' height='11'/%3E%3Crect fill='%23000000' x='20' width='11' height='11'/%3E%3Crect fill='%23000000' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%23000000' y='20' width='11' height='11'/%3E%3Crect fill='%23000000' x='30' width='11' height='11'/%3E%3Crect fill='%23000000' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%23000000' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%23000000' y='30' width='11' height='11'/%3E%3Crect fill='%23000000' x='40' width='11' height='11'/%3E%3Crect fill='%23000000' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%23000000' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%23000000' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23000000' y='40' width='11' height='11'/%3E%3Crect fill='%23000000' x='50' width='11' height='11'/%3E%3Crect fill='%23000000' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%23000000' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%23000000' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23000000' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23000000' y='50' width='11' height='11'/%3E%3Crect fill='%23000000' x='60' width='11' height='11'/%3E%3Crect fill='%23000000' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23000000' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23000000' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23000000' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23000000' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23000000' x='70' width='11' height='11'/%3E%3Crect fill='%23000000' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23000000' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23000000' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23000000' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23000000' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23000000' x='80' width='11' height='11'/%3E%3Crect fill='%23000000' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23000000' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23000000' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23000000' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23000000' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23000000' x='90' width='11' height='11'/%3E%3Crect fill='%23000000' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23000000' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23000000' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23000000' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23000000' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%23000000' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23000000' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23000000' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23000000' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23000000' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23000000' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23000000' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23000000' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23000000' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23000000' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23000000' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23000000' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23000000' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23000000' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23000000' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;

background-color: #1F1F1F;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%231F1F1F' width='11' height='11'/%3E%3Crect fill='%231f1f1f' x='10' width='11' height='11'/%3E%3Crect fill='%231e1e1e' y='10' width='11' height='11'/%3E%3Crect fill='%231e1e1e' x='20' width='11' height='11'/%3E%3Crect fill='%231d1d1d' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%231d1d1d' y='20' width='11' height='11'/%3E%3Crect fill='%231d1d1d' x='30' width='11' height='11'/%3E%3Crect fill='%231c1c1c' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%231c1c1c' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%231b1b1b' y='30' width='11' height='11'/%3E%3Crect fill='%231b1b1b' x='40' width='11' height='11'/%3E%3Crect fill='%231b1b1b' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%231a1a1a' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%231a1a1a' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23191919' y='40' width='11' height='11'/%3E%3Crect fill='%23191919' x='50' width='11' height='11'/%3E%3Crect fill='%23191919' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%23181818' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%23181818' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23171717' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23171717' y='50' width='11' height='11'/%3E%3Crect fill='%23171717' x='60' width='11' height='11'/%3E%3Crect fill='%23161616' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23161616' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23151515' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23151515' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23151515' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23141414' x='70' width='11' height='11'/%3E%3Crect fill='%23141414' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23131313' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23131313' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23121212' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23121212' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23111111' x='80' width='11' height='11'/%3E%3Crect fill='%23111111' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23101010' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23101010' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%230f0f0f' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%230f0f0f' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%230e0e0e' x='90' width='11' height='11'/%3E%3Crect fill='%230d0d0d' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%230d0d0d' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%230c0c0c' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%230c0c0c' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%230b0b0b' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%230a0a0a' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23090909' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23090909' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23080808' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23070707' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23070707' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23060606' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23050505' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23040404' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23040404' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23030303' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23020202' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23010101' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23010101' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23000000' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;

`;

export const Container1 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 20vh;
    /* background-color: green; */
`;
export const Container11 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 35vh;
    /* background-color: green; */
`;
export const Container111 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* justify-content: space-around; */
    height: 40vh;
    background-color: green;
`;

export const Container2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    height: 50vh;
    /* margin: 0; */
`;

export const RandomizeButton = styled.button`
    margin-top: 100px;
    padding: 15px 20px;
    font-size: 18px;
    font-weight: bold;
    background-color: #003366; /* Green background color */
    color: white; /* White text color */
    border: none; /* No border */
    border-radius: 6px; /* Rounded corners */
    cursor: pointer;
    border-radius: 10px;
    transition: background-color 0.3s ease; /* Smooth color transition */ 
    &:hover {
      /* background-color: #45a049; Darker green color on hover */
    }
`;

export const MatchingCountLabel = styled.div`
    font-size: 1rem;
    font-weight: bold;
    /* margin-bottom: 10px; */
    color: white;
    margin-top: 50px;
`;

export const MatchingCountLabel1 = styled.h1`
    font-size: 2.5rem;
    color: white;
    border: 4px solid #003366;
    padding-right: 30px;
    padding-left: 30px;
    border-radius: 50px;
    border-radius: 50px;
    font-family: Pixel;

`;


export const BottomLeftText = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 0.5rem;
  color: #F5F5F5;  // Set your desired text color: ;
  font-size: 1rem;  // Set your desired font size
`;
