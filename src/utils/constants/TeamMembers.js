const teamMembersData = [
   {
      id: 1,
      img: 'https://s3-alpha-sig.figma.com/img/e431/c6c5/8c8cee3907f2193e46f6be57503310c4?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gg84bTHTxT4J8ChHsrlek1pwAtr3Fcn-IbE4hhYeE1kAzscCifXJ~lvS9feccqOEeF1upHEr-nU4dx4VY7LjE~l-5HCFcQ5m1bnpUXBEGam0M9vx~MFVFCrXXddWImCUe1BVv0i1wVec1m9m9ClxxlKPmWZJxQUH1hW14r8SgOUo0XDiqTnxZz9kWqmtmheTgHcCZfymcC02MYVecbAn9-Tqrk1nK3ups6EYikIuC4x8lDlYwiJsPEimpfWVUKtG4o5HG7LDKl~5oYmAyQpOtUFVQ~0~uPrf-ZJ4gaVEV1gbym-iZEXUtyXmLwycLJI60eRULychlF8br5AOj2bRGw__',
      name: 'Alice Archie',
      role: 'Founder Bilingual',
   },
   {
      id: 2,
      img: 'https://s3-alpha-sig.figma.com/img/cf8e/1144/17c61a929a6c94cb6e1b6e5964456af8?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pqvYxoRqN09oNGvbY3t7L3oMLAfFv9IQpTQGywrDgZMEUe4ApjVYUUNiqAKJKKH7eq1bZ7NvkFW3b1qqjlUv6b0agnGQRHEgto~N70cS-OG8rKy49p-U20DCk07z8oyr7DAJAAJnTQd6WhHSvzVv40ar0q3Nwsjs8csEGA40sA1wetrTA~HbHoK87CEXVj1gu1N-P3rkb4-hHTrCCsHjjqE7pf08AtRLyDxP3LBZymPyShDDj91JIm37XQNXK5hIInfAH2YP1ZejivuF~tbU1po~yh4tdLw~ZEYatBo83HFaZjtlAaKgf5LCgGglQx4lPETWf1mizFbfTLNj~fLNyQ__',
      name: 'Mia George',
      role: 'Marketer',
      customStyle: {
         borderRadius: '2.5rem 0rem',
      },
   },
   {
      id: 3,
      img: 'https://s3-alpha-sig.figma.com/img/d4db/dea1/cd217c61c8fb96cb65c09a497dd4aa41?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dWRBq94~8dEvZ0J~szovkaIt3PSIp9p2z-OXUNEijy0AQr5Zv2k650GtehgjigGajfn6tPjo2rOvqunhQp9DzzxjkL4rk0ZH0PfNaN32RJCWfzdw-oUg51ZTNsr0r3xwCV7UYhW5sM4hIaNvedEYI0Pla83L-q3Bv2J9KC~Y8ba6P-B1tf7uXnOP8FXL2MvZvKX0x4sCcCUc6uI4tt7Ox~Wo9GnFqF8MJZqhGPMGpadI~ho6Kvf27HFkbEuKKrApWGQirtUxNfKfUyqs82Ohrz0Uci~ahzptBSdMfKc-flnmccJ5INxIUoL2yUbpEFt2TgsMUrLtY9YQMau7VEw93A__',
      name: 'Oscar Ryan',
      role: 'Developer',
      customStyle: {
         borderRadius: '0rem 0rem 2.5rem 0rem',
      },
   },
   {
      id: 4,
      img: 'https://s3-alpha-sig.figma.com/img/16df/746d/c52957750e38f97873578bae6b3bbc89?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PMWyLxeyur3~RpPANv45I~oZBBaWoI644oQqocuuWnODOg8o3ZXFqmnu~4t~a5eUB09dZ7ZuLmg~05ByieHkvWHVwMkhJIfkybbiKT9xmTxwopK46rzfx3YP38cZHeH0DbxtK6AHltnoSlB98jt5koffs9plrXgiM2ICc~sQu-P48Jpd1UdybVPSWsqRuBaCg72C7UpiTi7x3se2S2FkgyaT4AIc080zB6F6k-GNuOGyXr4ktWz0YJyHZYOjWarRGhJwbfetbFvtRlkNVQX5TzqZicQoJMXlTHSpjBNg8YbVYOWJTdOSUAcQ7-AsoMDjGNU4i~2-dtW30kwhooEK2w__',
      name: 'Jack William',
      role: 'UX/UI Designer',
      customStyle: {
         borderRadius: '2.5rem 0rem 0rem 0rem',
      },
   },
   {
      id: 5,
      img: 'https://s3-alpha-sig.figma.com/img/3829/6286/648fea488eb1a10f0ef26dc96c61da0f?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C61OD41Ba-1opDcpndowDffYiSwpvjjlOinVPyYsgQ8KiuoEX4ffAesSTTzNJNDpEsRguctWIHf7iZXxSNIplIV10osJNH-D-FlorReuc65leM6o2BkryWeBxjEILfAnn7eT3SHqUVpyO-kH7-6kJdUrkVT7NjYVXAQ5P7EvMuc~CD-4t8ksnCMUFt3DF-O0mwLLsxx~pI4D6AkvhV~7bNUEuBwGfU62ksUlFECuqVm~KImUWzEqGJB--MhxjYb~IvR8ntqGQd9OaHGo1dKDY4fSF6z-Vd-3s2EVNgP9~I77KbjZW3vUvSfZAdvU1NC6nQSdPWSZOe9bFVRcmAfMWg__',
      name: 'Rose Thomas',
      role: 'Chief Editor',
      customStyle: {
         borderRadius: '2.5rem 0rem',
      },
   },
   {
      id: 6,
      img: 'https://s3-alpha-sig.figma.com/img/30f5/97da/61c09707ca0a5bdbba669cc16464b701?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cAhBfmZ76ks8gqkQ0bXf5jM0-Z8acM7kyagSNntxTZ9i198ud9ISuvRLpgccHTnfqRVDj9Ypd5hA8NI4UE5tQ4rkllsYQCFuruz~ITD7-~9E4iSiJPB56ir1lnAJgZfh315Yz2~c4rOlN5e59xxK4TfCZQvbeYdpAvZaepHgcSnr~-UEqLOT9NZSbemJbPDJyH5ZrtW0PSNCH-zIxXR8yaRojdodDNag5noGXbOdLlAAmjJNIdlSTYCG8U~Iq1yv0-aVCxzKro2h6myREAGfvGDky4FFAZkMZDXRA-5ZdgkulLIIcTQeizty57fkXpxZIm-EmkNzWu9qfxmCh4ps7A__',
      name: 'Albert Stanley',
      role: 'Chief Editor',
      customStyle: {
         borderRadius: '0rem 2.5rem 0rem 0rem',
      },
   },
]
export default teamMembersData
