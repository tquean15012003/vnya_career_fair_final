import { GET_COMPANY_DETAIL } from "../types/CompanyTypes"

const companyList = [
    {
        id: "1",
        companyName: "Shopee",
        image: "./assets/img/vnya_logo_shopee.png",
        goldSponsor: true, videoURL: "https://www.youtube.com/embed/yQ8xTJBft6M",
        companyInfo: [
            "Shopee là nền tảng Thương mại điện tử hàng đầu tại Đông Nam Á và Đài Loan. Shopee kết nối Người tiêu dùng, Nhà bán lẻ và các Doanh nghiệp tại Châu Á và các thị trường với tốc độ phát triển kinh tế mạnh mẽ khác, cho phép người dùng mua và bán ở mọi nơi và mọi lúc.",
            "Bằng việc mang đến trải nghiệm mua sắm trực tuyến đơn giản, an toàn và có tính tương tác cao, Shopee nhận được hàng triệu lượt truy cập từ người dùng mỗi ngày. Bên cạnh đó, chúng tôi mang đến cho người dùng danh mục sản phẩm đa dạng, hỗ trợ nhiều phương thức thanh toán và hệ thống giao nhận rộng lớn. Ngoài ra, Shopee còn mang đến kho giải trí độc đáo với nội dung được thiết kế tương thích với từng thị trường. Shopee cũng là một yếu tố chính đóng góp cho nền kinh tế kỹ thuật số trong khu vực với cam kết hỗ trợ các Thương hiệu và Nhà bán hàng đạt được kết quả hoạt động tốt nhất trong lĩnh vực TMĐT.",
            "Shopee trực thuộc Sea (niêm yết trên NYSE với mã SE), công ty hàng đầu toàn cầu trong lĩnh vực tiêu dùng internet. Ngoài Shopee, các doanh nghiệp cốt lõi khác của Sea bao gồm Giải trí số, Garena và lĩnh vực dịch vụ tài chính kỹ thuật số, SeaMoney. Sứ mệnh của Sea là cải thiện cuộc sống của người tiêu dùng và các doanh nghiệp nhỏ bằng công nghệ.",
        ],
        companySocial: [
            {
                site: "https://shopee.vn/",
                icon: "fa fa-globe",
            },
            {
                site: "https://careers.shopee.vn/",
                icon: "fa fa-shopping-bag"
            },
            {
                site: "https://www.facebook.com/shopeecareers.vn",
                icon: "fab fa-facebook",
            },
            {
                site: "https://www.linkedin.com/company/shopee/",
                icon: "fab fa-linkedin",
            },
            {
                site: "https://www.instagram.com/lifeatshopee/",
                icon: "fab fa-instagram",
            },
        ],
    },
    {
        id: "2",
        companyName: "P&G",
        image: "./assets/img/vnya_logo_pandg.png",
        goldSponsor: true, videoURL: "https://www.youtube.com/embed/z251wmzHpoA",
        companyInfo: [
            "P&G được thành lập hơn 180 năm là một công ty xà phòng và nến đơn giản. Ngày nay, chúng tôi là công ty hàng tiêu dùng lớn nhất thế giới và là quê hương của các thương hiệu đáng tin cậy, mang tính biểu tượng giúp cuộc sống dễ dàng hơn một chút bằng những điều rất nhỏ nhưng có ý nghĩa. Chúng tôi đã trải qua ba thế kỷ nhờ vào ba ý tưởng đơn giản: lãnh đạo, đổi mới và quyền công dân.",
            "Sự hiểu biết sâu sắc, sự đổi mới và niềm đam mê của các đội ngũ tài năng đã giúp chúng tôi phát triển thành một công ty toàn cầu được quản lý một cách có trách nhiệm và đạo đức, công khai và minh bạch, hỗ trợ các mục tiêu tốt và bảo vệ môi trường. Đây là nơi bạn có thể tự hào khi được làm việc và làm một điều gì đó quan trọng.",
        ],
        companySocial: [
            {
                site: "https://us.pg.com/",
                icon: "fa fa-globe",
            },
            {
                site: "https://www.pgcareers.com/",
                icon: "fa fa-shopping-bag"
            },
            {
                site: "https://www.facebook.com/proctergamble",
                icon: "fab fa-facebook",
            },
            {
                site: "https://www.linkedin.com/company/procter-and-gamble/",
                icon: "fab fa-linkedin",
            },
        ],
    },
    {
        id: "3",
        companyName: "Intel",
        image: "./assets/img/vnya_logo_intel.png",
        goldSponsor: true, videoURL: "https://www.youtube.com/embed/4oQoZF_KRCc",
        companyInfo: [
            "Intel Việt Nam đã đi một chặng đường dài kể từ khi công bố quyết định đầu tư và xây dựng nhà máy vào năm 2006. Khởi đầu từ một nhóm chưa đầy 50 nhân viên, công ty hiện đã là một đội ngũ lao động gần 3000 nhân viên tài năng với trình độ cao, không ngừng nỗ lực thúc đẩy phát triển, đưa Intel Việt Nam trở thành mắt xích quan trọng trong chuỗi sản xuất của Intel trên toàn thế giới. Intel tự hào sản xuất nhiều dòng sản phẩm bán dẫn, góp phần làm phong phú thêm cuộc sống của mỗi người trên trái đất và luôn hướng đến mục đích tạo dựng tương lai của Intel và Việt Nam.",
            "Đóng vai trò quan trọng trong hành trình phát triển của Intel Việt Nam là những khách hàng, đối tác, nhân viên tận tụy và gia đình của họ, những người ủng hộ đã và đang đồng hành cùng công ty trong suốt 15 năm qua. Những thành tựu to lớn mà công ty đạt được, phải kể đến vì có sự tin tưởng và ủng hộ từ mọi người, và Intel Việt Nam luôn rất trân trọng điều đó.",
        ],
        companySocial: [
            {
                site: "https://www.intel.vn/content/www/vn/vi/homepage.html",
                icon: "fa fa-globe",
            },
            {
                site: "https://www.intel.com/content/www/us/en/jobs/locations/vietnam.html",
                icon: "fa fa-shopping-bag"
            },
            {
                site: "https://www.facebook.com/IntelVietnam",
                icon: "fab fa-facebook",
            },
            {
                site: "https://www.linkedin.com/company/intel-corporation/",
                icon: "fab fa-linkedin",
            },
            {
                site: "https://www.youtube.com/channel/UCHJnltjgj0Y6xCxPzziHhHA",
                icon: "fab fa-youtube",
            },
        ]
    },
    {
        id: "4",
        companyName: "SIM",
        image: "./assets/img/vnya_logo_sim.png",
        goldSponsor: true, videoURL: "https://www.youtube.com/embed/LRgis-bd9kw",
        companyInfo: [
            "Singapore Institute of Management (SIM) được thành lập năm 1964 dựa trên đề xướng của Tổng cục phát triển kinh tế (Economic Development Board – EDB) thuộc Bộ Công Thương Singapore nhằm mục đích đào tạo cán bộ nguồn cấp quản lý cho chính phủ, hỗ trợ tiến trình công nghiệp hóa của Singapore.",
            "SIM hiện tại là cơ sở giáo dục đại học tư thục hàng đầu tại Singapore, cung cấp các chương trình đào tạo và giáo dục chất lượng, được cấp bằng bởi hơn 10 trường đại học quốc tế danh tiếng hàng đầu đến từ vương quốc Anh, Mỹ, Úc và Pháp. Với hơn 150,000 cựu sinh viên và 17,000 sinh viên đang theo học tới từ 40 quốc gia.",
        ],
        companySocial: [
            {
                site: "https://www.sim.edu.sg/Pages/index.aspx",
                icon: "fa fa-globe",
            },
            {
                site: "https://www.sim.edu.sg/careers/pages/careers-overview.aspx",
                icon: "fa fa-shopping-bag"
            },
            {
                site: "https://www.facebook.com/globalsim",
                icon: "fab fa-facebook",
            },
            {
                site: "https://www.linkedin.com/school/singapore-institute-of-management/?fbclid=IwAR1WKDlGBJ4v7zE1BnVe4SS3vlKK9yQQJMyQoDnVV-elub_Ssj8tTqQ45Ps",
                icon: "fab fa-linkedin",
            },
        ],
    },
    {
        id: "5",
        companyName: "VNG",
        image: "./assets/img/vnya_logo_vng.png",
        goldSponsor: true, videoURL: "https://www.youtube.com/embed/Q6HyvcNu2bk",
        companyInfo: [
            "Được thành lập từ năm 2004, VNG đã trải qua 17 năm phát triển và mở rộng để trở thành một trong những công ty Internet & Công nghệ hàng đầu cả nước và Đông Nam Á với hơn 4000 nhân viên đang làm việc ở nhiều quốc gia. Bên cạnh đó, VNG còn được biết đến là Kỳ lân công nghệ đầu tiên của Việt Nam chạm ngưỡng 2.2 tỉ USD vào năm 2022, theo đánh giá của Temasek Holdings. 4 mảng sản phẩm chính của công ty là Trò chơi trực tuyến, Nền tảng kết nối, Thanh toán điện tử và Dịch vụ điện toán đám mây.",
        ],
        companySocial: [
            {
                site: "https://www.vng.com.vn/",
                icon: "fa fa-globe",
            },
            {
                site: "https://career.vng.com.vn/co-hoi-nghe-nghiep",
                icon: "fa fa-shopping-bag"
            },
            {
                site: "https://www.facebook.com/VNGCorporation.Page",
                icon: "fab fa-facebook",
            },
            {
                site: "https://www.linkedin.com/company/vng-corporation/",
                icon: "fab fa-linkedin",
            },
        ],
    },
    {
        id: "6",
        companyName: "Vietnam Airline",
        image: "./assets/img/vnya_logo_vnairline.png",
        goldSponsor: true, videoURL: "",
        companyInfo: [],
        companySocial: [],
    },
    {
        id: "7",
        companyName: "L'Oréal",
        image: "./assets/img/vnya_logo_loreal.png",
        goldSponsor: false, videoURL: "",
        companyInfo: [
            "Vào giữa năm 2007, tập đoàn L'Oréal quyết định mở công ty chi nhánh tại Việt Nam, một trong 15 thị trường tiềm năng của tập đoàn để tiếp tục mang đến cho người tiêu dùng Việt các sản phẩm hiệu quả và an toàn, đáp ứng tất cả mong muốn và nhu cầu làm đẹp đa dạng của tất cả mọi người. Sứ mệnh của L'Oréal Việt Nam là trở thành công ty mỹ phẩm hàng đầu tại Việt Nam và là một trong những doanh nghiệp điển hình của thế kỷ 21. “Tạo ra cái đẹp làm lay chuyển Thế giới” chính là cam kết lâu dài của tập đoàn L’Oréal tại Việt Nam. Liên tục trong 14 năm qua, L'Oréal Việt Nam đã đưa về giới thiệu tại Việt Nam 12 thương hiệu hàng đầu từ Ngành hàng cao cấp (Lancôme, shu uemura, Kiehl’s, Yves Saint Laurent) đến Ngành hàng tiêu dùng (Maybelline New York, L’Oréal Paris, Garnier), Ngành hàng Tóc chuyên nghiệp (L’Oréal Professionnel, Kérastase) và Ngành hàng Dược mỹ phẩm (Vichy, La-roche Posay, SkinCeuticals).",
        ],
        companySocial: [
            {
                site: "https://www.loreal.com/en/vietnam/",
                icon: "fa fa-globe",
            },
            {
                site: "https://www.loreal.com/en/careers/",
                icon: "fa fa-shopping-bag"
            },
            {
                site: "https://www.facebook.com/lorealgroupe/?brand_redir=191131958151503",
                icon: "fab fa-facebook",
            },
            {
                site: "https://www.linkedin.com/company/lor%C3%A9al/",
                icon: "fab fa-linkedin",
            },
            {
                site: "https://www.youtube.com/c/loreal",
                icon: "fab fa-youtube",
            },
        ],
    },
    {
        id: "8",
        companyName: "The Smart Local",
        image: "./assets/img/vnya_logo_smart.png",
        goldSponsor: false, videoURL: "",
        companyInfo: [
            "The Smart Local Vietnam is an online guide to Vietnamese culture, things to do and what to see in Vietnam, and trending news for everyone who loves the country.",
            "The company is a part of the regional team of The Smart Local Media Group, which also creates content about Singapore, Malaysia, Thailand, the Philippines, Japan, and South Korea. Their sister sites include Singapore news site MustShareNews.com, Singapore food website Eatbook, and female-centric lifestyle site Zula.",
        ],
        companySocial: [
            {
                site: "https://tslmedia.sg/",
                icon: "fa fa-globe",
            },
            {
                site: "https://tslmedia.sg/jobs/",
                icon: "fa fa-shopping-bag"
            },
            {
                site: "https://www.facebook.com/TheSmartLocal/",
                icon: "fab fa-facebook",
            },
            {
                site: "https://www.linkedin.com/company/thesmartlocal-com/?originalSubdomain=sg",
                icon: "fab fa-linkedin",
            },
            {
                site: "https://www.youtube.com/user/TheSmartLocal",
                icon: "fab fa-youtube",
            },
        ],
    },
    {
        id: "9",
        companyName: "AIESEC",
        image: "./assets/img/vnya_logo_aiesec.png",
        goldSponsor: false, videoURL: "",
        companyInfo: [
            "Thành lập từ năm 1948, AIESEC là tổ chức thanh niên quốc tế lớn nhất thế giới, có mặt trên 111 quốc gia và vùng lãnh thổ. AIESEC hướng tới phát triển phát triển kỹ năng lãnh đạo cho thế hệ trẻ và tạo nên những tác động tích cực đến xã hội thông qua môi trường làm việc thử thách và trải nghiệm đa văn hóa của các chương trình trao đổi quốc tế.</p>",
            "Virtual Professional Program (Chương trình Thực tập Quốc tế Trực tuyến) là một trong những chương trình phát triển người trẻ của AIESEC. Chương trình cung cấp cho các bạn trẻ trải nghiệm thực tập từ xa ngành Business Administration, Business Development, Marketing, IT... tại 1 công ty ở nước ngoài (có lương) nhằm phát triển kỹ năng lãnh đạo, tích lũy kinh nghiệm làm việc thực tiễn và các yếu tố cần thiết để thúc đẩy con đường sự nghiệp sau này.",
        ],
        companySocial: [
            {
                site: "https://www.aiesec.vn/",
                icon: "fa fa-globe",
            },
            {
                site: "https://www.aiesec.vn/join-aiesec",
                icon: "fa fa-shopping-bag"
            },
            {
                site: "https://www.facebook.com/AIESECinVietnam",
                icon: "fab fa-facebook",
            },
            {
                site: "https://www.linkedin.com/company/aiesecinvietnam/",
                icon: "fab fa-linkedin",
            },
        ],
    },
    {
        id: "10",
        companyName: "Future Management Trainee",
        image: "./assets/img/vnya_logo_fmt.png",
        goldSponsor: false, videoURL: "",
        companyInfo: [],
        companySocial: [],
    },

]

export const getCompanyDetailAction = (id) => {
    const companyDetail = companyList.find(item => item.id === id)
    return {
        type: GET_COMPANY_DETAIL,
        companyDetail,
    }
}