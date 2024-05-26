import { v4 as uuidv4 } from 'uuid';
import tinycolor from 'tinycolor2';

export const generateUID = () => {
  return uuidv4();
};

export const darkenColor = (color, percent) => {
  const originalColor = tinycolor(color);
  const darkenedColor = originalColor.darken(percent).toString();
  return darkenedColor;
};

export const handleShare = async () => {
  try {
    if (navigator.share) {
      await navigator.share({
        title: 'Memoria',
        text: 'Memoria Game',
        url: 'https://matchingcolorssc.netlify.app/',
      });
      console.log('Successfully shared.');
    } else {
      console.log('Web Share API not supported in this browser.');
    }
  } catch (error) {
    console.error('Error sharing:', error);
  }
};
