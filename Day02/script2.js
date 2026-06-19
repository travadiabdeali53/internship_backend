// Nested Object

const userSession = {
    username: "Abdeali",
    isAuthenticated: true,

    profile: {
        age: 19,
        role: "Admin"
    }
};

// Arrow Function

const checkAccess = (userSession) => {

    // Authentication Check
    if (userSession.isAuthenticated == false) {
        return "Access Denied: Please log in first";
    }

    // Role Verification
    else if (userSession.profile.role == "Admin") {
        return "Access Granted: Full administrative privileges.";
    }

    else if (userSession.profile.role == "Editor") {

        if (userSession.profile.age >= 18) {
            return "Access Granted: Editor dashboard.";
        }
        else {
            return "Access Denied: Editors must be 18+.";
        }

    }

    else if (userSession.profile.role == "Viewer") {
        return "Access Denied: Viewers cannot access this route.";
    }
};

// Display Result

function checkUser() {
    document.getElementById("result").innerHTML =
        checkAccess(userSession);
}