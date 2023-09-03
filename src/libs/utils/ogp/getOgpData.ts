import ogs from 'open-graph-scraper'
import type { OgObject } from 'open-graph-scraper/dist/lib/types'

export type PartialOgObject = Partial<OgObject>

/**
 * URLからOGPデータを取得する
 * @param url
 * @returns
 */
export const getOgpData = async (url: string): Promise<PartialOgObject> => {
  const options = { url, onlyGetOpenGraphInfo: true }
  const { result } = await ogs(options)
  const { ogTitle, ogSiteName, ogUrl, ogDescription, ogImage } = result

  return {
    ogTitle,
    ogSiteName,
    ogUrl,
    ogDescription,
    ogImage,
  }
}
