/**
 * マークダウンからURLを抽出する
 * @param markdown
 * @returns
 */
export const getFloatingUrls = (markdown: string): string[] => {
  const regFloatUrl =
    /(?<!\()https?:\/\/[-_.!~*\\'()a-zA-Z0-9;\\/?:\\@&=+\\$,%#]+/g
  const floatUrls = markdown.match(regFloatUrl)

  return floatUrls ?? []
}
