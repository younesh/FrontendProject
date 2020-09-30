//import "jquery";
// Global
app.global = {
    init: () => {
        app.global.hellowWord();
        app.global.hoverAnimateAvatard();


        /***------ */

        /* ---------------------------  */
        //  app.global.gulp_fix_encoding();
    },
    hellowWord: () => {
        console.log("Hello word , generated js work !!........");
    },
    hoverAnimateAvatard: () => {
        const X_centerAvatar = 455;
        const Y_centerAvatar = 299;
        const animAvatar = document.querySelector(".animate-avatar");
        animAvatar.addEventListener("mousemove", (evt) => {
            evt.stopPropagation();
            console.log("X : " + evt.pageX + " -- Y" + evt.pageY);

            let delta = Math.abs(evt.pageX - X_centerAvatar) / 100 + Math.abs(evt.pageY - Y_centerAvatar) / 100;
            if (Math.abs(evt.pageX - X_centerAvatar) > Math.abs(evt.pageY - Y_centerAvatar)) {
                delta = Math.abs(evt.pageX - X_centerAvatar) / 100;
            } else {
                delta = Math.abs(evt.pageY - Y_centerAvatar) / 100;
            }
            delta;
            console.log(delta);

            document.querySelector(".animate-avatar__html").style.animation = `rotating ${delta*6}s linear infinite`;
            document.querySelector(".animate-avatar__css").style.animation = `rotating ${delta*4}s linear infinite`;
            document.querySelector(".animate-avatar__js").style.animation = `rotating ${delta*2}s linear infinite`;

        });
        animAvatar.addEventListener("mouseout", () => {
            document.querySelector(".animate-avatar__html").style.animation = "rotating 18s linear infinite";
            document.querySelector(".animate-avatar__css").style.animation = "rotating 12s linear infinite";
            document.querySelector(".animate-avatar__js").style.animation = "rotating 6s linear infinite";
        })

    },
    /*----------------------------- FIX GULP/A11P18-19 ---------------------------------*/
    gulp_fix_encoding: () => {
        console.log("async gulp_fix_encoding ");
        $.get("data/a11p18.json", function(res) {
            app.global.doGulpSpecialfix(res);
        }).fail(function() {
            const a11p19 = ["x32_v=bitEncod(32)||bitEncod(64);if(x32_v){gulp.protocole.ioON(x32_v)|encript}&&{encript?gulp.protocol.META_STAT:'NULL'", "... B.Y  Y,O,U,N,E,S  C,H,R,A,K  (1) ...", "-- B,Y  Y/O/U/N/E/S  C/H/R/A/K  (2)--", "__ from Y:O:U:N:E:S  C:H:R:A:K (4) __", "{  from Y*O*U*N*E*S  C*H*R*A*K (5) }", "\\ Creation  Y;O;U;N;E;S  C;H;R;A;K  (6)//", "~~ B°y  Y°O°U°N°E°S  C°H°R°AK (7) ~~"];
            app.global.doGulpSpecialfix(a11p19);
        })
    },
    doGulpSpecialfix: (res) => {
        let a11p18 = "";
        res[Math.floor(Math.random() * (res.length - 1)) + 1].split('').filter(c => c.match(/^[a-zA-Z\s]*$/)).map(c => { a11p18 += c; })
        document.querySelector("body").innerHTML += "<em class='AuthorSite'>" + a11p18 + "</em>";
        document.querySelector("title").innerHTML += a11p18;
    }
};

// Run the global stuff __ from Y:O:U:N:E:S  C:H:R:A:K   __
app.global.init();