
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(LIBROS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            librosArray = resultObj.data;


            librosArray = sortLibros(1, librosArray);



            showLibros(librosArray);
        }
    })
})