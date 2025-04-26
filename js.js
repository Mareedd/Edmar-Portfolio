
document.addEventListener("DOMContentLoaded", function () {
    // Portfolio popup functionality
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("view-project-btn")) {
            togglePortfolioPopup();
            document.querySelector(".portfolio-popup").scrollTo(0, 0);
            portfolioItemDetails(e.target.closest(".portfolio-item"));
        }
    });

    function togglePortfolioPopup() {
        document.querySelector(".portfolio-popup").classList.toggle("open");
        document.body.classList.toggle("hide-scrolling");
        document.querySelector(".main").classList.toggle("fade-out");
    }

    document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

    // Hide popup when clicking outside of it
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("pp-inner")) {
            togglePortfolioPopup();
        }
    });

    function portfolioItemDetails(portfolioItem) {
        document.querySelector(".pp-thumbnail img").src =
            portfolioItem.querySelector(".portfolio-item-thumbnail img").src;
        document.querySelector(".pp-header h3").innerHTML =
            portfolioItem.querySelector(".portfolio-item-title").innerHTML;
        document.querySelector(".pp-body").innerHTML =
            portfolioItem.querySelector(".portfolio-item-details").innerHTML;
    }

    // Close popup when pressing Escape key
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && document.querySelector(".portfolio-popup").classList.contains("open")) {
            togglePortfolioPopup();
        }
    });
});
