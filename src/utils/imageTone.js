export const TITLE_ON_LIGHT = '#363C53';
export const TITLE_ON_DARK = '#D9D9D9';

/** Sample the bottom-left area where image titles sit. */
export const isDarkImageCorner = (img, threshold = 145) => {
  try {
    if (!img?.naturalWidth || !img?.naturalHeight) return false;
    const canvas = document.createElement('canvas');
    const size = 48;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return false;

    const sampleW = Math.max(1, Math.floor(img.naturalWidth * 0.28));
    const sampleH = Math.max(1, Math.floor(img.naturalHeight * 0.22));
    const sx = 0;
    const sy = Math.max(0, img.naturalHeight - sampleH);
    ctx.drawImage(img, sx, sy, sampleW, sampleH, 0, 0, size, size);

    const { data } = ctx.getImageData(0, 0, size, size);
    let sum = 0;
    let count = 0;
    for (let i = 0; i < data.length; i += 4) {
      sum += 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
      count += 1;
    }
    return sum / count < threshold;
  } catch {
    return false;
  }
};

export const titleColorForImage = (img, forcedDark = false) => (
  forcedDark || isDarkImageCorner(img) ? TITLE_ON_DARK : TITLE_ON_LIGHT
);
