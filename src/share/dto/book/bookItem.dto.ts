export type BookItemDto ={
    bookName:string,
    bookAuthor:string,
    bookPrice:string,
    linkDetail:string,
    bookDetail:{
        bookDetail:{
            price:string,
            sale:string,
            PublishDate:string,
            Publisher:string,
            Pages:string,
            Dimensions:string,
            Languages:string,
            Type:string,
            description:string[] | {},
        }
        Author:{
            name:string,
            about:string
        },
        bookImage:string
    }
   
}