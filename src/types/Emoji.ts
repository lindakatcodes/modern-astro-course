export enum Emoji {
  thumbsup = "thumbsup",
  star = "star",
  heart = "heart",
  rocket = "rocket",
}

export interface ReactionDetail {
  count: number;
  reacted: boolean;
}

export interface ReactionsDetails {
  [Emoji.thumbsup]: ReactionDetail;
  [Emoji.star]: ReactionDetail;
  [Emoji.rocket]: ReactionDetail;
  [Emoji.heart]: ReactionDetail;
}

export const emojiList = Object.values(Emoji);
