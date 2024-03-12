// Code your solution here
function findMatching(array,match) {
    return array.filter((element)=>{
        return element.toUpperCase()===match.toUpperCase();
    });
}
function fuzzyMatch(array,match) {
    return array.filter((element)=>{
        element=element.substr(0,match.length);
        return element===match;
    });
}
function matchName(array,match) {
    return array.filter((element)=>{
        return element.name===match;
    });
}