export enum SelectedPage {
  Home = "home",
  Headphones = "headphones",
  Speakers = "speakers",
  Earphones = "earphones",
}

export interface ImagePaths {
  small: string;
  medium: string;
  large: string;
}

export interface ImageSource {
  primarySpeaker: ImagePaths;
  speaker: ImagePaths;
  earphones: ImagePaths;
}
