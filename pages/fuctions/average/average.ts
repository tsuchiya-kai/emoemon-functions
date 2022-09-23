import { Emotion } from "./type";

export const totalCalculator = (emotions: Emotion[]): Emotion => {
  const initial = {
    angry: 0,
    disgusted: 0,
    fearful: 0,
    happy: 0,
    neutral: 0,
    sad: 0,
    surprised: 0,
  };

  const sumEmotion = emotions.reduce((result, current) => {
    return {
      angry: result.angry + current.angry,
      disgusted: result.disgusted + current.disgusted,
      fearful: result.fearful + current.fearful,
      happy: result.happy + current.happy,
      neutral: result.neutral + current.neutral,
      sad: result.sad + current.sad,
      surprised: result.surprised + current.surprised,
    };
  }, initial);

  const averagedEmotion = {
    angry: sumEmotion.angry / emotions.length,
    disgusted: sumEmotion.disgusted / emotions.length,
    fearful: sumEmotion.fearful / emotions.length,
    happy: sumEmotion.happy / emotions.length,
    neutral: sumEmotion.neutral / emotions.length,
    sad: sumEmotion.sad / emotions.length,
    surprised: sumEmotion.surprised / emotions.length,
  };

  return {
    ...averagedEmotion,
    roomId: emotions[0].roomId,
    createdAt: new Date(),
  };
};
