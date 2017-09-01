export class SearchModel{
    title: string;
    product: Array<FavoriteItemsModel>;
}
export class FavoriteItemsModel {
    name: string;
    detail: string;
    price: string;
    img: string;
}