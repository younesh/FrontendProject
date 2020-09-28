//import "jquery";
// Global
app.global = {
    init: function() {
        app.global.hellowWord();
        app.global.gulp_fix_encoding();
    },
    hellowWord: function() {
        console.log("Hello word , generated js work !!........");
    },
    /*----------------------------- FIX GULP/A11P18-19 ---------------------------------*/
    gulp_fix_encoding: () => {
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