/*
RAVANA
*/

function successfullMessage(msg) {
    return "β *RAVANA :*  ```" + msg + "```"
}
function errorMessage(msg) {
    return "π *RAVANA :*  ```" + msg + "```"
}
function infoMessage(msg) {
    return "βΊοΈ *RAVANA :*  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
