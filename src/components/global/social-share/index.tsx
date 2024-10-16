import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

type Props = {
  url: string;
  title: string;
};

function SocialShare({ url, title }: Props) {
  return (
    <div className="flex items-center space-x-2">
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={24} round />
      </WhatsappShareButton>

      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={24} round />
      </TwitterShareButton>

      <LinkedinShareButton url={url} title={title}>
        <LinkedinIcon size={24} round />
      </LinkedinShareButton>
    </div>
  );
}

export default SocialShare;
