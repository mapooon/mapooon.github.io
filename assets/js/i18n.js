window.messages = {
    en: {
        name: 'Kaede Shiohara',
        bio: 'I am a PhD student at Computer Vision and Media Lab. I am mainly working on computer vision and pattern recognition, especially face generation and forgery detection.',
        nav: {
            profile: 'Profile',
            publications: 'Publications',
            talks: 'Invited Talks',
            awards: 'Awards',
            media: 'Media',
            other: 'Other'
        }
    },
    ja: {
        name: '塩原 楓',
        bio: '東京大学大学院 情報理工学系研究科 電子情報学専攻のコンピュータビジョンとメディア研究室の博士課程学生です。主にコンピュータビジョンとパターン認識、特に顔画像生成と偽造検出に関する研究を行っています。',
        nav: {
            profile: 'プロフィール',
            publications: '研究業績',
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
