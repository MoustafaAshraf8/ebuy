interface Comment_interface {
  productreview_comment_heading: string;
  productreview_comment_body: string;
  productreview_clientid: number;
  productreview_rating: number;
  client_id: number;
  client_name: string;
  client_email: string;
  client_phone: string;
  client_address: string;
}

export class Parser {
  public static clientParser(client: string): any[] {
    const parsed = JSON.parse(client);
    let result = [];

    for (let i = 0; i < parsed.length; i++) {
      let client = {
        person_id: parsed[i].person_id,
        person_name: parsed[i].person_name,
        person_email: parsed[i].person_email,
        person_phone: parsed[i].person_phone,
        person_address: parsed[i].person_address,
      };
      result.push(client);
    }
    return result;
  }
  public static sellerParser(seller: string): any[] {
    const parsed = JSON.parse(seller);
    let result = [];

    for (let i = 0; i < parsed.length; i++) {
      let seller = {
        person_id: parsed[i].person_id,
        person_name: parsed[i].person_name,
        person_email: parsed[i].person_email,
        person_phone: parsed[i].person_phone,
        person_address: parsed[i].person_address,
      };
      result.push(seller);
    }
    return result;
  }

  public static productParser(product: string): any[] {
    const parsed = JSON.parse(product);
    console.log(typeof parsed[0].productreview_comment_heading);
    let result = [];

    let commentMap = new Map<number, Comment_interface[]>();
    let visitedMap = new Map<number, boolean>();
    for (let i = 0; i < parsed.length; i++) {
      const productid = Number(parsed[i].product_productid);
      //console.log(productid);
      const comment: Comment_interface = {
        productreview_comment_heading: parsed[i].productreview_comment_heading,
        productreview_comment_body: parsed[i].productreview_comment_body,
        productreview_clientid: parsed[i].productreview_clientid,
        productreview_rating: parsed[i].productreview_rating,
        client_id: parsed[i].client_id,
        client_name: parsed[i].client_name,
        client_email: parsed[i].client_email,
        client_phone: parsed[i].client_phone,
        client_address: parsed[i].client_address,
      };

      if (commentMap.has(productid) && comment.productreview_clientid != null) {
        let newarr = commentMap.get(productid) as Array<Comment_interface>;
        newarr.push(comment);
        commentMap.set(Number(productid), newarr as Array<Comment_interface>);
      } else if (comment.productreview_clientid != null) {
        commentMap.set(Number(productid), [comment]);
      }

      if (!visitedMap.has(productid)) {
        visitedMap.set(productid, false);
      }
    }

    for (let i = 0; i < parsed.length; i++) {
      if (visitedMap.get(parsed[i].product_productid) == false) {
        let product = {
          data: {
            product_productid: parsed[i].product_productid,
            product_sellerid: parsed[i].product_sellerid,
            product_name: parsed[i].product_name,
            product_price: parsed[i].product_price,
            product_quantity: parsed[i].product_quantity,
            product_discount: parsed[i].product_discount,
            product_category: parsed[i].product_category,
            product_description: parsed[i].product_description,
          },

          seller: {
            seller_id: parsed[i].seller_id,
            seller_name: parsed[i].seller_name,
            seller_email: parsed[i].seller_email,
            seller_phone: parsed[i].seller_phone,
            seller_address: parsed[i].seller_address,
          },

          comment: commentMap.get(parsed[i].product_productid) || [],
        };
        result.push(product);
        visitedMap.set(parsed[i].product_productid, true);
      }
    }

    return result;
  }
}

/*

product_productid: parsed[i].product_productid,
product_sellerid: parsed[i].product_sellerid,
product_name: parsed[i].product_name,
product_price: parsed[i].product_price,
product_quantity: parsed[i].product_quantity,
product_discount: parsed[i].product_discount,
product_category: parsed[i].product_category,
product_description: parsed[i].product_description,

seller_id: parsed[i].seller_id,
seller_name: parsed[i].seller_name,
seller_email: parsed[i].seller_email,
seller_phone: parsed[i].seller_phone,
seller_address: parsed[i].seller_address,

productreview_comment_heading:
parsed[i].productreview_comment_heading,
productreview_comment_body: parsed[i].productreview_comment_body,
productreview_clientid: parsed[i].productreview_clientid,
productreview_rating: parsed[i].productreview_rating,
client_id: parsed[i].client_id,
client_name: parsed[i].client_name,
client_email: parsed[i].client_email,
client_phone: parsed[i].client_phone,
client_address: parsed[i].client_address,

*/
