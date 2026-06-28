/* ==========================================
   YES-O Digital Hub
   Attendance Scanner
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    let html5QrCode;
    let scannerRunning = false;

    const startBtn = document.getElementById("startScanner");
    const stopBtn = document.getElementById("stopScanner");

    const memberName = document.getElementById("memberName");
    const memberID = document.getElementById("memberID");
    const memberCommittee = document.getElementById("memberCommittee");
    const attendanceStatus = document.getElementById("attendanceStatus");

    stopBtn.disabled = true;

    /* ==========================
       QR Scan Success
    ========================== */

    function onScanSuccess(decodedText) {

        console.log("QR Code:", decodedText);

        memberID.textContent = decodedText;
        memberName.textContent = "Searching...";
        memberCommittee.textContent = "---";
        attendanceStatus.textContent = "QR Code Detected";

        alert("QR Code Scanned:\n\n" + decodedText);

    }

    function onScanFailure(error) {

        // Ignore continuous scan errors

    }

    /* ==========================
       Start Scanner
    ========================== */

    startBtn.addEventListener("click", async () => {

        if (scannerRunning) return;

        html5QrCode = new Html5Qrcode("reader");

        try {

            await html5QrCode.start(

                {
                    facingMode: "environment"
                },

                {
                    fps: 10,
                    qrbox: {
                        width: 250,
                        height: 250
                    }
                },

                onScanSuccess,
                onScanFailure

            );

            scannerRunning = true;

            startBtn.disabled = true;
            stopBtn.disabled = false;

        } catch (err) {

            alert("Unable to access camera.");

            console.error(err);

        }

    });

    /* ==========================
       Stop Scanner
    ========================== */

    stopBtn.addEventListener("click", async () => {

        if (!scannerRunning) return;

        await html5QrCode.stop();

        scannerRunning = false;

        startBtn.disabled = false;
        stopBtn.disabled = true;

        attendanceStatus.textContent = "Scanner Stopped";

    });

});
