const messages = {
    en: {
        name: 'Kaede Shiohara',
        bio: 'I am a PhD student at Computer Vision and Media Lab. I am mainly working on computer vision and pattern recognition, especially face generation and forgery detection.',
        nav: {
            home: 'Home',
            profile: 'Profile',
            publications: 'Publications',
            talks: 'Invited Talks',
            awards: 'Awards',
            media: 'Media',
            other: 'Others'
        }
    },
    ja: {
        name: '塩原 楓',
        bio: '東京大学山﨑研究室に所属する博士課程の学生です。コンピュータビジョンとパターン認識の研究を行っており、特に人物画像生成と偽造検出に取り組んでいます。',
        nav: {
            home: 'ホーム',
            profile: 'プロフィール',
            publications: '論文',
            talks: '招待講演',
            awards: '受賞',
            media: 'メディア',
            other: 'その他'
        }
    }
};

window.i18n = new VueI18n({
    locale: 'en',
    messages
});
