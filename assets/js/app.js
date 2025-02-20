window.app = new Vue({
    i18n,
    router,
    el: '#app',
    data: {
        currentLang: 'en',
        headerHeight: 0
    },
    methods: {
        setLang(lang) {
            this.currentLang = lang;
            this.$i18n.locale = lang;
        },
        updateHeaderHeight() {
            const header = document.querySelector('.fixed-header');
            if (header) {
                this.headerHeight = header.offsetHeight;
                document.body.style.paddingTop = `${this.headerHeight + 20}px`;
                
                // Update publications container height if on publications page
                const pubContainer = document.querySelector('.publications-container');
                if (pubContainer) {
                    const newHeight = `calc(100vh - ${this.headerHeight + 40}px)`;
                    pubContainer.style.minHeight = newHeight;
                    document.querySelector('.publications-list').style.maxHeight = newHeight;
                    document.querySelector('.publication-details').style.maxHeight = newHeight;
                }
            }
        }
    },
    mounted() {
        // Set initial language based on browser preference
        const userLang = navigator.language || navigator.userLanguage;
        this.currentLang = userLang.startsWith('ja') ? 'ja' : 'en';
        this.$i18n.locale = this.currentLang;

        // Initial header height update
        this.updateHeaderHeight();

        // Update header height on window resize
        window.addEventListener('resize', this.updateHeaderHeight);

        // Update header height when route changes
        this.$router.afterEach(() => {
            this.$nextTick(() => {
                this.updateHeaderHeight();
            });
        });
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.updateHeaderHeight);
    }
});
