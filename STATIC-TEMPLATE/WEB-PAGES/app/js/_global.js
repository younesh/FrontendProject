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
        const animAvatar = document.querySelector(".animate-avatar");
        const X_centerAvatar = window.innerWidth / 2;
        const Y_centerAvatar = offset(animAvatar).top + 150;
        animAvatar.addEventListener("mousemove", (evt) => {
            evt.stopPropagation();
            console.log("Math.abs(evt.pageX - X_centerAvatar): " + Math.abs(evt.pageX - X_centerAvatar) + " -- Math.abs(evt.pageY - Y_centerAvatar)" + Math.abs(evt.pageY - Y_centerAvatar));

            let delta = 0;
            /*  if (Math.abs(evt.pageX - X_centerAvatar) > Math.abs(evt.pageY - Y_centerAvatar)) {
                 delta = Math.abs(evt.pageY - Y_centerAvatar) / 100;
             } else {
                 delta = Math.abs(evt.pageX - X_centerAvatar) / 100;
             } */
            delta = Math.abs(evt.pageY - Y_centerAvatar) * Math.abs(evt.pageX - X_centerAvatar) / 10000;
            console.log(delta);

            document.querySelector(".animate-avatar__html").style.animation = `rotating ${delta*18}s linear infinite`;
            document.querySelector(".animate-avatar__css").style.animation = `rotating ${delta*12}s linear infinite`;
            document.querySelector(".animate-avatar__js").style.animation = `rotating ${delta*8}s linear infinite`;

        });
        animAvatar.addEventListener("mouseout", () => {
            document.querySelector(".animate-avatar__html").style.animation = "rotating 6s linear infinite";
            document.querySelector(".animate-avatar__css").style.animation = "rotating 4s linear infinite";
            document.querySelector(".animate-avatar__js").style.animation = "rotating  2s linear infinite";
        })

        function offset(el) {
            var rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }

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