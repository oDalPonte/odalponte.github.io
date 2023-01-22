<script>
    var toggleDarkModeButton = document.getElementById("toggle-dark-mode");
    var body = document.body;

    toggleDarkModeButton.addEventListener("click", function() {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
        } else {
            body.classList.add("dark-mode");
        }
    });
</script>
