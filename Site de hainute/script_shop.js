document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.querySelector(".lupa");
    const searchWrapper = document.querySelector(".search-wrapper");
    const closeSearch = document.getElementById("close-search");

    searchIcon.addEventListener("click", function () {
        searchWrapper.style.display = "flex";
    });


    closeSearch.addEventListener("click", function () {
        searchWrapper.style.display = "none";
    });

    document.addEventListener("click", function (event) {
        if (!searchWrapper.contains(event.target) && !searchIcon.contains(event.target)) {
            searchWrapper.style.display = "none";
        }
    });
});
