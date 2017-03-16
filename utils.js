module.exports = {
    getArg: function(n) {
        return process.argv[n+2]
    },

    getFirstArg: function() {
        return this.getArg(0)
    }

}
