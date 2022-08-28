document.getElementById("allNavbarIten").style.fill = "#e31b46";

let inputValFromHomePage;
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  inputValFromHomePage = document.getElementById("searchInputOfView").value;

  // console.log(inputValFromHomePage);
  localStorage.setItem("searchValue", inputValFromHomePage);
  document.getElementById("searchInputOfView").value =
    localStorage.getItem("searchValue");
  displayData();
});

displayData();
const myArray = [
  {
    titel: "Masai School - The Coding School that cares about you ...",
    description:
      "Become a Software Developer in 7 months with Masai School. Pay Rs. 0 until you get a job of Rs. 5 LPA or more.Attend live coding classes from anywhere in ...",
    subDescription: "Full Stack Web Development",
    wesiteUrl: "https://www.masaischool.com",
    urlLinkPath: "https://www.masaischool.com",
    keywords: "",
    id: 1,
  },
  {
    titel: "Get Personalized Handmade Gifts by Stoned Santa",
    description:
      "Our Art Experts will help you curate the 'Just Perfect' gift for you and your loved ones by speaking with you and understanding your requirements.",
    subDescription:
      "Stoned Santa is an IIM-Bangalore incubated art startup where ...",
    wesiteUrl: "https://www.stonedsanta.in",
    urlLinkPath: "https://www.stonedsanta.in",
    keywords: "",
    id: 2,
  },
  {
    titel: "Google",
    description:
      "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking ...",
    subDescription:
      "Search for terms in the whole page, page title, or web address, or ...",
    wesiteUrl: "https://www.google.co.in",
    urlLinkPath: "https://www.google.co.in",
    keywords: "",
    id: 3,
  },
  {
    titel: "Yahoo India",
    description:
      "As of August 26th, 2021 Yahoo India will no longer be publishing content. Your Yahoo Account, Mail and Search experiences will not be affected in any way ...",
    subDescription:
      "Best-in-class Yahoo Mail, breaking local, national and global news ...",
    wesiteUrl: "https://in.yahoo.com",
    urlLinkPath: "https://in.yahoo.com",
    keywords: "",
    id: 4,
  },
  {
    titel: "Log into Facebook",
    description:
      "Log into Facebook to start sharing and connecting with your friends, family, ...",
    subDescription:
      "Internet company         Community Values We believe people can do more together than alone and that ...",
    wesiteUrl: "https://www.facebook.com",
    urlLinkPath: "https://www.facebook.com › login",
    keywords: "",
    id: 5,
  },
  {
    titel: "YouTube",
    description:
      " Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.",
    subDescription: "Share your videos with friends, family, and the world.",
    wesiteUrl: "https://www.youtube.com",
    urlLinkPath: "https://www.youtube.com",
    keywords: "",
    id: 6,
  },
  {
    titel: "Wikipedia",
    description:
      "Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikimedia Foundation.",
    subDescription: "Thor: Love and Thunder ·India · Elon Musk · Nope (film)",
    wesiteUrl: "https://www.wikipedia.org",
    urlLinkPath: "https://www.wikipedia.org",
    keywords: "",
    id: 7,
  },
  {
    titel: "National Informatics Centre | Govt. of India",
    description:
      "NIC endeavours to cater to ICT needs at all levels of governance for making last mile delivery of Government services ·",
    subDescription:
      "Data Centre - Nicnet - National Cloud - Webcast - NKN - ..",
    wesiteUrl: "https://www.nic.in",
    urlLinkPath: "https://www.nic.in",
    keywords: "",
    id: 8,
  },
  {
    titel: "Ask.com - What's Your Question?",
    description:
      "Answers you want. Content for days. What more could you Ask for? ... What more can you ask for? Sign up for the Ask newsletter. Email Address.",
    subDescription: "",
    wesiteUrl: "https://www.ask.com",
    urlLinkPath: "https://www.ask.com",
    keywords: "",
    id: 9,
  },
  {
    titel: "IRCTC Next Generation eTicketing System",
    description:
      "IRCTC Next Generation eTicketing System. ... New IRCTC launches ticket booking on ASK DISHA 2.0 Click here. Indian Railways have started provisioning of ...",
    subDescription:
      "One step login to existing users; Search and Book train tickets ...",
    wesiteUrl: "https://www.irctc.co.in",
    urlLinkPath: "https://www.irctc.co.in",
    keywords: "",
    id: 10,
  },
  {
    titel: "Indiatimes.com: Trending stories on Indian Lifestyle, Culture ...",
    description:
      "Indiatimes.com brings you the news, articles, stories and videos on entertainment, latest lifestyle, culture and new technologies emerging worldwide.",
    subDescription:
      "Get the latest news from India, national news, business news ...",
    wesiteUrl: "https://www.indiatimes.com",
    urlLinkPath: "https://www.indiatimes.com",
    keywords: "",
    id: 11,
  },
  {
    titel: "Naukri.com: Jobs - Recruitment - Job Search - Employment ...",
    description:
      "Connect with 20000+ employers. Apply to millions of job opportunities across top companies, industries and locations on India's No.1 jo site. Apply online.",
    subDescription:
      "New to Naukri? checkOne click apply using naukri profile ...",
    wesiteUrl: "https://www.naukri.com",
    urlLinkPath: "https://www.naukri.com",
    keywords: "",
    id: 12,
  },
  {
    titel: "Bing",
    description:
      "Bing helps you turn information into action, making it faster and easier to go from searching to doing.",
    subDescription:
      "Bing helps you turn information into action, making it faster and ...",
    wesiteUrl: "https://www.bing.com",
    urlLinkPath: "https://www.bing.com",
    keywords: "",
    id: 13,
  },
  {
    titel: "Internet for people, not profit — Mozilla",
    description:
      "Mozilla is the not-for-profit behind the lightning fast Firefox browser. We put people over profit to give everyone more power online.",
    subDescription:
      "Get Firefox, a free web browser backed by Mozilla, a non-profit ...",
    wesiteUrl: "https://www.mozilla.org",
    urlLinkPath: "https://www.mozilla.org › en-US",
    keywords: "",
    id: 14,
  },
  {
    titel: "Free Classified Ads in India, Post Ads Online | Quikr India",
    description:
      "Widely known as India's no. 1 online classifieds platform, Quikr is all about you. Our aim is to empower every person in the country to independently connect ...",
    subDescription:
      "QuikrJobs offers the largest platform for job seekers. You ...",
    wesiteUrl: "https://www.quikr.com",
    urlLinkPath: "https://www.quikr.com",
    keywords: "",
    id: 15,
  },
  {
    titel: "WordPress.com: Fast, Secure Managed WordPress Hosting",
    description:
      "Create a free website or build a blog with ease on WordPress.com. Dozens of free, customizable, mobile-ready designs and themes. Free hosting and support.",
    subDescription:
      "If you continue with Google or Apple and don't already have a ...",
    wesiteUrl: "https://wordpress.com",
    urlLinkPath: "https://wordpress.com",
    keywords: "",
    id: 16,
  },
  {
    titel: "Microsoft – Cloud, Computers, Apps & Gaming",
    description:
      "Explore Microsoft products and services for your home or business. Shop Surface, Microsoft 365, Xbox, Windows, Azure and more.",
    subDescription:
      "Hear from Microsoft employees. Lauren, Senior Software ...",
    wesiteUrl: "https://www.microsoft.com",
    urlLinkPath: "https://www.microsoft.com › en-in",
    keywords: "",
    id: 17,
  },
  {
    titel: "MakeMyTrip - #1 Travel Website 50% OFF on Hotels, Flights ...",
    description:
      "Use coupon code MMTDEAL to get Upto 5000 Off on Domestic flight booking Find best deals at MakeMyTrip for ✓ Flight Tickets, Hotels, Holiday Packages, ...",
    subDescription:
      "International Flights - Domestic Flight Offers - Delhi to Goa Flights",
    wesiteUrl: "https://www.makemytrip.com",
    urlLinkPath: "https://www.makemytrip.com",
    keywords: "",
    id: 18,
  },
  {
    titel: "Log in to Twitter",
    description:
      "Log in to Twitter to see the latest. Join the conversation, follow accounts, see your Home Timeline, and catch up on Tweets from the people you know.",
    subDescription: "",
    wesiteUrl: "https://twitter.com",
    urlLinkPath: "https://twitter.com › login",
    keywords: "",
    id: 19,
  },
  {
    titel: "Bharat Sanchar Nigam Limited",
    description:
      "BSNL offers Spaces for Rent List of vacant spaces. Amazing Project Mobile Explore various Offers for Mobile. Amazing Project Broadband Explore various offers ...",
    subDescription:
      "BSNL Selfcare · Mobile Services · Broadband Plans · Rajasthan",
    wesiteUrl: "https://www.bsnl.co.in",
    urlLinkPath: "https://www.bsnl.co.in",
    keywords: "",
    id: 20,
  },
  {
    titel: "LinkedIn India: Log In or Sign Up",
    description:
      "750 million+ members | Manage your professional identity. Build and engage with your professional network. Access knowledge, insights and opportunities.",
    subDescription:
      "Job Search · 7,000+ Human Resources... · 55,000+ Finance jobs in India...",
    wesiteUrl: "https://in.linkedin.com",
    urlLinkPath: "https://in.linkedin.com",
    keywords: "",
    id: 21,
  },
  {
    titel: "BillDesk",
    description:
      "BillDesk is a leading BBPOU in the Bharat Bill Payment System (BBPS). Know More. Recurring Payment Solutions. Collect Payments. Always. BillDesk Recurring ...",
    subDescription: "Online Electricity Bill Payment ",
    wesiteUrl: "https://www.billdesk.com",
    urlLinkPath: "https://www.billdesk.com",
    keywords: "",
    id: 22,
  },
  {
    titel: "Yatra.com: Flight, Cheap Air Tickets , Hotels, Holiday, Trains ...",
    description:
      "On Yatra.com, you can tailor your trip from end-to-end by scouring suitable flights and making your flight booking before proceeding with your hotel ...",
    subDescription:
      "Yatra gives you the flexibility of safeguarding your international ...",
    wesiteUrl: "https://www.yatra.com",
    urlLinkPath: "https://www.yatra.com",
    keywords: "",
    id: 23,
  },
  {
    titel:
      "OLX - Free classifieds in India, Buy and Sell for free anywhere ...",
    description:
      "OLX has 1000's ads available in India of goods for sale from cars, furniture, electronics to jobs and services listings. Buy or sell something today!",
    subDescription: "",
    wesiteUrl: "https://www.olx.in",
    urlLinkPath: "https://www.olx.in",
    keywords: "",
    id: 24,
  },
];
async function displayData() {
  try {
    let val = localStorage.getItem("searchValue");
    let res = await fetch(
      `https://gomasai.herokuapp.com/gomasai?q=${val}&_page=${1}&_limit=${15}`
    );
    let data = await res.json();
    document.getElementById("showSearchDataSection").innerHTML = `
    <div id="searchItemsList"></div>
    `;

    if (data.length < 15) {
      let newLangth = 15 - data.length;
      for (let i = 0; i < newLangth; i++) {
        data.push(myArray[i]);
      }
      console.log("first");
    }
    console.log(data);
    console.log(myArray);
    data.forEach((element) => {
      let div = document.createElement("div");
      div.innerHTML = `
      <div>
          <a href="${element.wesiteUrl}" target="_blank" id="searchUrl">${
        element.urlLinkPath
      }</a>
          <a href="${element.wesiteUrl}" target="_blank" id="searchTitel">${
        element.titel
      }</a>
          <p id="searchDescription">${element.description.slice(0, 150)}...</p>
          <p id="searchDescription">${element.subDescription.slice(0, 150)}</p>
      </div>
      `;

      document.getElementById("searchItemsList").append(div);
    });
  } catch (error) {
    console.log(error);
  }
}
