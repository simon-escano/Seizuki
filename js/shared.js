let wallet_connected = JSON.parse(localStorage.getItem('wallet_connected')) || false;

$(document).ready(() => {
    if (wallet_connected) {
        $("#connect-choice").css('background-color', 'var(--success)');
    } else {
        $("#connect-choice").css('background-color', 'transparent');
    }

    $("#connect-btn").click(() => {
        $("#connect-box").css('opacity', '1').css('pointer-events', 'auto');
    });
    
    $("#connect-bg, #close-btn").click(() => {
        $("#connect-box").css('opacity', '0').css('pointer-events', 'none');
    });

    $(".connect-provider").click(() => {
        if (!wallet_connected) {
            wallet_connected = true;
            $("#connect-choice").css('background-color', 'var(--success)');
            $("#connect-btn-2").text("Mint");
            localStorage.setItem('wallet_connected', JSON.stringify(wallet_connected));
            setTimeout(() => {
                $("#connect-box").css('opacity', '0').css('pointer-events', 'none');
            }, 1000);
        } else {
            wallet_connected = false;
            $("#connect-choice").css('background-color', 'transparent');
            localStorage.setItem('wallet_connected', JSON.stringify(wallet_connected));
            $("#connect-btn-2").text("Connect Wallet");
        }
    });
});
