const PartnersData = [
   {
      id: 1,
      imgSrc:
         'https://s3-alpha-sig.figma.com/img/9d73/f7b4/6aa0ce392fa6a8c1d7eae6f263c71c8d?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W193L8OVykS3wqe6vc0uzNlItMn31GftX42sDQU1hh8ySys9GqvgEZf5EG-E6RS9sWh9u28izl1dgfO0gUmu3D188RCkOSOXElPP5UgygcEJDTEZlXzoBhHdAZ8pBA3V35qOPp51V0DUoySaQExJBYzwDkotnrM-zJP6fgrAz8bMrAS-JMol1clQJwERoYVBXBig6fg-RwxmB~35UJbhVN3eaQXNdw01ZNGtoeRroJfN-3SpAX3zFhYv2slKrS2-uHQgVDwio7urRkrHcDqUqEQxGK~TRUOYzwxApBslcgWiFL1IWqsnnrDyxICBCUR708meT6pS0nPkhCqsqOUWTA__',
      name: 'Rodonit',
   },
   {
      id: 2,
      imgSrc:
         'https://s3-alpha-sig.figma.com/img/9049/f8d9/77cb883f81c81b63e28dedbe80a7f419?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JvG1vBeAewczNLYW8ZcEyeuD9xYNAhk6tzqXU3zJDHjA7p8cSXqom063dQU6ikHFcA77ofcVMaA8ZS~1AjBWzyEpCYVQ8xK-DjxboZN4EFNOg1JYBy~qcDIbRaCA55S6I6BbSFJpPMhUDs43n8msGSuN8KVQCdhje2MBsWbz8v0zzcDw65mczO0pXgZCJrcSy1BmgGSIjGTJCtLvUpZp8RPIeplrIKLSZl2sP0r7lF8BF-vp7NTnkYMB5HuAasyZHNopoQYusGP3T~Tt6caJCEkmc2LMv6blHVCxms1x3lrCzpw9GlqMyC4x85kBFSSRaQQGwEHfgKS6oKFN6aor2w__',
      name: 'BASF',
   },
   {
      id: 3,
      imgSrc:
         'https://s3-alpha-sig.figma.com/img/dd3d/31d8/bfe3f7fc173d2ac27246d1d287ad578a?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nap7qGTYbp8KhEIh8UAy--LXZDxc77rE83X6HMcYDPk2wB~uXftsin5kGHa0-Ej6FGt66KIVPeW09FXbceBwr4Zl3qDgGS3-1bEy-JNULNP4lRzkTTccbZ3eZoRqQ~qT9wMBv2pIaIdj421yGK2sBDEswyPGPge2IT8puyb~wg67SLtxjo622cbX3oRYRcXHUfDRzohn5nahz6tM6yvo47pHiGj8iwJj2abBed-zEap1xsLMP3EFtmq3EchaNpxfWv0L~FHpsKm04dF98SvJnZ788IyUoHYH-evfRtc8FeNMBUAQcd8xHF5zIX85YhqVFqOXYL-yl1dXtt6T-oDwSQ__',
      name: 'Lidea',
   },
   {
      id: 4,
      imgSrc:
         'https://s3-alpha-sig.figma.com/img/f441/aacf/32d36a565b45931e658c0d9bc67e1de6?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JMDUhtVGtUPvbs900rIQ81mFNVSd~LI7eqS3N7pWQJs9XKM3uTyzYYKuv-3wT6oVWdbEyHL3S7~Rh1qNYdwDwSLCEguEnuOtVLm0UX~uWQqf3cwaebfcmRqqYxazcurwsQe3JsEZpfOH5Puy9SDbhace2c4nWst07ICku130FpS6E8T2cB4Of8o4pX4-VmuDKCTYL4uLBMD71Mv4J2p7e9DJcD8~S6qPt0RoLAeLUCLa3pqHHe8R-dUmfQgvPdPWcYZahsDkZALLo30RM7EZgLJiWtFQDkgHUD5M2oE-CVUjY56RSejFISn6BJfI-3q6Uv0C9NyVhsIGdAbmaWv~VQ__',
      name: 'Adama',
   },
   {
      id: 5,
      imgSrc:
         'https://s3-alpha-sig.figma.com/img/4b49/50f2/e7857c6c4aa1dcc3f6ecb46df5b808ed?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MTvPWv~a2zq-YmNQcq-FP0uftOKS~Qq5UHaDe7FlYY89WrxayYSE4ZOZjxlwTGA5~lV0yMu4IqvOA22Zru2XN4FmwsHwQX0df6xayojj40Vvjn60fXJP2rq175Gl8JjVGBk-eK9bCURTgvZnSZWp82WRIzWivPOpksL1nTLjAiF~hGdHUQq5eSQKwTeyNEnPcsy6V7ex8pOFLAL9SKCAFy4z3CoOXnGXvo-Ygk~o2B9nSZoZlnPuFUNjAuFOi60X6WUBpZRqGxentIzMLRSnsbQ~RTLc8z3lfMDIi8-CgLnf34riMKJEC71xzXor59yb-ki3RL0pi33b1cwE55r4zQ__',
      name: 'Dekalb',
   },
   {
      id: 6,
      imgSrc:
         'https://s3-alpha-sig.figma.com/img/7fa6/059f/dd4c788f5ebcfc0f9119ab6539a055b0?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VbwaZ9u5OGT2lD0XpEcORAYE4gNQleSPoj3LIQs3-7xGAY8jOswYRg2UtrNQDYclrxoniHLLnFtvAKs8DwHZcBcqm71ZU3CgnadUGTrq~oVsMRJd9meJyCFmnzJUIctqyjATHMPqxKtlL-zcabSHzs2YmVe4nLlPafxlsnJCK4V3g9M7NNTY2Z8A85vxvDAyu0R03e5AJIayo36pU4YZVggSEb5YrIZIwgH-nnG0WLS5PriCmH-RL5JDkIIgEJ2maPFZiXWJqMFDaSvjwdwkLUeB0F82HraaOUVl0BIjW5uCc5JrfbcOD0VaE1GgN-jxb7T7IvvTiqHAl8XLTyt6rQ__',
      name: 'JG',
   },
]
export default PartnersData
