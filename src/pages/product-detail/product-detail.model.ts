export class ProductDetailModel {
    id: string;
    name: string;
    detail: string;
    unitprice: number;
    image: Array<ImgsModel>;
    review: Array<ReviewsModel>;
    rate: number;
    qa: Array<QASModel>;
    promotions: Array<PromotionsModel>;
    qty: number;
    issize: boolean;
    size: ProductDataSize = new ProductDataSize();
    shipping: Array<ShippingModel>;
    shopseller: string;
    relationProducts: Array<RelationProductsModel>;
    selectedsize: string;
    title: string;
}
export class ProductDataSize {
    detail: string;
    sizedetail: Array<SizeDetailModel>;
}

export class ImgsModel {
    url: string;
    id: string;
}
export class ReviewsModel {
    comment: string;
    rate: number;
}
export class QASModel {
    question: string;
    answer: number;
}

export class PromotionsModel {
    name: string;
    desc: string;
    code: string;
}
export class SizeDetailModel {
    name: string;
}
export class ShippingModel {
    shipping: string;
}

export class RelationProductsModel {
    name: string;
    img: string;
    unitprice: number;
}