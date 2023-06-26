const SocialMediaIcons = () => {
  return (
    <div className="flex  sm:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="linkedin-link"
          src="/assets/linkedin-rounded-svgrepo-com.svg"
          className="w-10 h-10"
        />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="github-link"
          src="/assets/github-svgrepo-com.svg"
          className="w-10 h-10"
        />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="facebook-link"
          src="/assets/facebook-svgrepo-com.svg"
          className="w-10 h-10"
        />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="instagram-link"
          src="/assets/instagram-svgrepo-com.svg"
          className="w-10 h-10"
        />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
