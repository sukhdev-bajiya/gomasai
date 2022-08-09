let inputValFromHomePage;
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  inputValFromHomePage = document.getElementById("searchAnythingForm").value;

  console.log(inputValFromHomePage);

  document.getElementById("searchAnythingForm").value = "";
});

// fetch("https://jsonservermasai.herokuapp.com/brands", {
//   method: "POST",
//   body: JSON.stringify({
//     kind: "customsearch#search",
//     url: {
//       type: "application/json",
//       template:
//         "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
//     },
//     queries: {
//       request: [
//         {
//           title: "Google Custom Search - masai",
//           totalResults: "18100000",
//           searchTerms: "masai",
//           count: 10,
//           startIndex: 1,
//           inputEncoding: "utf8",
//           outputEncoding: "utf8",
//           safe: "off",
//           cx: "f445f901939ce4ad1",
//         },
//       ],
//       nextPage: [
//         {
//           title: "Google Custom Search - masai",
//           totalResults: "18100000",
//           searchTerms: "masai",
//           count: 10,
//           startIndex: 11,
//           inputEncoding: "utf8",
//           outputEncoding: "utf8",
//           safe: "off",
//           cx: "f445f901939ce4ad1",
//         },
//       ],
//     },
//     context: {
//       title: "gomasai",
//     },
//     searchInformation: {
//       searchTime: 0.52485,
//       formattedSearchTime: "0.52",
//       totalResults: "18100000",
//       formattedTotalResults: "18,100,000",
//     },
//     items: [
//       {
//         kind: "customsearch#result",
//         title: "Maasai people - Wikipedia",
//         htmlTitle: "Maasai people - Wikipedia",
//         link: "https://en.wikipedia.org/wiki/Maasai_people",
//         displayLink: "en.wikipedia.org",
//         snippet:
//           "The Maasai (/ˈmɑːsaɪ, mɑːˈsaɪ/) (Swahili: Wamasai) are a Nilotic ethnic group inhabiting northern, central and southern Kenya and northern Tanzania.",
//         htmlSnippet:
//           "The Maasai (/ˈmɑːsaɪ, mɑːˈsaɪ/) (Swahili: Wamasai) are a Nilotic ethnic group inhabiting northern, central and southern Kenya and northern Tanzania.",
//         cacheId: "Mr3Jt76sD9EJ",
//         formattedUrl: "https://en.wikipedia.org/wiki/Maasai_people",
//         htmlFormattedUrl: "https://en.wikipedia.org/wiki/Maasai_people",
//         pagemap: {
//           hcard: [
//             {
//               fn: "Maasai",
//             },
//           ],
//           cse_thumbnail: [
//             {
//               src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRB7CGfB1QQnXEoKkfkMLoQIyyNzJprca3smLQNcyZn084DIjJmxHhiBgua",
//               width: "260",
//               height: "194",
//             },
//           ],
//           metatags: [
//             {
//               referrer: "origin",
//               "og:image":
//                 "https://upload.wikimedia.org/wikipedia/commons/9/99/Maasai_tribe.jpg",
//               "theme-color": "#eaecf0",
//               "og:image:width": "1200",
//               "og:type": "website",
//               viewport:
//                 "width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=0.25, maximum-scale=5.0",
//               "og:title": "Maasai people - Wikipedia",
//               "og:image:height": "898",
//               "format-detection": "telephone=no",
//             },
//           ],
//           cse_image: [
//             {
//               src: "https://upload.wikimedia.org/wikipedia/commons/9/99/Maasai_tribe.jpg",
//             },
//           ],
//         },
//       },
//       {
//         kind: "customsearch#result",
//         title: "Masai | Official Brand Site",
//         htmlTitle: "\u003cb\u003eMasai\u003c/b\u003e | Official Brand Site",
//         link: "https://www.masai.net/",
//         displayLink: "www.masai.net",
//         snippet:
//           "Create style with fabulous colours, unique prints and gorgeous fabrics. See the wide selection in our website or at one of our many dealers.",
//         htmlSnippet:
//           "Create style with fabulous colours, unique prints and gorgeous fabrics. See the wide selection in our website or at one of our many dealers.",
//         cacheId: "JJ9Saio4QeoJ",
//         formattedUrl: "https://www.masai.net/",
//         htmlFormattedUrl: "https://www.\u003cb\u003emasai\u003c/b\u003e.net/",
//         pagemap: {
//           cse_thumbnail: [
//             {
//               src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTNYzmsNUNzORytEKjBBx7AroDPvNXWcB6Exj0xMUa8m4cejFNik3uBXcXj",
//               width: "321",
//               height: "157",
//             },
//           ],
//           metatags: [
//             {
//               "og:image":
//                 "/on/demandware.static/Sites-masai-Site/-/default/dw2f5cba4a/images/logo_social.png",
//               "og:type": "website",
//               "twitter:card": "summary",
//               "twitter:title": "Masai | Official Brand Site",
//               "og:site_name": "Masai",
//               "twitter:site": "@masaiclothingcompany",
//               viewport: "width=device-width, initial-scale=1",
//               "twitter:description":
//                 "Create style with fabulous colours, unique prints and gorgeous fabrics. See the wide selection in our website or at one of our many dealers.",
//               "og:title": "Masai | Official Brand Site",
//               "og:description":
//                 "Create style with fabulous colours, unique prints and gorgeous fabrics. See the wide selection in our website or at one of our many dealers.",
//             },
//           ],
//           cse_image: [
//             {
//               src: "https://www.masai.net/dw/image/v2/BBBQ_PRD/on/demandware.static/-/Library-Sites-Library--global/default/dw980f0faf/Frontpages/2022/WEEK31/UK_2048x1000px_03_50_OFF_ENG.jpg",
//             },
//           ],
//         },
//       },
//       {
//         kind: "customsearch#result",
//         title: "Masai - Wikipedia",
//         htmlTitle: "\u003cb\u003eMasai\u003c/b\u003e - Wikipedia",
//         link: "https://en.wikipedia.org/wiki/Masai",
//         displayLink: "en.wikipedia.org",
//         snippet:
//           "Masai · Masai, Johor, a town in Malaysia · Masai Plateau, a plateau in Kolhapur, Maharashtra, India · Maasai people, an ethnic group in East Africa · Maasai ...",
//         htmlSnippet:
//           "\u003cb\u003eMasai\u003c/b\u003e &middot; \u003cb\u003eMasai\u003c/b\u003e, Johor, a town in Malaysia &middot; \u003cb\u003eMasai\u003c/b\u003e Plateau, a plateau in Kolhapur, Maharashtra, India &middot; Maasai people, an ethnic group in East Africa &middot; Maasai&nbsp;...",
//         cacheId: "dLriEkwpCnoJ",
//         formattedUrl: "https://en.wikipedia.org/wiki/Masai",
//         htmlFormattedUrl:
//           "https://en.wikipedia.org/wiki/\u003cb\u003eMasai\u003c/b\u003e",
//         pagemap: {
//           metatags: [
//             {
//               referrer: "origin",
//               "theme-color": "#eaecf0",
//               "og:type": "website",
//               viewport:
//                 "width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=0.25, maximum-scale=5.0",
//               "og:title": "Masai - Wikipedia",
//               "format-detection": "telephone=no",
//             },
//           ],
//         },
//       },
//       {
//         kind: "customsearch#result",
//         title: "MASAI Mentors | uCollege - Illinois State",
//         htmlTitle:
//           "\u003cb\u003eMASAI\u003c/b\u003e Mentors | uCollege - Illinois State",
//         link: "https://universitycollege.illinoisstate.edu/communities/mentors/",
//         displayLink: "universitycollege.illinoisstate.edu",
//         snippet:
//           "MASAI Mentors. The Mentoring, Academics, Scholarship, and Achievement Initiative (MASAI) is a University College mentoring program that is focused on the ...",
//         htmlSnippet:
//           "\u003cb\u003eMASAI\u003c/b\u003e Mentors. The \u003cb\u003eMentoring, Academics, Scholarship, and Achievement Initiative\u003c/b\u003e (\u003cb\u003eMASAI\u003c/b\u003e) is a University College mentoring program that is focused on the&nbsp;...",
//         cacheId: "Nfd2fGKAixcJ",
//         formattedUrl:
//           "https://universitycollege.illinoisstate.edu/communities/mentors/",
//         htmlFormattedUrl:
//           "https://universitycollege.illinoisstate.edu/communities/mentors/",
//         pagemap: {
//           cse_thumbnail: [
//             {
//               src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVvfl5Fwz3faiCelSPEk_xTco6enR6kkJVeoBYtCaKr0YtzoEPt1BrEW4P",
//               width: "225",
//               height: "225",
//             },
//           ],
//           metatags: [
//             {
//               date: "2019-9-30",
//               "ou-minor-version": "0",
//               viewport: "width=device-width,initial-scale=1",
//               "ou-template": "v3.1",
//               lastmod: "2019-9-30",
//             },
//           ],
//           cse_image: [
//             {
//               src: "https://cdn.illinoisstate.edu/svg/logos/illinoisstate-seal.svg",
//             },
//           ],
//         },
//       },
//       {
//         kind: "customsearch#result",
//         title:
//           "Full Stack Web Development Course - Masai School - Masai School",
//         htmlTitle:
//           "Full Stack Web Development Course - Masai School - Masai School",
//         link: "https://www.masaischool.com/courses/full-stack-web-dev-full-time/",
//         displayLink: "www.masaischool.com",
//         snippet:
//           "Masai School's Full Stack Web and Android Development courses are available through different options. Learn about our curriculum, fees, placements & more.",
//         htmlSnippet:
//           "\u003cb\u003eMasai\u003c/b\u003e School&#39;s Full Stack Web and Android Development courses are available through different options. Learn about our curriculum, fees, placements &amp; more.",
//         cacheId: "HndRGb0Wh4oJ",
//         formattedUrl:
//           "https://www.masaischool.com/courses/full-stack-web-dev-full-time/",
//         htmlFormattedUrl:
//           "https://www.\u003cb\u003emasai\u003c/b\u003eschool.com/courses/full-stack-web-dev-full-time/",
//         pagemap: {
//           cse_thumbnail: [
//             {
//               src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRrSU0iqly_88ZTScfMtr-dU6BKBaoMUpyM38LZuWr6wGpMdZedFl2gEuU",
//               width: "311",
//               height: "162",
//             },
//           ],
//           metatags: [
//             {
//               "og:image":
//                 "https://masai-com.s3.ap-south-1.amazonaws.com/static/og/og/homepage.jpg",
//               "twitter:card": "summary_large_image",
//               "og:type": "website",
//               "og:image:alt": "Masai School",
//               "og:image:width": "800",
//               "og:site_name": "Masai School",
//               "og:title":
//                 "Masai School Courses - Full Stack Web & Android Development",
//               "og:image:height": "600",
//               "twitter:creator": "@masaischool",
//               "og:description":
//                 "Masai School's Full Stack Web and Android Development courses are available through different options. Learn about our curriculum, fees, placements & more.",
//               "next-head-count": "19",
//               "twitter:site": "@masaischool",
//               viewport: "width=device-width, initial-scale=1",
//               "og:locale": "en_IE",
//               "og:url": "https://masaischool.com/courses",
//             },
//           ],
//           cse_image: [
//             {
//               src: "https://masai-com.s3.ap-south-1.amazonaws.com/static/og/og/homepage.jpg",
//             },
//           ],
//         },
//       },
//       {
//         kind: "customsearch#result",
//         title:
//           "Louis Masai | Louis Masai - British painter, sculptor, illustrator and ...",
//         htmlTitle:
//           "Louis \u003cb\u003eMasai\u003c/b\u003e | Louis \u003cb\u003eMasai\u003c/b\u003e - British painter, sculptor, illustrator and ...",
//         link: "https://louismasai.com/",
//         displayLink: "louismasai.com",
//         snippet:
//           "Louis Masai · Home · About · Projects · The Art Of Beeing · Endangered 13 · Podcast · Gallery · Hive · Contact · instagram-social-network-logo-of-photo- ...",
//         htmlSnippet:
//           "Louis \u003cb\u003eMasai\u003c/b\u003e &middot; Home &middot; About &middot; Projects &middot; The Art Of Beeing &middot; Endangered 13 &middot; Podcast &middot; Gallery &middot; Hive &middot; Contact &middot; instagram-social-network-logo-of-photo-&nbsp;...",
//         cacheId: "ZIUDDBW6o8gJ",
//         formattedUrl: "https://louismasai.com/",
//         htmlFormattedUrl: "https://louis\u003cb\u003emasai\u003c/b\u003e.com/",
//         pagemap: {
//           cse_thumbnail: [
//             {
//               src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBaM5AalxTcFYqYrheQGS1-HhF_EwnofQ8k7sSb4FGDl_2lxcbYq2ImTo",
//               width: "247",
//               height: "204",
//             },
//           ],
//           metatags: [
//             {
//               viewport:
//                 "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
//             },
//           ],
//           cse_image: [
//             {
//               src: "https://louismasai.com/wp-content/uploads/2021/04/chicken-hp-image-3.jpg",
//             },
//           ],
//         },
//       },
//       {
//         kind: "customsearch#result",
//         title: "Masai Mara - Nature's epic safari destination in Kenya",
//         htmlTitle:
//           "\u003cb\u003eMasai\u003c/b\u003e Mara - Nature&#39;s epic safari destination in Kenya",
//         link: "https://www.masaimara.com/",
//         displayLink: "www.masaimara.com",
//         snippet:
//           "Experience a Masai Mara safari in Kenya - Golden hued plains teeming with wildlife and big cats, the Great Migration, and award-winning safari camps and ...",
//         htmlSnippet:
//           "Experience a \u003cb\u003eMasai\u003c/b\u003e Mara safari in Kenya - Golden hued plains teeming with wildlife and big cats, the Great Migration, and award-winning safari camps and&nbsp;...",
//         cacheId: "Zeqy_zmh2O8J",
//         formattedUrl: "https://www.masaimara.com/",
//         htmlFormattedUrl:
//           "https://www.\u003cb\u003emasai\u003c/b\u003emara.com/",
//         pagemap: {
//           cse_thumbnail: [
//             {
//               src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUl-lI7vxV702V77QZZk098w4QRb4ZFvft4jOtYZI3R7RLoNaB_HvNxsw",
//               width: "310",
//               height: "163",
//             },
//           ],
//           metatags: [
//             {
//               "og:image": "https://www.masaimara.com/assets/img/masai-mara.jpg",
//               copyright: "MasaiMara.com",
//               "og:type": "touristdestination",
//               "og:site_name": "MasaiMara.com",
//               viewport: "width=device-width, initial-scale=1, maximum-scale=1",
//               "og:title":
//                 "Masai Mara - Nature's epic safari destination in Kenya",
//               "og:url": "https://www.masaimara.com/index.php",
//               "og:description":
//                 "Experience a Masai Mara safari in Kenya - Golden hued plains teeming with wildlife and big cats, the Great Migration, and award-winning safari camps and lodges.",
//             },
//           ],
//           videoobject: [
//             {
//               duration: "T25M06S",
//               embedurl: "https://www.masaimara.com/index.php",
//               thumbnail:
//                 "https://www.masaimara.com/assets/img/masai-mara-safari.jpg",
//               uploaddate: "2020-06-02T08:00:00+08:00",
//               name: "Masai Mara video",
//               description:
//                 "The best way of understanding what the Masai Mara and its conservancies are about is by seeing some thrilling footage from the area. Watch this video to experience Kenya's Masai Mara, its splendour...",
//               thumbnailurl:
//                 "https://www.masaimara.com/assets/img/masai-mara-safari.jpg",
//             },
//           ],
//           cse_image: [
//             {
//               src: "https://www.masaimara.com/assets/img/masai-mara.jpg",
//             },
//           ],
//         },
//       },
//       {
//         kind: "customsearch#result",
//         title: "MTC Integration",
//         htmlTitle: "MTC Integration",
//         link: "http://www.masai-tech.com/",
//         displayLink: "www.masai-tech.com",
//         snippet:
//           "... 2018 MTC was awarded NIH CIO-SP3 IDIQ contract in the HUBZone category. See CIO-SP3 award information at http://www.masai-tech.com/MTCTeamCIO-SP3.htm ...",
//         htmlSnippet:
//           "... 2018 MTC was awarded NIH CIO-SP3 IDIQ contract in the HUBZone category. See CIO-SP3 award information at http://www.\u003cb\u003emasai\u003c/b\u003e-tech.com/MTCTeamCIO-SP3.htm&nbsp;...",
//         cacheId: "ObKGUhFZwO0J",
//         formattedUrl: "www.masai-tech.com/",
//         htmlFormattedUrl: "www.\u003cb\u003emasai\u003c/b\u003e-tech.com/",
//         pagemap: {
//           cse_thumbnail: [
//             {
//               src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRUTwa2u8N17F8H6prVSVMhmHScMtagqpDJ-lqSCsLNs2EQ8tXgbrqYFA",
//               width: "154",
//               height: "106",
//             },
//           ],
//           cse_image: [
//             {
//               src: "http://www.masai-tech.com/images/ISO2000Logo.jpg",
//             },
//           ],
//         },
//       },
//       {
//         kind: "customsearch#result",
//         title:
//           "Alex Masai - Men's Cross Country/Track - Hofstra University Athletics",
//         htmlTitle:
//           "Alex \u003cb\u003eMasai\u003c/b\u003e - Men&#39;s Cross Country/Track - Hofstra University Athletics",
//         link: "https://gohofstra.com/sports/mens-cross-country/roster/alex-masai/6992",
//         displayLink: "gohofstra.com",
//         snippet:
//           "Alex Masai - Third season with the Hofstra Cross Country and track teams in 2020-21...Joined the Pride in January, 2018 after the 2017 season.",
//         htmlSnippet:
//           "Alex \u003cb\u003eMasai\u003c/b\u003e - Third season with the Hofstra Cross Country and track teams in 2020-21...Joined the Pride in January, 2018 after the 2017 season.",
//         cacheId: "r3AbCO11bSQJ",
//         formattedUrl:
//           "https://gohofstra.com/sports/mens-cross-country/roster/alex-masai/6992",
//         htmlFormattedUrl:
//           "https://gohofstra.com/sports/mens-cross-country/roster/alex-\u003cb\u003emasai\u003c/b\u003e/6992",
//         pagemap: {
//           cse_thumbnail: [
//             {
//               src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTBPGMZCnpxqzKf8WGKWJxh1jazp8ZmnVP2IsaWflZdTwRoYKgkrtGVaPxj",
//               width: "197",
//               height: "256",
//             },
//           ],
//           metatags: [
//             {
//               "og:determiner": "the",
//               "og:image":
//                 "https://gohofstra.com/images/2020/10/15/21TFMasaiV.jpg",
//               "apple-itunes-app": "app-id=1589085984",
//               "theme-color": "#11589c",
//               "og:type": "profile",
//               "og:image:alt": "Alex Masai",
//               "twitter:card": "summary",
//               "og:site_name": "Hofstra University Athletics",
//               "og:title": "Alex Masai - Men's Cross Country/Track",
//               "og:description":
//                 "Alex Masai - Third season with the Hofstra Cross Country and track teams in 2020-21...Joined the Pride in January, 2018 after the 2017 season...Came to Hofstra from",
//               "profile:last_name": "Masai",
//               viewport:
//                 "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
//               "twitter:description":
//                 "Alex Masai - Third season with the Hofstra Cross Country and track teams in 2020-21...Joined the Pride",
//               "og:locale": "en_US",
//               "profile:first_name": "Alex",
//               "og:url":
//                 "https://gohofstra.com/sports/mens-cross-country/roster/alex-masai/6992",
//             },
//           ],
//           cse_image: [
//             {
//               src: "https://gohofstra.com/images/2020/10/15/21TFMasaiV.jpg",
//             },
//           ],
//         },
//       },
//       {
//         kind: "customsearch#result",
//         title: "MASAI | Davide Groppi",
//         htmlTitle: "\u003cb\u003eMASAI\u003c/b\u003e | Davide Groppi",
//         link: "https://www.davidegroppi.com/en/lamp/masai/",
//         displayLink: "www.davidegroppi.com",
//         snippet:
//           "Maurizio Mancini, 2015. Methacrylate - Metal. Floor and suspension lamp. Power supply with plug. Masai is a taut string of sudden light.",
//         htmlSnippet:
//           "Maurizio Mancini, 2015. Methacrylate - Metal. Floor and suspension lamp. Power supply with plug. \u003cb\u003eMasai\u003c/b\u003e is a taut string of sudden light.",
//         cacheId: "Gb-xwHXDZiQJ",
//         formattedUrl: "https://www.davidegroppi.com/en/lamp/masai/",
//         htmlFormattedUrl:
//           "https://www.davidegroppi.com/en/lamp/\u003cb\u003emasai\u003c/b\u003e/",
//         pagemap: {
//           cse_thumbnail: [
//             {
//               src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT2BIw_P8sHbtamuozJW_AxHEf2Sv67y1RHvVuWEKI5YMZvMEPzEv0VjbKp",
//               width: "189",
//               height: "267",
//             },
//           ],
//           metatags: [
//             {
//               "p:domain_verify": "05fca50b822ca1e5277d341dc07fe000",
//               "og:image":
//                 "https://www.davidegroppi.com/wordpress/wp-content/uploads/2015/09/masai_cop_website.jpg",
//               viewport: "width=device-width, initial-scale=1",
//               "msapplication-tileimage":
//                 "https://www.davidegroppi.com/wordpress/wp-content/uploads/2020/05/cropped-davidegroppi-favicon-1-270x270.jpg",
//               "facebook-domain-verification": "7maij66pcpt3cag3mrcq4d2o353h6a",
//             },
//           ],
//           cse_image: [
//             {
//               src: "https://www.davidegroppi.com/wordpress/wp-content/uploads/2015/09/masai_cop_website.jpg",
//             },
//           ],
//         },
//       },
//     ],
//   }),
//   headers: { "Content-Type": "application/json" },
// });
