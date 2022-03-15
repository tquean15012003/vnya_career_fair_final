import { GET_COMPANY_DETAIL } from "../types/CompanyTypes"

const stateDefault = {
    companyDetail:
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
        companySpeaker: [
            {image: "./assets/img/vnya_speaker_shopee.png"},
        ],
    },
}

export const CompanyReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_COMPANY_DETAIL: {
            return { ...state, companyDetail: action.companyDetail }
        }
        default: {
            return { ...state }
        }
    }
}