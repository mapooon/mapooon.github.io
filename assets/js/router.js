window.routes = [
    {
        path: '/',
        redirect: () => window.innerWidth > 768 ? '/profile' : '/home',
        name: 'root'
    },
    {
        path: '/profile',
        component: {
            template: `
                <div class="profile-page">
                    <section class="education-section">
                        <h2>Education</h2>
                        <div class="education-item">
                            <h3>Ph.D. at the University of Tokyo</h3>
                            <p>Graduate School of Information Science and Technology<br>
                            Department of Information and Communication Engineering<br>
                            Supervisor: <a href="https://www.cvm.t.u-tokyo.ac.jp/en/">Prof. Toshihiko Yamasaki</a><br>
                            <em>2022.4 - 2025.3</em></p>
                        </div>
                        <div class="education-item">
                            <h3>M.S. at the University of Tokyo</h3>
                            <p>Graduate School of Information Science and Technology<br>
                            Department of Information and Communication Engineering<br>
                            Supervisor: <a href="https://www.cvm.t.u-tokyo.ac.jp/en/">Prof. Toshihiko Yamasaki</a><br>
                            <em>2020.4 - 2022.3</em></p>
                        </div>
                        <div class="education-item">
                            <h3>B.S. at Osaka City University</h3>
                            <p>Under Graduate School of Engineering<br>
                            Department of Electrical and Information Engineering<br>
                            Supervisor: <a href="https://ds.k.kyoto-u.ac.jp/introduction/member/hayashi/">Prof. Kazunori Hayashi</a><br>
                            <em>2015.4 - 2019.3</em></p>
                        </div>
                    </section>
                    
                    <section class="experience-section">
                        <h2>Experience</h2>
                        <div class="experience-item">
                            <h3>Post Doctor at the University of Tokyo</h3>
                            Supervisor: <a href="https://www.cvm.t.u-tokyo.ac.jp/en/">Prof. Toshihiko Yamasaki</a><br>
                            <em>2025.4 - Present</em></p>
                        </div>
                        <div class="experience-item">
                            <h3>Computer Vision Research Internship at MPI for Informatics</h3>
                            Supervisor: <a href="https://people.mpi-inf.mpg.de/~golyanik/">Dr. Vladislav Golyanik</a><br>
                            <em>2023.11 - 2025.3</em></p>
                        </div>
                        <div class="experience-item">
                            <h3>Computer Vision Research Internship at CyberAgent AI Lab</h3>
                            Mentor: <a href="https://yangxingchao.github.io/">Xingchao Yang</a><br>
                            <em>2022.8 - 2023.10</em></p>
                        </div>
                    </section>
                </div>
            `
        }
    },
    {
        path: '/home',
        name: 'home',
        component: {
            template: `
                <div class="home-page">
                    <div class="bio-section">
                        <img src="./files/photo/profile.jpeg" alt="profile photo" class="profile-img">
                        <div class="bio-text">
                            <h1>{{ $t('name') }}</h1>
                            <p v-html="$t('bio')"></p>
                            <p class="links">
                                <a href="https://drive.google.com/file/d/1Z8tqdgiz0pSpv2i-Eka_kcoh0ymqzUoo/view?usp=sharing">CV</a> /
                                <a href="mailto:shiohara@cvm.t.u-tokyo.ac.jp" title="Email"><i class="fas fa-envelope"></i></a> /
                                <a href="https://scholar.google.co.jp/citations?user=NME5NOoAAAAJ&hl=ja&authuser=2&oi=ao" title="Google Scholar"><i class="fas fa-graduation-cap"></i></a> /
                                <a href="https://twitter.com/kaedeshioharacs" title="Twitter"><i class="fab fa-twitter"></i></a> /
                                <a href="https://github.com/mapooon" title="Github"><i class="fab fa-github"></i></a>
                            </p>
                        </div>
                    </div>
                </div>
            `
        }
    },
    {
        path: '/publications',
        component: {
            data() {
                return {
                    selectedPaper: undefined,
                    papers: [
                        {
                            title: 'PetFace: A Large-Scale Dataset and Benchmark for Animal Identification',
                            authors: 'Risa Shinoda*, <strong>Kaede Shiohara*</strong> (*Equal contribution)',
                            conference: 'European Conference on Computer Vision (ECCV) 2024',
                            acceptance_rate: '2.3% (Oral)',
                            image: './files/teaser/eccv24_pf.jpg',
                            links: {
                                paper: 'https://arxiv.org/abs/2407.13555',
                                code: 'https://github.com/mapooon/PetFace',
                                webpage: 'https://dahlian00.github.io/PetFacePage/'
                            },
                            abstract: 'Automated animal face identification plays a crucial role in the monitoring of behaviors, conducting of surveys, and finding of lost animals. Despite the advancements in human face identification, the lack of datasets and benchmarks in the animal domain has impeded progress. In this paper, we introduce the PetFace dataset, a comprehensive resource for animal face identification encompassing 257,484 unique individuals across 13 animal families and 319 breed categories, including both experimental and pet animals. This large-scale collection of individuals facilitates the investigation of unseen animal face verification, an area that has not been sufficiently explored in existing datasets due to the limited number of individuals. Moreover, PetFace also has fine-grained annotations such as sex, breed, color, and pattern. We provide multiple benchmarks including re-identification for seen individuals and verification for unseen individuals. The models trained on our dataset outperform those trained on prior datasets, even for detailed breed variations and unseen animal families. Our result also indicates that there is some room to improve the performance of integrated identification on multiple animal families. We hope the PetFace dataset will facilitate animal face identification and encourage the development of non-invasive animal automatic identification methods.'
                        },
                        {
                            title: 'Face2Diffusion for Fast and Editable Face Personalization',
                            authors: '<strong>Kaede Shiohara</strong>, Toshihiko Yamasaki',
                            conference: 'IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2024',
                            acceptance_rate: '23.6%',
                            image: './files/teaser/cvpr24_f2d.jpg',
                            links: {
                                paper: 'https://arxiv.org/abs/2403.05094',
                                code: 'https://github.com/mapooon/Face2Diffusion',
                                webpage: 'https://mapooon.github.io/Face2DiffusionPage/'
                            },
                            abstract: 'Face personalization aims to insert specific faces, taken from images, into pretrained text-to-image diffusion models. However, it is still challenging for previous methods to preserve both the identity similarity and editability due to overfitting to training samples. In this paper, we propose Face2Diffusion (F2D) for high-editability face personalization. The core idea behind F2D is that removing identity-irrelevant information from the training pipeline prevents the overfitting problem and improves editability of encoded faces. F2D consists of the following three novel components: 1) Multi-scale identity encoder provides well-disentangled identity features while keeping the benefits of multi-scale information, which improves the diversity of camera poses. 2) Expression guidance disentangles face expressions from identities and improves the controllability of face expressions. 3) Class-guided denoising regularization encourages models to learn how faces should be denoised, which boosts the text-alignment of backgrounds. Extensive experiments on the FaceForensics++ dataset and diverse prompts demonstrate our method greatly improves the trade-off between the identity- and text-fidelity compared to previous state-of-the-art methods.'
                        },
                        {
                            title: 'BlendFace: Re-designing Identity Encoders for Face-Swapping',
                            authors: '<strong>Kaede Shiohara</strong>, Xingchao Yang, Takafumi Taketomi',
                            conference: 'IEEE/CVF International Conference on Computer Vision (ICCV) 2023',
                            acceptance_rate: '26.2%',
                            image: './files/teaser/iccv23_bf.jpg',
                            links: {
                                paper: 'https://arxiv.org/abs/2307.10854',
                                code: 'https://github.com/mapooon/BlendFace',
                                webpage: 'https://mapooon.github.io/BlendFacePage'
                            },
                            abstract: 'The great advancements of generative adversarial networks and face recognition models in computer vision have made it possible to swap identities on images from single sources. Although a lot of studies seems to have proposed almost satisfactory solutions, we notice previous methods still suffer from an identity-attribute entanglement that causes undesired attributes swapping because widely used identity encoders, eg, ArcFace, have some crucial attribute biases owing to their pretraining on face recognition tasks. To address this issue, we design BlendFace, a novel identity encoder for face-swapping. The key idea behind BlendFace is training face recognition models on blended images whose attributes are replaced with those of another mitigates inter-personal biases such as hairsyles. BlendFace feeds disentangled identity features into generators and guides generators properly as an identity loss function. Extensive experiments demonstrate that BlendFace improves the identity-attribute disentanglement in face-swapping models, maintaining a comparable quantitative performance to previous methods.'
                        },
                        {
                            title: 'Detecting Deepfakes with Self-Blended Images',
                            authors: '<strong>Kaede Shiohara</strong>, Toshihiko Yamasaki',
                            conference: 'IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2022',
                            acceptance_rate: '4.2% (Oral)',
                            image: './files/teaser/cvpr22_sbi.jpg',
                            links: {
                                paper: 'https://arxiv.org/abs/2204.08376',
                                code: 'https://github.com/mapooon/SelfBlendedImages'
                            },
                            abstract: 'In this paper, we present novel synthetic training data called self-blended images (SBIs) to detect deepfakes. SBIs are generated by blending pseudo source and target images from single pristine images, reproducing common forgery artifacts (e.g., blending boundaries and statistical inconsistencies between source and target images). The key idea behind SBIs is that more general and hardly recognizable fake samples encourage classifiers to learn generic and robust representations without overfitting to manipulation-specific artifacts. We compare our approach with state-of-the-art methods on FF++, CDF, DFD, DFDC, DFDCP, and FFIW datasets by following the standard cross-dataset and cross-manipulation protocols. Extensive experiments show that our method improves the model generalization to unknown manipulations and scenes. In particular, on DFDC and DFDCP where existing methods suffer from the domain gap between the training and test sets, our approach outperforms the baseline by 4.90% and 11.78% points in the cross-dataset evaluation, respectively.'
                        }
                    ]
                }
            },
            created() {
                // 初期表示時に最新の論文を選択
                if (this.papers.length > 0) {
                    this.selectedPaper = this.papers[0];
                }
            },
            template: `
                <div class="publications-container">
                    <div class="publications-list">
                        <div v-for="paper in papers" 
                             :key="paper.title"
                             @click="selectedPaper = paper"
                             :class="['publication-item', selectedPaper === paper ? 'active' : '']">
                            <h3>{{ paper.title }}</h3>
                            <p><small>{{ paper.conference }}</small></p>
                            <p><small>Acceptance Rate: {{ paper.acceptance_rate }}</small></p>
                        </div>
                    </div>
                    <div class="publication-details" v-if="selectedPaper">
                        <h2>{{ selectedPaper.title }}</h2>
                        <p v-html="selectedPaper.authors"></p>
                        <p><em>{{ selectedPaper.conference }}</em></p>
                        <p><small>Acceptance Rate: {{ selectedPaper.acceptance_rate }}</small></p>
                        <div class="paper-links">
                            <a v-if="selectedPaper.links.paper" :href="selectedPaper.links.paper" class="paper-link">Paper</a>
                            <a v-if="selectedPaper.links.code" :href="selectedPaper.links.code" class="paper-link">Code</a>
                            <a v-if="selectedPaper.links.webpage" :href="selectedPaper.links.webpage" class="paper-link">Project Page</a>
                        </div>
                        <img :src="selectedPaper.image" :alt="selectedPaper.title">
                        <p v-if="selectedPaper.abstract">{{ selectedPaper.abstract }}</p>
                    </div>
                </div>
            `
        }
    },
    {
        path: '/talks',
        component: {
            template: `
                <div class="talks-section">
                    <div class="talk-item">
                        <h3>Symposium on Sensing via Image Information (SSII) 2024</h3>
                        <p>Topic: Identity-Preserving Face Generation</p>
                    </div>
                    <div class="talk-item">
                        <h3>Visual Computing (VC) 2023</h3>
                        <p>Topic: Face-Swapping</p>
                    </div>
                    <div class="talk-item">
                        <h3>Visual Computing (VC) 2022</h3>
                        <p>Topic: Deepfake Detection</p>
                    </div>
                    <div class="talk-item">
                        <h3>Meeting on Image Recognition and Understanding (MIRU) 2022</h3>
                        <p>Topic: Deepfake Detection</p>
                    </div>
                </div>
            `
        }
    },
    {
        path: '/awards',
        component: {
            template: `
                <div class="awards-section">
                    <h2>Awards</h2>
                    <div class="award-item">
                        <h3>Doctor Thesis Department Chair's Award at the University of Tokyo</h3>
                        <p>東京大学情報理工学系研究科電子情報学専攻 博士論文専攻長賞<br>
                    </div>
                    <div class="award-item">
                        <h3>IEEE CS Tokyo/Japan Joint Local Chapters Young Author Award 2024</h3>
                        <p><a href="https://www.ieee-jp.org/section/tokyo/chapter/C-16/#YAA2024" class="webpage-link">Webpage</a></p>
                    </div>
                    <div class="award-item">
                        <h3>Telecom System Technology Award 2022</h3>
                        <p>テレコムシステム技術賞 一般の部 優秀賞<br>
                        <a href="https://www.taf.or.jp/files/items/2080/File/listtelesys_38.pdf" class="webpage-link">Webpage</a></p>
                    </div>
                    <div class="award-item">
                        <h3>Hiroshi Harashima Academic Honorable Award 2022</h3>
                        <p>原島博学術奨励賞<br>
                        <a href="http://denkidenshi.or.jp/syorei-harashima-jyusyo.html" class="webpage-link">Webpage</a></p>
                    </div>

                    <h2>Conference Awards</h2>
                    <div class="award-item">
                        <h3>MVE 2025.3 Best Paper Award</h3>
                        <p>MVE賞<br>
                        <p>ジェ エン トイ サン ジャ, 塩原楓, 山崎俊彦, 都賀美有紀, 飛谷謙介, 長田典子, "Stable Diffusion を用いた印象駆動型柄生成"<br>
                        <p><a href="https://www.ieice.org/~mve/award.html" class="webpage-link">Webpage</a></p>
                    </div>
                    <div class="award-item">
                        <h3>MIRU 2024 Student Encouragement Award</h3>
                        <p>MIRU学生奨励賞<br>
                        <p>篠田理沙*, 塩原楓* (*Equal contribution), "動物の顔認識に対する大規模データセット構築"<br>
                        <p><a href="https://miru-committee.github.io/miru2024/author/award/" class="webpage-link">Webpage</a></p>
                    </div>
                    <div class="award-item">
                        <h3>MIRU 2023 Student Encouragement Award</h3>
                        <p>MIRU学生奨励賞<br>
                        <p>塩原楓, 小杉哲, 山崎俊彦, "単一ステージモデルによる遮蔽物を考慮した顔交換"<br>
                        <p><a href="https://cvim.ipsj.or.jp/MIRU2023/award/" class="webpage-link">Webpage</a></p>
                    </div>
                    <div class="award-item">
                        <h3>IE 2022.2 Best Paper Award</h3>
                        <p>IE賞<br>
                        <p>塩原楓, 山崎俊彦, "汎用的なディープフェイク検出のための自己ブレンディング拡張"<br>
                        <p><a href="https://www.ieice.org/iss/ie/jpn/" class="webpage-link">Webpage</a></p>
                    </div>
                    
                    <h2>Others</h2>
                    <div class="award-item">
                        <h3>1st place at 6th Brain(s) Contest by FUJIFILM AI Academy Brain(s)</h3>
                        <p><a href="https://fujifilmdatasciencechallnge.mystrikingly.com/" class="webpage-link">Webpage</a></p>
                    </div>
                    <div class="award-item">
                        <h3>SIGNATE Competition Master</h3>
                        <p><a href="https://signate.jp/users/7175" class="webpage-link">Webpage</a></p>
                    </div>
                </div>
            `
        }
    },
    {
        path: '/media',
        component: {
            template: `
                <div class="media-section">
                    <div class="media-item">
                        <div>
                            <h3>newsランナー</h3>
                            <p>2023.7.26 TV Kansai<br>
                            <a href="https://www.ktv.jp/runner/" class="webpage-link">Webpage</a></p>
                        </div>
                        <img src="./files/coverage/newsrunner.jpg" alt="newsランナー">
                    </div>
                    <div class="media-item">
                        <div>
                            <h3>フジテレビ日曜報道 THE PRIME</h3>
                            <p>2023.6.4 TV Fuji<br>
                            <a href="https://www.fujitv.co.jp/b_hp/nichiyouhoudou_theprime/" class="webpage-link">Webpage</a></p>
                        </div>
                        <img src="./files/coverage/sunday.jpg" alt="the prime">
                    </div>
                    <div class="media-item">
                        <div>
                            <h3>60秒で学べるNews: AIが生むフェイク</h3>
                            <p>2023.1.25 TV Tokyo<br>
                            <a href="https://www.tv-tokyo.co.jp/60sec_news/backnumber/20230125/" class="webpage-link">Webpage</a></p>
                        </div>
                        <img src="./files/coverage/60news.jpg" alt="60news">
                    </div>
                    <div class="media-item">
                        <div>
                            <h3>報道の日2022</h3>
                            <p>2022.12.18 Tokyo Broadcasting System (TBS) Television<br>
                            <a href="https://www.tbs.co.jp/houdounohi/" class="webpage-link">Webpage</a></p>
                        </div>
                    </div>
                    <div class="media-item">
                        <div>
                            <h3>フェイク動画を見つけ出す高性能AI</h3>
                            <p>子供の科学2022年7月号<br>
                            <a href="https://www.seibundo-shinkosha.net/magazine/kids/71745/" class="webpage-link">Webpage</a></p>
                        </div>
                    </div>
                    <div class="media-item">
                        <div>
                            <h3>ディープフェイク見破れ　東大開発で脚光　「合成の跡」の見つけ方</h3>
                            <p>2022.7.6 毎日新聞電子版, 2022.7.7 紙面版<br>
                            <a href="https://mainichi.jp/articles/20220704/k00/00m/040/113000c" class="webpage-link">Webpage</a></p>
                        </div>
                    </div>
                    <div class="media-item">
                        <div>
                            <h3>偽動画、東京大学は検出精度9割　米メタも封じ込め急ぐ</h3>
                            <p>2022.6.6 日経新聞電子版, 2022.6.7 紙面版16面<br>
                            <a href="https://www.nikkei.com/article/DGXZQOUC232VF0T20C22A5000000/" class="webpage-link">Webpage</a></p>
                        </div>
                    </div>
                    <div class="media-item">
                        <div>
                            <h3>ディープフェイクの検出で世界最高性能を達成 ～SBIsでディープフェイク動画の高精度判定を可能に～</h3>
                            <p>2022.4.6 東京大学プレスリリース<br>
                            <a href="https://www.i.u-tokyo.ac.jp/news/press/2022/202204262039.shtml" class="webpage-link">Webpage</a></p>
                        </div>
                    </div>
                </div>
            `
        }
    },
    {
        path: '/other',
        component: {
            template: `
                <div class="other-section">
                    <div class="other-item">
                        <h3>Reviewer Experience</h3>
                        <p>CVPR'23 / ICCV'23 / CVPR'24 / ECCV'24 / CVPR'25 / ICCV'25</p>
                    </div>
                </div>
            `
        }
    }
];

window.router = new VueRouter({
    routes,
    mode: 'hash'
});
