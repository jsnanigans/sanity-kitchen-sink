import React from "react";
import { Link, navigate } from "gatsby";
import cn from 'classnames'

const doNavigate = target => {
  if (!target || !target.length) {
    return;
  }
  const internal = /^\/(?!\/)/.test(target);
  if (internal) {
    navigate(target);
  } else {
    window.location = target;
  }
};

const CTALink = props => {
  let link = props.route || props.link || "#";
  if (
    props.landingPageRoute &&
    props.landingPageRoute.slug &&
    props.landingPageRoute.slug.current
  ) {
    link = props.landingPageRoute.slug.current;
  }

  if (props.kind === "button") {
    return (
      <button
        id="navAction"
        onClick={() => doNavigate(link)}
        className={props.buttonActionClass || ""}
      >
        {props.title}
      </button>
    );
  }

  // External
  if (props.link) {
    return (
      <a href={props.link} target="_blank" className={props.className} rel="noopener noreferrer">
        {props.title}
      </a>
    );
  }

  return (
    <Link className={cn('mr-3', props.className)} to={link}>
      {props.title}
    </Link>
  );
};

export default CTALink;
