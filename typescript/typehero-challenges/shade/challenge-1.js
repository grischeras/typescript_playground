export const playSong = (artistName, year) => {
    return `${artistName} was released in the year ${year}`;
};
const artistName = "Frank Zappa";
const age = 52;
export const musicianInfo = ({ artistName, age, deceased }) => {
    return `${artistName}, age ${age}${deceased ? " (deceased)" : ""}`;
};
musicianInfo({
    artistName,
    age,
    deceased: true,
});
