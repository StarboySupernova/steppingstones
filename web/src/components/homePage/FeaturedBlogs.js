import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { FeaturedBlogsStyles } from '../../styles/homePage/FeaturedBlogsStyles';
import BlogGrid from '../blog/BlogGrid';
import ParagraphText from '../typography/ParagraphText';
import { SectionTitle } from '../typography/Title';
import { NewHeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';

function FeaturedBlogs() {
  const data = useStaticQuery(graphql`
    {
      allSanitySpotlight(filter: { _id: { eq: "spotlightItems" } }) {
        nodes {
          blogs {
            id
            title
            publishedAt
            categories {
              title
              slug {
                current
              }
            }
            coverImage {
              alt
              asset {
                gatsbyImageData
              }
            }
            slug {
              current
            }
          }
        }
      }
    }
  `);
  const spotlightBlogs = data.allSanitySpotlight.nodes[0].blogs;
  return (
    <FeaturedBlogsStyles>
      <NewHeroSectionStyles>
        <div className="container">
          <div className="hero__wrapper">
            <div className="right">
              <SectionTitle>Our Core Operations</SectionTitle>
              <ParagraphText className="hero__text text-right">
                We are a money market, we excel in seamless money, electricity,
                and airtime transfers, both locally and across borders. Trust us
                to cater to all your transfer needs with efficiency and
                reliability.
              </ParagraphText>
              <SectionTitle>Dedication & Reliability</SectionTitle>
              <ParagraphText className="hero__text text-right">
                🌐 Connect with Confidence at Stepping Stones Group Internet
                Cafes! 🌐 At Stepping Stones Group, our commitment to your
                connectivity is unwavering. 💪 Experience the pinnacle of
                reliability and dedication as we provide a smooth internet
                experience in a vibrant and comfortable setting. Your
                productivity and customer satisfaction matters, and we're here
                to ensure it thrives. Trust the Stepping Stones difference! 🚀💻
              </ParagraphText>
            </div>
            <div className="left">
              <StaticImage
                className="hero__image"
                src="../../images/undraw_internet_on_the_go_re_vben.svg"
                alt="stepping stones hero image"
                placeholder="blurred"
                objectPosition="50% 30%"
              />
            </div>
          </div>
        </div>
      </NewHeroSectionStyles>
      <SectionTitle>Spotlight & Trending Posts</SectionTitle>
      <ParagraphText className="featuredBlogs__text">
        Latest from us at Stepping Stones Group
      </ParagraphText>
      <BlogGrid blogs={spotlightBlogs} />
    </FeaturedBlogsStyles>
  );
}

export default FeaturedBlogs;
