var UserSession = (function () {

    var setItem = function (name, value) {
        sessionStorage.setItem(name, value);
    }

    var getItem = function (name) {
        return sessionStorage.getItem(name);
    }

    var removeItem = function (name) {
        sessionStorage.removeItem(name);
    };

    var destroy = function () {
        sessionStorage.clear();
    };


    return {
        destroy: destroy,
        removeItem: removeItem,
        getItem: getItem,
        setItem: setItem
    }

})();

export default UserSession;