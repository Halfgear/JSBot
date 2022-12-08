module.exports= {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log('Ready! ${clinet.user.tag} is logged in and online.');
    }
}