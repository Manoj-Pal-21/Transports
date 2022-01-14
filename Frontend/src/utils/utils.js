let domain = "";
if (window.location.hostname === "localhost") {
    domain = "http://localhost:5000";
} else {
    domain = window.location.origin;
};

export default domain;