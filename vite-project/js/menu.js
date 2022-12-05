const stuff = [
  {
    name: "Thing 1",
    price: "$0.50",
    image:
      "https://www.google.com/imgres?imgurl=http%3A%2F%2Fclipart-library.com%2Fimages%2F6Tpozaqnc.png&imgrefurl=http%3A%2F%2Fclipart-library.com%2Ffree%2Fthing-1-png.html&tbnid=X5yMdTJwGGj48M&vet=12ahUKEwjUivHyguP7AhUio3IEHfO2AJQQMygIegUIARDvAQ..i&docid=C9QCvikjWsl7gM&w=1008&h=1450&q=thing%201&ved=2ahUKEwjUivHyguP7AhUio3IEHfO2AJQQMygIegUIARDvAQ",
    cheap: true,
    popular: false,
    inStock: true,
  },
  {
    name: "Thing 2",
    price: "$0.75",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Ftoppng.com%2Fuploads%2Fpreview%2Fdr-seuss-cat-in-the-hat-clip-thing-1-and-thing-2-svg-file-11551431232rcyu3hqh5g.png&imgrefurl=https%3A%2F%2Ftoppng.com%2Ffree-image%2Fdr-seuss-cat-in-the-hat-clip-thing-1-and-thing-2-svg-file-PNG-free-PNG-Images_102684&tbnid=-bd2rR7WdYPlTM&vet=12ahUKEwiprYyhg-P7AhVCiXIEHWVlCvoQMygyegQIARBf..i&docid=znbmw4Xw3dJxlM&w=840&h=859&q=thing%202&ved=2ahUKEwiprYyhg-P7AhVCiXIEHWVlCvoQMygyegQIARBf",
    cheap: true,
    popular: true,
    inStock: false,
  },
  {
    name: "Grinch",
    price: "$899.99",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F7%2F73%2FThe_Grinch.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGrinch&tbnid=9xkxcoOcCC9M2M&vet=12ahUKEwi47-m6g-P7AhVfrXIEHXdfBW4QMygAegUIARDZAQ..i&docid=52GlVPxBgCk_XM&w=191&h=293&itg=1&q=grinch&hl=en-US&ved=2ahUKEwi47-m6g-P7AhVfrXIEHXdfBW4QMygAegUIARDZAQ",
    cheap: false,
    popular: true,
    inStock: false,
  },
  {
    name: "The Cat in the Hat",
    price: "$450.00",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fnon-aliencreatures%2Fimages%2Fe%2Fec%2FCatInTheHat.png%2Frevision%2Flatest%3Fcb%3D20150910030521&imgrefurl=https%3A%2F%2Fnon-aliencreatures.fandom.com%2Fwiki%2FThe_Cat_in_the_Hat&tbnid=b95aqAKLkFmmpM&vet=12ahUKEwjGyKvJg-P7AhXju3IEHemWD3EQMygBegUIARDYAQ..i&docid=WEOqR-vofrNmXM&w=418&h=712&q=the%20cat%20in%20the%20hat&hl=en-US&ved=2ahUKEwjGyKvJg-P7AhXju3IEHemWD3EQMygBegUIARDYAQ",
    cheap: false,
    popular: true,
    inStock: true,
  },
  {
    name: "The Lorax",
    price: "$270.00",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fp__%2Fimages%2Fe%2Fea%2FLorax_render.png%2Frevision%2Flatest%3Fcb%3D20220404083457%26path-prefix%3Dprotagonist&imgrefurl=https%3A%2F%2Fhero.fandom.com%2Fwiki%2FThe_Lorax&tbnid=Qic9KMeph8s-bM&vet=12ahUKEwitlIPeg-P7AhXYvXIEHaqnDRkQMygCegUIARDcAQ..i&docid=pu1sIV3wGT6PAM&w=1352&h=1904&q=the%20lorax&hl=en-US&ved=2ahUKEwitlIPeg-P7AhXYvXIEHaqnDRkQMygCegUIARDcAQ",
    cheap: false,
    popular: false,
    inStock: true,
  },
  {
    name: "Blue Fish",
    price: "$1.00",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.seussville.com%2Fapp%2Fuploads%2F2019%2F11%2Fcharacter-Blue-Fish.png&imgrefurl=https%3A%2F%2Fwww.seussville.com%2Fcharacters%2Fblue-fish%2F&tbnid=-6YTuHrx_fNuHM&vet=12ahUKEwjvy9Pxg-P7AhXVghUDHUeUAkoQMygAegUIARDMAQ..i&docid=q7bdrqVrWmmIGM&w=512&h=512&q=blue%20fish%20dr%20seuss&hl=en-US&ved=2ahUKEwjvy9Pxg-P7AhXVghUDHUeUAkoQMygAegUIARDMAQ",
    cheap: true,
    popular: false,
    inStock: true,
  },
  {
    name: "Horton",
    price: "$5.00",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.seussville.com%2Fapp%2Fuploads%2F2019%2F11%2Fcharacter-Horton.png&imgrefurl=https%3A%2F%2Fwww.seussville.com%2Fcharacters%2Fhorton%2F&tbnid=G0wMl7pMbuXCcM&vet=12ahUKEwjP5rmBhOP7AhWju3IEHRRoAXAQMygAegUIARDVAQ..i&docid=UDffmsqalmrSXM&w=512&h=512&q=horton%20dr%20seuss&hl=en-US&ved=2ahUKEwjP5rmBhOP7AhWju3IEHRRoAXAQMygAegUIARDVAQ",
    cheap: true,
    popular: true,
    inStock: true,
  },
  {
    name: "Sam-I-Am",
    price: "$0.69",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fseuss%2Fimages%2F9%2F94%2FSam.png%2Frevision%2Flatest%3Fcb%3D20201210095922&imgrefurl=https%3A%2F%2Fseuss.fandom.com%2Fwiki%2FSam-I-Am&tbnid=_f_hobbf6zBAsM&vet=12ahUKEwiqxKKShOP7AhVhs3IEHUlECwMQMygAegUIARDKAQ..i&docid=2KPNwHnuFFV52M&w=512&h=512&q=sam%20i%20am%20dr%20seuss&hl=en-US&ved=2ahUKEwiqxKKShOP7AhVhs3IEHUlECwMQMygAegUIARDKAQ",
    cheap: true,
    popular: false,
    inStock: false,
  },
  {
    name: "Thidwick",
    price: "$0.02",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fseuss%2Fimages%2Fd%2Fd6%2FThidwick.PNG%2Frevision%2Flatest%3Fcb%3D20201210101439&imgrefurl=https%3A%2F%2Fseuss.fandom.com%2Fwiki%2FThidwick&tbnid=wqSv-o2laVGIqM&vet=12ahUKEwiN9uGdhOP7AhVPhXIEHfTjCU4QMygAegQIARA4..i&docid=kMbMIsqSQKHX1M&w=256&h=256&q=thidwick%20dr%20seuss&hl=en-US&ved=2ahUKEwiN9uGdhOP7AhVPhXIEHfTjCU4QMygAegQIARA4",
    cheap: true,
    popular: false,
    inStock: true,
  },
];

export { stuff };
