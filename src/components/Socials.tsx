import {
  FaGithub,
  FaTwitter,
  FaDiscord,
  FaEnvelope,
  FaMastodon,
} from "react-icons/fa/index";

const links = [
  {
    url: "https://github.com/ommibtw",
    icon: FaGithub,
    newTab: true,
    rel: "noreferrer",
  },
  {
    url: "https://twitter.com/bestdevelopr",
    icon: FaTwitter,
    newTab: true,
    rel: "noreferrer",
  },
  {
    url: "https://discord.com/users/952354740858134628",
    icon: FaDiscord,
    newTab: true,
    rel: "noreferrer",
  },
  {
    url: "mailto:ariez@ariez.me",
    icon: FaEnvelope,
    newTab: false,
    rel: "noreferrer",
  },
];

export default function SocialGallery() {
  return (
    <>
      <div className="inline-flex h-full space-x-4 flex-auto text-2xl">
        {links.map((link) => (
          <a
            href={link.url}
            className="transition-transform hover:scale-105"
            target={link.newTab ? "_blank" : undefined}
            rel={link.rel}
            key={link.url}
          >
            <link.icon />
          </a>
        ))}
      </div>
    </>
  );
}
