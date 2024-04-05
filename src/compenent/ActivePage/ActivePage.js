const activePage = (pageId) => {
    document.getElementById("result__page").removeAttribute("class", "active__page")
    document.getElementById("images__page").removeAttribute("class", "active__page")
    document.getElementById("videos__page").removeAttribute("class", "active__page")
    document.getElementById("news__page").removeAttribute("class", "active__page")
    document.getElementById("maps__page").removeAttribute("class", "active__page")
    document.getElementById("translate__page").removeAttribute("class", "active__page")
    document.getElementById("books__page").removeAttribute("class", "active__page")
    document.getElementById(`${pageId}`).setAttribute("class", "active__page")
}

export default activePage