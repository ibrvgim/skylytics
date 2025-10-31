export function cutWords(sentence: string, length: number) {
  if (sentence.length <= length) return sentence;

  let trimmed = sentence.slice(0, length);
  const lastSpace = trimmed.lastIndexOf(' ');

  if (lastSpace > 0) {
    trimmed = trimmed.slice(0, lastSpace);
  }

  return trimmed + '...';
}
