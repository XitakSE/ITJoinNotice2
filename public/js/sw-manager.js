if ("serviceWorker" in navigator) {
    navigator.serviceWorker
    .register("sw.js")
    .then(function (registration) {
registration.onupdatefound = function() {
registration.update();
console.log("ServiceWorker registration updated!");
}
console.log("ServiceWorker registration successful with scope: ", registration.scope);
})
.catch(function (err) {
console.log("ServiceWorker registration failed: ", err);
});
}