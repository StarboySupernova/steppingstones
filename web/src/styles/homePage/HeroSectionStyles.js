import styled from 'styled-components';

export const HeroSectionStyles = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .container {
    height: 100%;
  }
  .hero__wrapper {
    width: 100%;
    height: 100%;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: linear-gradient(135deg, #9b2220, #08011c);
      z-index: -1;
    }
    .left {
      width: 50%;
      padding: 50px 0;
      .hero__heading {
        max-width: 450px;
        font-size: 4rem;
        font-family: 'Poppins', sans-serif;
        font-weight: '700';
        margin: 0.2rem 0;
      }
      .hero__text {
        max-width: 350px;
      }
      .hero__button {
        margin-top: 1.5rem;
      }
      /* Select the element by its class */
      .inlineText {
        display: inline; /* or inline-block */
        padding: 2px;
      }
      .kazang {
        color: #c0c600;
      }
      .flash {
        color: #2fc23a;
      }
      .vodapay {
        color: #e60000;
      }
      .mtnMomo {
        color: #fdca00;
      }
      .blu {
        color: #132d6e;
      }
      .racellular {
        color: #c856c5;
      }
    }
    .right {
      position: absolute;
      right: 0;
      top: 0;
      width: 50%;
      height: 100%;
      .hero__image {
        width: 100%;
        height: 100%;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero__wrapper {
      height: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column-reverse;
      padding-top: 80px;
      padding-bottom: 80px;
      &::after {
        width: 100%;
      }
      .right {
        position: initial;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        .hero__image {
          height: 300px;
          margin: 0 auto;
        }
      }
      .left {
        width: 100%;
        margin-top: 1rem;
        padding: 0;
        .hero__heading {
          max-width: 330px;
          font-size: 3rem;
        }
      }
    }
  }
`;

export const NewHeroSectionStyles = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .container {
    height: 100%;
  }
  .hero__wrapper {
    width: 100%;
    height: 100%;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0; /* Changed from left: 0 */
      width: 50%; /* Changed from width: 50% */
      height: 100%;
      background: linear-gradient(135deg, #08011c, #9b2220);
      z-index: -1;
    }
    .left {
      position: absolute; /* Added */
      left: 0; /* Added */
      top: 0; /* Added */
      width: 50%;
      height: 100%;
      .hero__image {
        /* Changed from .hero__button */
        width: 100%;
        height: 100%;
      }
    }
    .right {
      width: 50%; /* Changed from width: 50% */
      padding: 50px 10px;
      position: absolute; /* Added */
      right: 0; /* Added */
      top: 0; /* Added */
      .hero__heading {
        max-width: 450px;
        font-size: 4rem;
        font-family: 'Poppins', sans-serif;
        font-weight: '700';
        margin: 0.2rem 0;
      }
      .hero__text {
        max-width: 450px;
      }
      .hero__button {
        margin-top: 1.5rem;
      }
      /* Select the element by its class */
      .inlineText {
        display: inline; /* or inline-block */
        padding: 2px;
      }
      .text-right {
        text-align: right;
        padding: 10px;
      }
      .kazang {
        color: #c0c600;
      }
      .flash {
        color: #2fc23a;
      }
      .vodapay {
        color: #e60000;
      }
      .mtnMomo {
        color: #fdca00;
      }
      .blu {
        color: #132d6e;
      }
      .racellular {
        color: #c856c5;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero__wrapper {
      height: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column-reverse;
      padding-top: 80px;
      padding-bottom: 80px;
      &::after {
        width: 100%;
      }
      .left {
        position: initial; /* Changed from absolute */
        width: 100%;
        .hero__image {
          height: 300px;
          margin: 0 auto;
        }
      }
      .right {
        position: initial; /* Changed from absolute */
        width: 100%;
        margin-top: 1rem;
        padding: 0;
        .hero__heading {
          max-width: 330px;
          font-size: 3rem;
        }
      }
    }
  }
`;
