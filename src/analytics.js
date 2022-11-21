function createAnalytics() {
    let counter = 0;
    let isDest = false
    const listner = () => counter++
    document.addEventListener('click', listner)

    return {
        destroy() {
            document.removeEventListener('click', listner);
            isDest = true
        },
        getClick() {
            if(isDest) {
                return 'Analytics is destroyed'
            }
            return counter
        }
    }

}
window.analytics = createAnalytics()