export const generateData = () => {
  const items = []
  for (let i = 0; i < 36; i++) {
    const id = Math.floor(Math.random() * 1000)
    const mediaId = Math.random().toString(36).substring(2, 15)
    items.push({
      id,
      mediaId,
      // type: 'YOUTUBE',
      // title:
      //   '財經英文 08. Advanced Vocabulary for Financial News 8._Monetary Policy',
      // description:
      //   '財經英文 8. Advanced Vocabulary for Financial News 8._Monetary Policy',
      // descriptionHtml:
      //   '財經英文 8. Advanced Vocabulary for Financial News 8._Monetary Policy',
      // topic: '財經英文',
      // ebook:
      //   'https://dev.engsight-lab.com/api/upload/ebook/yiszScimzbVbTD9qlmq4jaA9mhFsZ9shz0LJjHGe.pptx',
      // enabled: 'Yes',
      // createdAt: '2023-02-22 15:03:51',
      // updatedAt: '2023-02-25 09:23:40',
    })
  }
  return items
}
