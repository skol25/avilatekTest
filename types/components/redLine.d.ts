/* eslint-disable prettier/prettier */
export interface SocialMediaIcon {
  src: string;
  alt: string;
  link: string;
}

export interface RedLineProps {
  socialMediaIcons: SocialMediaIcon[];
  iconColor?: string;
}
