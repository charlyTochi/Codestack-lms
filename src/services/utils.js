import UserSession from "constants/UserSession";

export const sessionChecker = (callback) => {
    console.log("Checking user session...");
        if(UserSession.getItem("isLoggedIn")){
                return callback(true);
            }
    return callback(false);
}