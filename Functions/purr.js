function cat() {
    console.log(purr());
    const meow = function (max) {
        let catMessage = '';
        for (let i = 0; i < max; i++) {
            catMessage = 'meow ';
        }
        return catMessage;
    };
    function purr() {
        return 'purrrr!';
    }
}

cat()