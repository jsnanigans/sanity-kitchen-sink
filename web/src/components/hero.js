import React from "react";
import PortableText from "./portableText";
import clientConfig from "../../client-config";
import CTALink from "./CTALink";
import styled from '@emotion/styled'


import { getFluidGatsbyImage } from "gatsby-source-sanity";

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
`

const Content = styled.div`
  position: absolute;
  z-index: 2;
  padding: 0 40px;
  max-width: 50%;
`

const Image = styled.div`
  position: relative;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;

  img {
    width: 100%;
  }
`

const maybeImage = illustration => {
  let img = null;
  if (illustration && illustration.image && illustration.image.asset && !illustration.disabled) {
    const fluidProps = getFluidGatsbyImage(
      illustration.image.asset._id,
      { maxWidth: 960 },
      clientConfig.sanity
    );

    img = (
      <img className="w-full md:w-4/5 z-50" src={fluidProps.src} alt={illustration.image.alt} />
    );
  }
  return img;
};

function Hero(props) {
  const img = maybeImage(props.illustration);
  return (
    <Container>
      <Content>
        <p className="uppercase tracking-loose w-full">{props.label}</p>
        <h1 className="my-4 text-5xl font-bold leading-tight">{props.heading}</h1>
        <div className="leading-normal text-2xl mb-8">
          <PortableText blocks={props.tagline} />
        </div>
        {props.cta && props.cta.title && (
          <CTALink
            {...props.cta}
            buttonActionClass="mx-auto ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
          />
        )}
      </Content>
      <Image>
        {img}
      </Image>
    </Container>
  );
}

export default Hero;
