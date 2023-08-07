/**
 * @param param0
 * @returns take（1ページあたりのデータ数), skip(データのオフセット), currentPage(現在のページ番号)
 */
export function getPaginationSrc({
  page = 0,
  take = 9,
}: {
  page?: number
  take?: number
}) {
  const currentPage = page || 1
  const skip = (currentPage - 1) * take
  return { take, skip, currentPage }
}

/**
 * 現在のページ番号と総ページ数に基づいてページネーション情報を生成する
 *
 * @param {number} current - 現在のページ番号。
 * @param {number} max - 総ページ数。
 * @returns {object|null} ページネーション情報のオブジェクト。無効な入力の場合は null。
 */
export function generatePagination(current: number, max: number) {
  if (!current || !max) {
    return null
  }
  const prev = current === 1 ? null : current - 1
  const next = current === max ? null : current + 1

  const items: (number | string)[] = [1]
  if (current === 1 && max === 1) {
    return { current, prev, next, items }
  }

  if (current > 4) items.push('…')
  const r = 2
  const r1 = current - r
  const r2 = current + r
  for (let i = r1 > 2 ? r1 : 2; i <= Math.min(max, r2); i++) items.push(i)
  if (r2 + 1 < max) items.push('…')
  if (r2 < max) items.push(max)
  return { current, prev, next, items }
}

export type PaginationProps = ReturnType<typeof generatePagination>

/**
 * 指定されたパラメータに基づいてページネーション情報とページ範囲情報を生成する。
 *
 * @param {object} options - ページネーションのオプション。
 * @param {number} options.take - 1ページあたりの表示アイテム数。
 * @param {number} options.skip - スキップするアイテム数。
 * @param {number} options.currentPage - 現在のページ番号。
 * @param {number} options.postCount - 総投稿数。
 * @returns {object} ページネーションと範囲情報を含むオブジェクト。
 */
export function getPagination({
  take,
  skip,
  currentPage,
  postCount,
}: {
  take: number
  skip: number
  currentPage: number
  postCount: number
}) {
  const totalPage = Math.ceil(postCount / take)
  const pagination = generatePagination(currentPage, totalPage)
  const start = skip + 1
  const end = pagination?.next === null ? postCount : take * currentPage
  return {
    pagination,
    paginationInfo: { start, end, postCount },
  }
}
