timer = JSON.parse(localStorage.getItem('timer')) || {
    dd: 30,
    hh: 23,
    mm: 59,
    ss: 59
}

$(document).ready(() => {
    $(".dd").text(timer.dd + "d");
    $(".hh").text(timer.hh + "h");
    $(".mm").text(timer.mm + "m");
    $(".ss").text(timer.ss + "s");

    if (wallet_connected) {
        $("#connect-btn-2").text("Mint");
    } else {
        $("#connect-btn-2").text("Connect Wallet");
    }

    let mints = 1111;
    let your_mints = 42;
    let model_num = 1;
    let mint_increment_interval;
    start_mint_increment();
    function start_mint_increment() {
        mint_increment_interval = setInterval(() => {
            if (mints < 3333) {
                mints++;
            } else {
                mints = 0;
            }
            $("#current-mints").text(mints);
            $("#mint-bar div").css("width", `${(mints / 3333) * 100}%`);
        }, 10);
    }

    setInterval(() => {
        if (timer.ss > 0) {
            timer.ss--;
        } else {
            timer.ss = 59;
            if (timer.mm > 0) {
                timer.mm--;
            } else {
                timer.mm = 59;
                if (timer.hh > 0) {
                    timer.hh--;
                } else {
                    timer.hh = 23;
                    if (timer.dd > 0) {
                        timer.dd--;
                    } else {
                        timer.dd = 30;
                    }
                }
            }
        }
        $(".dd").text(timer.dd + "d");
        $(".hh").text(timer.hh + "h");
        $(".mm").text(timer.mm + "m");
        $(".ss").text(timer.ss + "s");
        localStorage.setItem('timer', JSON.stringify(timer));
    }, 1000);

    setInterval(() => {
        if (model_num < 4) {
            model_num++;
        } else {
            model_num = 1;
        }
        $("#mint-model img").attr("src", `img/model/${model_num}.png`);
    }, 250);
    $("#mint-bar").click(() => {
        if (mint_increment_interval) {
            clearInterval(mint_increment_interval);
            mint_increment_interval = undefined;
        } else {
            start_mint_increment();
        }
    });

    $("#mint-sub").click(() => {
        if (your_mints > 0 && mints > 0) {
            your_mints--;
            mints--;
        }
        $("#your-mints").text(your_mints);
        $("#current-mints").text(mints);
        $("#mint-bar div").css("width", `${(mints / 3333) * 100}%`);
    });

    $("#mint-add").click(() => {
        if (mints + your_mints < 3333) {
            your_mints++;
            mints++;
        }
        $("#your-mints").text(your_mints);
        $("#current-mints").text(mints);
        $("#mint-bar div").css("width", `${(mints / 3333) * 100}%`);
    });

    $("#connect-btn-2").click(() => {
        if (wallet_connected) {
            let random = Math.random();
            if (random > 0.5) {
                alert("Mint Sucessful");
                your_mints++;
                mints++;
                $("#your-mints").text(your_mints);
                $("#current-mints").text(mints);
                $("#mint-bar div").css("width", `${(mints / 3333) * 100}%`);
            } else {
                alert("Mint Unsuccessful, Try again.");
            }
        } else {
            $("#connect-box").css('opacity', '1').css('pointer-events', 'auto');
        }
    });
});