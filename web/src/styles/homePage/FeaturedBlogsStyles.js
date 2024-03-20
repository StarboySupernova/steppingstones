import styled from 'styled-components';

export const FeaturedBlogsStyles = styled.div`
  padding: 5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .featuredBlogs__text {
    max-width: 450px;
  }
  .right__side {
    /* Renamed from .left */
    width: 50%; /* Adjust this as needed */
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end; /* Positions the text to the right */
    text-align: right; /* Aligns text to the right within the container */

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
  }
`;
