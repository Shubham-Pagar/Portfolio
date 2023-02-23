export const ScrollToSection = (gotto) => {
    document.querySelector('#' + gotto).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
};