import React from "react";
import "./Result.css";
import activePage from "../../compenent/ActivePage/ActivePage";
import { useDispatch, useSelector } from "react-redux";
import { setLoaderspinner } from "../../Redux/action";
import loaderspinnergif from "../../assets/gif/loaderspinnergif.gif";

function Result() {
  const { loaderspinner, navbar_searchValur } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [resultData, setResultData] = React.useState([]);
  const [pageNumber, setpageNumber] = React.useState(1);

  React.useEffect(() => {
    activePage("result__page");
  }, []);

  React.useEffect(() => {
    if (navbar_searchValur !== "") {
      dispatch(setLoaderspinner(true));
      fetch(
        `https://gomasai.onrender.com/gomasai?q=${navbar_searchValur}&_page=${pageNumber}&_limit=20`
      )
        .then((res) => res.json())
        .then((res) => {
          return (setResultData(res), dispatch(setLoaderspinner(false)));
        })
        .catch((err) => console.log(err));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navbar_searchValur, pageNumber]);

  return (
    <div className="result__page">
      {loaderspinner ? (
        <span className="data__loader">
          <img className="data__loaderspinner" src={loaderspinnergif} alt="" />
        </span>
      ) : (
        <div className="result__resultLeftPart">
          {resultData.length > 0 ? (
            <div className="result__resultData">
              {resultData.map((data, index) => (
                <div key={index} className="result__resultItem">
                  <a href={data.wesiteUrl} target="_blank" rel="noreferrer">
                    {data.urlLinkPath}
                  </a>
                  <div className="result__resultItemInfo">
                    <a href={data.wesiteUrl} target="_blank" rel="noreferrer">
                      {data.titel}
                    </a>
                    <p>{data.description.slice(0, 200)}...</p>
                    <p>{data.subDescription.slice(0, 150)}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Result for "{navbar_searchValur}" not found</p>
          )}

          <div className="result__resultPagination">
            {/* PREVIOUS PAGE */}
            <button
              disabled={pageNumber <= 1 ? true : false}
              onClick={() => setpageNumber(pageNumber - 1)}
            >
              {" "}
              &#8612;
            </button>
            <span>{pageNumber}</span>
            {/* NEXT PAGE */}
            <button
              disabled={
                Math.floor(resultData.length / 20) < pageNumber ? true : false
              }
              onClick={() => setpageNumber(pageNumber + 1)}
            >
              {" "}
              &#8614;
            </button>
          </div>
        </div>
      )}
      <div className="result__resultRightPart">
        <div className="result__resultAdd1">
          <div className="result__resultAddImage">
            <img
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Downloader_1_c382f15ecf.png"
              alt=""
            />
          </div>
          <div className="result__resultAddInfo">
            <h1 className="result__resultAddInfoHeading">Masai 0NE</h1>
            <p className="result__resultAddInfoSubHeading">
              <span>{"< Learn. Practice. Grow >"}</span>
              <img
                src="https://www.pngmart.com/files/10/Dotted-Line-PNG-Picture.png"
                alt=""
              />
            </p>
            <p>
              <span>12TH PASS</span>
              <span>FINAL YEAR STUDENTS OR GRADUATES</span>
            </p>
            <p>
              <svg
                className="w-6 h-6"
                viewBox="0 0 22 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.0002 18L4.00024 14.2V8.2L0.000244141 6L11.0002 0L22.0002 6V14H20.0002V7.1L18.0002 8.2V14.2L11.0002 18ZM11.0002 9.7L17.8502 6L11.0002 2.3L4.15024 6L11.0002 9.7ZM11.0002 15.725L16.0002 13.025V9.25L11.0002 12L6.00024 9.25V13.025L11.0002 15.725Z"
                  fill="#B3B3B3"
                ></path>
              </svg>
              <span>Data Analytics | Software Development</span>
            </p>
            <p>
              <svg
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 4C18.58 4 19.05 4.2 19.42 4.59C19.8 5 20 5.45 20 6V17C20 17.55 19.8 18 19.42 18.41C19.05 18.8 18.58 19 18 19H2C1.42 19 0.95 18.8 0.58 18.41C0.2 18 0 17.55 0 17V6C0 5.45 0.2 5 0.58 4.59C0.95 4.2 1.42 4 2 4H6V2C6 1.42 6.2 0.95 6.58 0.58C6.95 0.2 7.42 0 8 0H12C12.58 0 13.05 0.2 13.42 0.58C13.8 0.95 14 1.42 14 2V4H18ZM2 6V17H18V6H2ZM12 4V2H8V4H12Z"
                  fill="#B3B3B3"
                ></path>
              </svg>
              <span>No Prior Technical Knowledge Needed</span>
            </p>
            <p>
              <svg
                className="w-6 h-6"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66659 2.5H14.9999L14.1666 4.16667H11.4499C11.8499 4.65 12.1499 5.21667 12.3249 5.83333H14.9999L14.1666 7.5H12.4999C12.2916 9.64167 10.6166 11.3583 8.49992 11.6333V11.6667H7.91658L12.9166 17.5H10.8333L5.83325 11.6667V10H7.91658C9.38325 10 10.5999 8.91667 10.7999 7.5H5.83325L6.66659 5.83333H10.5499C10.0833 4.85 9.08325 4.16667 7.91658 4.16667H5.83325L6.66659 2.5Z"
                  fill="#B3B3B3"
                ></path>
              </svg>
              <span>
                Pay After Placement of <span>5 LPA or Above</span>
              </span>
            </p>
            <a
              href="https://www.masaischool.com/program/masai-0ne/"
              target="_blank"
              rel="noreferrer"
            >
              VIEW COURSES
            </a>
          </div>
        </div>
        <div className="result__resultAdd2">
          <div className="result__resultAddImage">
            <img
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Downloader_45493fc392.png"
              alt=""
            />
          </div>
          <div className="result__resultAddInfo">
            <h1 className="result__resultAddInfoHeading">MasaiX.</h1>
            <p className="result__resultAddInfoSubHeading">
              <span>{"Fast Track Your Aspiration"}</span>
              <img
                src="https://www.pngmart.com/files/10/Dotted-Line-PNG-Picture.png"
                alt=""
              />
            </p>
            <p>
              <span>FOR WORKING PROFESSIONALS</span>
            </p>
            <p>
              <svg
                className="w-6 h-6"
                viewBox="0 0 22 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.0002 18L4.00024 14.2V8.2L0.000244141 6L11.0002 0L22.0002 6V14H20.0002V7.1L18.0002 8.2V14.2L11.0002 18ZM11.0002 9.7L17.8502 6L11.0002 2.3L4.15024 6L11.0002 9.7ZM11.0002 15.725L16.0002 13.025V9.25L11.0002 12L6.00024 9.25V13.025L11.0002 15.725Z"
                  fill="#B3B3B3"
                ></path>
              </svg>
              <span>Data Analytics | Software Development</span>
            </p>
            <p>
              <svg
                className="w-6 h-6"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66659 2.5H14.9999L14.1666 4.16667H11.4499C11.8499 4.65 12.1499 5.21667 12.3249 5.83333H14.9999L14.1666 7.5H12.4999C12.2916 9.64167 10.6166 11.3583 8.49992 11.6333V11.6667H7.91658L12.9166 17.5H10.8333L5.83325 11.6667V10H7.91658C9.38325 10 10.5999 8.91667 10.7999 7.5H5.83325L6.66659 5.83333H10.5499C10.0833 4.85 9.08325 4.16667 7.91658 4.16667H5.83325L6.66659 2.5Z"
                  fill="#B3B3B3"
                ></path>
              </svg>
              <span>
                Level 1: Pay After You Earn <span>5 LPA or Above</span>
              </span>
            </p>
            <p>
              <svg
                className="w-6 h-6"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66659 2.5H14.9999L14.1666 4.16667H11.4499C11.8499 4.65 12.1499 5.21667 12.3249 5.83333H14.9999L14.1666 7.5H12.4999C12.2916 9.64167 10.6166 11.3583 8.49992 11.6333V11.6667H7.91658L12.9166 17.5H10.8333L5.83325 11.6667V10H7.91658C9.38325 10 10.5999 8.91667 10.7999 7.5H5.83325L6.66659 5.83333H10.5499C10.0833 4.85 9.08325 4.16667 7.91658 4.16667H5.83325L6.66659 2.5Z"
                  fill="#B3B3B3"
                ></path>
              </svg>
              <span>
                Level 2: Pay After You Earn <span>10 LPA or Above</span>
              </span>
            </p>
            <a
              href="https://www.masaischool.com/program/masai-x/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              VIEW COURSES
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;

// {
//     titel: "Masai School - The Coding School that cares about you ...",
//     description: "Become a Software Developer in 7 months",
//     subDescription: "Full Stack Web Development",
//     wesiteUrl: "https://www.masaischool.com",
//     urlLinkPath: "https://www.masaischool.com",
//     keywords: "",
//     id: 1,
// }
