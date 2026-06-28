document.addEventListener("DOMContentLoaded", () => {

    const saveInfo = document.getElementById("saveInfo");
    const saveSocial = document.getElementById("saveSocial");
    const backupBtn = document.getElementById("backupBtn");

    if (saveInfo) {
        saveInfo.addEventListener("click", () => {
            alert("Organization information saved.");
        });
    }

    if (saveSocial) {
        saveSocial.addEventListener("click", () => {
            alert("Social media links saved.");
        });
    }

    if (backupBtn) {
        backupBtn.addEventListener("click", () => {
            alert("Backup feature will be available after Firebase integration.");
        });
    }

});

